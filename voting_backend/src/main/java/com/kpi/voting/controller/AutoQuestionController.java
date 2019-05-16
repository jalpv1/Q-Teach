package com.kpi.voting.controller;
import com.kpi.voting.dao.entity.AutoQuestion;
import com.kpi.voting.domain.AutoQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import java.util.Date;

import java.util.Objects;

@RestController
@RequestMapping("auto")
public class AutoQuestionController {
    @Autowired
    private AutoQuestionService autoquestionService;

    @GetMapping(value = "auto")
    public @ResponseBody
    AutoQuestion getLastAutoQuestion(@RequestParam("date") @DateTimeFormat(pattern = "MM-dd-yyyy hh:mm") Date date) {

        return autoquestionService.getLastAutoQuestions(date);
    }

    @GetMapping(value= "count")
    public @ResponseBody
    String toString(){
        return autoquestionService.count();
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
}
