package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.VoteAutoQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteAutoQuestionRepository extends JpaRepository<VoteAutoQuestion, Long> {

    Optional<VoteAutoQuestion> findByUserIdAndQuestionId(Long userId, Long questionId);
}
