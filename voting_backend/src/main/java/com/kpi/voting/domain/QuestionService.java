package com.kpi.voting.domain;


import com.kpi.voting.dao.QuestionRepository;
import com.kpi.voting.dao.entity.Question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.Optional;
import java.util.Timer;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    @PersistenceContext
    private EntityManager entityManager;

    public Question getLastQuestion() {
        Optional<Question> question = questionRepository.findTopByOrderByIdDesc();
        return question.orElse(null);
    }

    @Transactional
    public Question getQuestion(Long id) {
        Optional<Question> question = questionRepository.findById(id);
        return question.orElse(null);
    }

    public Long createQuestion(String title) {
        questionRepository.deleteAll();
        Question question = new Question();
        question.setTitle(title);
        question = questionRepository.save(question);
        questionRepository.flush();
        return question.getId();
    }

    public void printQuestionStatistics(Long id) {
        Question updatedQuestion = this.getQuestion(id);

        System.out.println("Updated statistics:");
        System.out.println(updatedQuestion);
        System.out.println("=========================");
    }
/*
    public String getAutoQuestion(){
        Timer time = new Timer();
        Trigger st = new Trigger();
        time.schedule(st, 0, 1000); // Создаем задачу с повторением через 1 сек.

        for (int i = 0; i <= 5; i++) {
            Thread.sleep(3000);
            System.out.println("Execution in Main Thread. #" + i);
            if (i == 5) {
                System.out.println("Application Terminates");
                System.exit(0);
            }
        }
        return (String)query.getSingleResult();
    }

*/
}
