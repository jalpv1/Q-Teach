package com.kpi.voting.dao.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "autovote")
public class VoteAutoQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Boolean answer;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private AutoQuestion question;

    @NotNull
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getAnswer() {
        return answer;
    }

    public void setAnswer(Boolean answer) {
        this.answer = answer;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public AutoQuestion getQuestion() {
        return question;
    }

    public void setQuestion(AutoQuestion question) {
        this.question = question;
    }

    public static class VoteAutoQuestionRepository {
    }
}
