package com.kpi.voting.controller;
import com.kpi.voting.dao.entity.AutoQuestion;
import com.kpi.voting.domain.AutoQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("autoquestion")
public class AutoQuestionController {
    @Autowired
    private AutoQuestionService autoquestionService;

    @GetMapping(value = "auto")
    public @ResponseBody
    AutoQuestion getLastAutoQuestion(@RequestParam("date")  @DateTimeFormat(pattern = "MM-dd-yyyy hh:mm") Date date) {

        return autoquestionService.getLastAutoQuestions(date );
    }

    @GetMapping(value = "last")
    public @ResponseBody
    AutoQuestion getLastQuestion() {
        return autoquestionService.getLastQuestion();
    }

    @PostMapping()
    public @ResponseBody
    String createAutoQuestion(@RequestBody String question,Date d) {
        final Long id = autoquestionService.createQuestion(question,d);
        if (Objects.isNull(id)) {
            return "Something went wrong. Can't create question " + question;
        } else {
            return "Created question [" + question + "] with id = " + id;
        }
    }

    @GetMapping(value="NumberVoteYes")
    public @ResponseBody
    ArrayList<Integer> getVoteYesCount(){
        return autoquestionService.findNumberVoteYes();
    }

    @GetMapping(value="NumberVoteNo")
    public @ResponseBody
    ArrayList<Integer> getVoteNoCount(){
        return autoquestionService.findNumberVoteNo();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value= "title")
    public @ResponseBody()
    List<String> getTitles() {
        if (autoquestionService.getNumberOfRows() != 0){
            System.out.println(autoquestionService.finfTitles());
            return autoquestionService.finfTitles();}

        else return null;
    }
}
