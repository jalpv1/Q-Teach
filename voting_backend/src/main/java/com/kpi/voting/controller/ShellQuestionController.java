package com.kpi.voting.controller;

import com.kpi.voting.domain.ChatService;
import com.kpi.voting.domain.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

@ShellComponent
public class ShellQuestionController {

    @Autowired
    private QuestionService questionService;
    @Autowired
    private ChatService chatService;

    @ShellMethod("Create new question.")
    public void qc(String question) {
        final Long id = questionService.createQuestion(question);
        if (id == null) {
            System.out.println("Something went wrong.");
            return;
        }
        System.out.println("Created question with id = " + id);
    }


    @ShellMethod("Print Chat Messages.")
    public void printMessages() {
        chatService.sortByLikes().forEach(System.out::println);
    }
    @ShellMethod("Create message to tutor")
    public void cqs(String question) {
        final Long id = chatService.createQuestion(question);
        if (id == null) {
            System.out.println("Something went wrong.");
            return;
        }
        System.out.println("Created chat question with id = " + id);
    }




}
