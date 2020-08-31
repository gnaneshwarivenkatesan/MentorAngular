package com.mod.application.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mod.application.model.Training;

public interface TrainingDao extends JpaRepository<Training, Object> {
	@Query(value=" select t.training_id,t.mntr_id, t.course_id, t.course_nm, t.learner_nm, t.status FROM t_training t where t.mntr_id=?1", nativeQuery= true)
    public List<Training> getCourseDetails(int mntr_id) throws SQLException;
}
