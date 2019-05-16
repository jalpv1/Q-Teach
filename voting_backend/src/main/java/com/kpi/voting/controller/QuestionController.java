package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.domain.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping(value = "last")
    public @ResponseBody
    Question getLastQuestion() {
        return questionService.getLastQuestion();
    }

    @PostMapping()
    public @ResponseBody
    String createQuestion(@RequestBody String question) {
        final Long id = questionService.createQuestion(question);
        if (Objects.isNull(id)) {
            return "Something went wrong. Can't create question " + question;
        } else {
            return "Created question [" + question + "] with id = " + id;
        }
    }
    ////////////////////
    @GetMapping(value="NumberVoteYes")
    public @ResponseBody
    ArrayList<Integer> getVoteYesCount(){
       return questionService.findNumberVoteYes();
    }
    @GetMapping(value="NumberVoteNo")
    public @ResponseBody
    ArrayList<Integer> getVoteNoCount(){
        return questionService.findNumberVoteNo();
    }
    @GetMapping(value="title")
    public @ResponseBody
    ArrayList<String> getTitles(){
        return questionService.findAllTitles();
    }
}
