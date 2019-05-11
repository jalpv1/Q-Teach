package com.kpi.voting.controller;


import com.kpi.voting.domain.AutoVoteService;
import com.kpi.voting.dto.RequestVoteDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;



@RestController

@RequestMapping("autovote")
public class VoteAutoQuestionController {

    @Autowired
    private AutoVoteService voteService;
    @Autowired
    private org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties WebEndpointProperties;

    @PostMapping(produces = "application/json")
    public ResponseEntity<?> answer(@Valid @RequestBody RequestVoteDto vote) {
        try {
            voteService.vote(vote);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
