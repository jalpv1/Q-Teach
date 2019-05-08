package com.kpi.voting.dao.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "chatQuestion")
@Cacheable(false)
public class ChatQuestion {
    @Id
    @GeneratedValue()
    private Long id;

    @Column(length = 255)
    String question;

    @Temporal(TemporalType.DATE)
    private Date createdAt;

    @NotNull
    @Column()
    private int counterlikes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public int getCounterlikes() {
        return counterlikes;
    }

    public void setCounterlikes(int counterlikes) {
        this.counterlikes = counterlikes;
    }


}
