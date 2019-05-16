package com.kpi.voting.controller;

import com.kpi.voting.domain.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 01.04.2019.
 */
@RestController
@RequestMapping("chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping("sorted")
    public @ResponseBody
    List<String> getMessagesByLikes() {
        if (chatService.getNumberOfRows() != 0)
            return chatService.sortByLikes();
        else return null;
    }

    /*@GetMapping()
    public @ResponseBody List<String> getMessagesByDate() {
        if(chatService.getNumberOfRows()!=0)
        return chatService.sortByDate();
        else return null;
    }*/
    @PutMapping()
    public void sendMessage(@RequestBody String message) {

        chatService.createQuestion(message);
    }

    @PutMapping("like")
    public void like(@RequestParam Long chatQuestionId) {
        // System.out.println("!!!!!!");
        try {
            chatService.addLike(chatQuestionId);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @GetMapping("chatlast")
    public Long getLast( ){
       Long id;
       id =  chatService.getLastQuestion();
      return  id;
    }

}
