package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.AutoQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@Repository
public interface AutoQuestionRepository extends JpaRepository<AutoQuestion, Long> {
    List<AutoQuestion> findAll();

    Optional<AutoQuestion> findTopByOrderByIdDesc();

    @Transactional(readOnly = true, propagation = Propagation.REQUIRES_NEW)
    Optional<AutoQuestion> findById(Long id);

    Optional<AutoQuestion> findBycreatedAt(Date createdAt);
    @Query(value = "select a from AutoQuestion a where a.createdAt > :time")
    List<AutoQuestion> findAllByCreatedAtAfterAndAskedFalse(Date time);
}
