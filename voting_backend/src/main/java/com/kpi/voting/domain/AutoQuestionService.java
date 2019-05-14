package com.kpi.voting.domain;

import com.kpi.voting.dao.AutoQuestionRepository;
import com.kpi.voting.dao.entity.AutoQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.List;
import java.util.Optional;

@Service

public class AutoQuestionService {
    @Autowired
    private AutoQuestionRepository questionRepository;


    public void makeAsked(Long id) {
        Optional<AutoQuestion> question = questionRepository.findById(id);
        AutoQuestion q = question.orElse(null);
        q.setAsked(true);
        questionRepository.save(q);
    }

    public AutoQuestion getLastAutoQuestions(Date date) {
        List<AutoQuestion> q = questionRepository.findAllByCreatedAtAfterAndAskedFalse(date);
        Collections.sort(q);
        return q.get(0);
    }

    public AutoQuestion getAutoQuestion(Date dateNow) {
        return questionRepository.findBycreatedAt(dateNow).orElse(null);
    }

    public AutoQuestion getLastQuestion() {
        Optional<AutoQuestion> question = questionRepository.findTopByOrderByIdDesc();
        return question.orElse(null);
    }

    @Transactional
    public AutoQuestion getQuestion(Long id) {
        Optional<AutoQuestion> question = questionRepository.findById(id);
        return question.orElse(null);
    }

    public Long createQuestion(String title,Date date) {
        //questionRepository.deleteAll();
        AutoQuestion question = new AutoQuestion();
        question.setTitle(title);
        question.setCreatedAt(date);
        question = questionRepository.save(question);
        questionRepository.flush();
        return question.getId();
    }

    public void printQuestionStatistics(Long id) {
        AutoQuestion updatedQuestion = this.getQuestion(id);

        System.out.println("Updated statistics:");
        System.out.println(updatedQuestion);
        System.out.println("=========================");
    }
}
