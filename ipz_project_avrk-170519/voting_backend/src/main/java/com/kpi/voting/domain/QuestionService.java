package com.kpi.voting.domain;


import com.kpi.voting.dao.QuestionRepository;
import com.kpi.voting.dao.entity.Question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Array;
import java.util.*;
import java.text.*;
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

    public ArrayList<Integer> findNumberVoteYes(){
        ArrayList<Integer> listvoteYes=new ArrayList();
        List<Question>question=questionRepository.findAll();
        for (Question i:question ){
            listvoteYes.add(i.getVoteYesCount());
        }
        return listvoteYes;
    }
    public ArrayList<Integer> findNumberVoteNo(){
        ArrayList<Integer> listvoteYes=new ArrayList();
        List<Question>question=questionRepository.findAll();
        for (Question i:question )
            listvoteYes.add(i.getVoteNoCount());
        return listvoteYes;
    }

    public  ArrayList<String>findAllTitles(){
        ArrayList<String> listOfTitles=new ArrayList<>();
        List<Question>question=questionRepository.findAll();
        for (Question i:question )
            listOfTitles.add(i.getTitle());
        return listOfTitles;
    }
}