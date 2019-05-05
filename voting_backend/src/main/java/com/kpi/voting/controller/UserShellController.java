package com.kpi.voting.controller;

import com.kpi.voting.domain.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 19.04.2019.
 */
@ShellComponent
public class UserShellController {

    @Autowired
    private UserService userService;

    @ShellMethod("Create User")
    public void c(String userName) {
        userService.createUser(userName);
    }

    @ShellMethod("Print User")
    public void p() {
        userService.getAllUsers().forEach(System.out::println);
    }

}
