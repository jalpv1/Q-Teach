package com.kpi.voting.domain;

import com.kpi.voting.dao.ChatRepository;
import com.kpi.voting.dao.entity.ChatQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.Date;
import java.util.List;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 08.04.2019.
 */
@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;
    @PersistenceContext
    private EntityManager entityManager;

    public Long createQuestion(String title) {
        chatRepository.deleteAll();
        ChatQuestion chat_question = new ChatQuestion();
        chat_question.setQuestion(title);
        chat_question = chatRepository.save(chat_question);
        chatRepository.flush();
        return chat_question.getId();
    }
    // save question from the student
    public void saveMessage(final String message) {
        chatRepository.saveChatQuestion(new Date(), message,new Long(0));
    }

    // get  current like's counter
    public Long getLike(Long likeId){
        Query query = entityManager.createNativeQuery("Select counterLikes from chat_question where chat_question.id=?")
                .setParameter(1,likeId);
        return  (Long)(query.getSingleResult());
    }

    //add 1 like to the question with likeid
    public void addLike(Long likeId){
        Long counter=this.getLike(likeId);
        counter++;
        chatRepository.updateLikes(counter,likeId);
    }

    public List<String> sortByLikes(){
        return chatRepository.findAllByLikes();
    }

    public List<String> sortByDate(){
       return chatRepository.findAllByDate();
    }

    public int getNumberOfRows(){ return chatRepository.getNumOfRows();}
   // public List<String> getAllMessages() {
    //    return chatRepository.findAllMessages();
    //}

}
