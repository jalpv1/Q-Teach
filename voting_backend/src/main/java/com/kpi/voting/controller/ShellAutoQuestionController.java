package com.kpi.voting.controller;

import com.kpi.voting.domain.ChatService;
import com.kpi.voting.domain.AutoQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@ShellComponent
public class ShellAutoQuestionController {

    @Autowired
    private AutoQuestionService autoQuestionService;
    @Autowired
    private ChatService chatService;

    @ShellMethod("Create new AutoQuestion.")
    public void aqc(String question,String  date) {

        SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy hh:mm");
        Date convertedDate = new Date();
      try {
          convertedDate = dateFormat.parse(date);
          final Long id = autoQuestionService.createQuestion(question,convertedDate);
          if (id == null) {
              System.out.println("Something went wrong.");
              return;
          }
          System.out.println("Created question with id = " + id);
      }
      catch (ParseException e){
          System.out.println("Wrong date format try \"MM/dd/yyyy hh:mm\"");
      }
      catch (Exception e) {
          e.printStackTrace();
          throw e;
      }


    }




}
