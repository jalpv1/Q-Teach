package com.kpi.voting.controller;

import com.kpi.voting.domain.ChatService;
import com.kpi.voting.domain.AutoQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.util.Date;

@ShellComponent
public class ShellAutoQuestionController {

    @Autowired
    private AutoQuestionService autoQuestionService;
    @Autowired
    private ChatService chatService;

    @ShellMethod("Create new AutoQuestion.")
    public void aqc(String question) {

        final Date d = new Date();
        final Long id = autoQuestionService.createQuestion(question,d);
        if (id == null) {
            System.out.println("Something went wrong.");
            return;
        }
        System.out.println("Created question with id = " + id);
    }




}
