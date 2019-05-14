package com.kpi.voting.controller;
import com.kpi.voting.dao.entity.AutoQuestion;
import com.kpi.voting.domain.AutoQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import java.util.Date;

import java.util.Objects;

@RestController
@RequestMapping("autoquestion")
public class AutoQuestionController {
    @Autowired
    private AutoQuestionService autoquestionService;

    @GetMapping(value = "auto")
    public @ResponseBody
    AutoQuestion getLastAutoQuestion(@RequestParam("date")  @DateTimeFormat(pattern = "MM-dd-yyyy hh:mm") Date date) {

        return autoquestionService.getLastAutoQuestions(date);
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
