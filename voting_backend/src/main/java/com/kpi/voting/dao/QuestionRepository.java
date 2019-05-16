package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Array;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository <Question, Long> {
    List<Question> findAll();

    Optional<Question> findTopByOrderByIdDesc();

    @Transactional(readOnly = true, propagation = Propagation.REQUIRES_NEW)
    Optional<Question> findById(Long id);

    @Query(value="SELECT q.title from Question q where q.autoTime=?",nativeQuery = true)
    List<String>getQuestionToTime(Date time );

   /* @Query(value="SELECT q.voteYesCount from Question q ",nativeQuery = true)
    List<Integer> findvoteYesCountAll();


    List<Integer> findvoteNoCountAll();*/
}





