package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.ChatQuestion;
import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dao.memoryStore.ChatStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 08.04.2019.
 */
@Repository
public interface ChatRepository extends JpaRepository<ChatQuestion, Long> {

    //@Autowired
    //private ChatStore chatStore;
    //@PersistenceContext
    //private EntityManager entityManager;

    //public List<String> findAllMessages() {
    //   return chatStore.getMessages();
    //}
    ///Optional<Question> findTopByOrderByIdDesc();

    List<ChatQuestion> findAll();

    Optional<ChatQuestion> findTopByOrderByIdDesc();

    @Transactional(readOnly = true, propagation = Propagation.REQUIRES_NEW)
    Optional<ChatQuestion> findById(Long id);

    // add 1 like to the db ChatQuestion
    @Modifying(clearAutomatically = true)

    @Transactional(readOnly = false, propagation = Propagation.REQUIRES_NEW)
    //@Query(value = "UPDATE ChatQuestion cq SET cq.counterLikes = ? WHERE cq.id=?", nativeQuery = true)
    @Query("UPDATE ChatQuestion cq SET cq.counterlikes = :counter  WHERE cq.id = :id ")
    void updateLikes(Long counter, Long id);

    //@Query("UPDATE ChatQuestion cq SET cq.counterlikes = counterlikes +1 WHERE cq.id = :id ")
    //int countByCounterlikes(Long id);


    @Query("SELECT cq.question FROM ChatQuestion cq  ORDER BY cq.counterlikes ")
    List<String> findAllByLikes();


    @Query("SELECT cq.question FROM ChatQuestion cq  ORDER BY cq.createdAt")
    List<String> findAllByDate();


    @Query(value = "insert into chatQuestion (createdAt,question,counterLikes) values (:createDate,:questionTitle,:counter)", nativeQuery = true)
 // @Query("insert into chatQuestion cq (cq.createdAt,cq.question,cq.counterLikes) values (:createDate,:questionTitle,:counter)")
  void saveChatQuestion(@Param("createDate") Date dateCreate, @Param("questionTitle") String title, @Param("counter") Long counter);


    @Query("SELECT  count(q) FROM ChatQuestion  q")
    int getNumOfRows();

    /*@Query("SELECT cq.question FROM ChatQuestion cq   ")
    List<String> findAllQuestions();*/

    @Query("SELECT cq.id FROM ChatQuestion cq   ORDER BY cq.counterlikes ")
    List<Long> findAllId();
}
