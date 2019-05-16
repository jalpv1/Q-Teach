package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.VoteAutoQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface VoteAutoQuestionRepository extends JpaRepository<VoteAutoQuestion, Long> {

    Optional<VoteAutoQuestion> findByUserIdAndQuestionId(Long userId, Long questionId);
//    Optional<VoteAutoQuestion> findVoteAutoQuestionByQuestion_Id(Long question_Id);
    @Query("SELECT COUNT(vaq) from VoteAutoQuestion vaq where vaq.answer = ?1 and vaq.question.id = ?2")
    Long countVoteAutoQuestionByAnswerEqualsAndQuestionId(boolean answer, Long questionId);
}
