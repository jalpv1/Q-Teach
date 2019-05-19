package com.kpi.voting.domain;

import com.kpi.voting.dao.VoteAutoQuestionRepository;
import com.kpi.voting.dao.VoteRepository;
import com.kpi.voting.dao.entity.AutoQuestion;
import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dto.RequestVoteDto;
import com.kpi.voting.dao.entity.VoteAutoQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.naming.OperationNotSupportedException;
import java.util.Objects;
import java.util.Optional;

@Service
public class AutoVoteService {

    @Autowired
    private VoteAutoQuestionRepository voteRepository;
    @Autowired
    private AutoQuestionService questionService;

    public void vote(RequestVoteDto vote) throws Exception {
        boolean voteExists = isVoteExists(vote.getUserId(), vote.getQuestionId());
        if (voteExists) throw new OperationNotSupportedException("You have already voted.");


        AutoQuestion question = questionService.getQuestion(vote.getQuestionId());

        if (Objects.isNull(question)) throw new OperationNotSupportedException("Question not found.");

        boolean isVoteCreated = createVote(vote, question);
        if (!isVoteCreated) throw new OperationNotSupportedException("Some troubles occurred.");

        questionService.printQuestionStatistics(question.getId());
    }

    private boolean isVoteExists(Long userId, Long questionId) {
        Optional<VoteAutoQuestion> vote = voteRepository.findByUserIdAndQuestionId(userId, questionId);
        return vote.isPresent();
    }

    private boolean createVote(RequestVoteDto vote, AutoQuestion question) {
        VoteAutoQuestion newVote = new VoteAutoQuestion();

        newVote.setUserId(vote.getUserId());
        newVote.setAnswer(vote.isAnswer());
        newVote.setQuestion(question);

        newVote = voteRepository.save(newVote);
        voteRepository.flush();

        return (newVote.getId() != null);
    }

    // get  current yes's counter
    public Long getYes(Long autoQuestionId) {
        return voteRepository.countVoteAutoQuestionByAnswerEqualsAndQuestionId(true, autoQuestionId);
    }

    public Long getNo(Long autoQuestionId) {
        return voteRepository.countVoteAutoQuestionByAnswerEqualsAndQuestionId(false, autoQuestionId);
    }
}
