package com.mod.application.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mod.application.model.Course;

public interface CourseDao extends JpaRepository<Course, Object>{
	@Query("select c from Course c where c.course_nm LIKE %:letter%")
	public List<Course> findByCourse(@Param(value="letter") String letter);
	@Query("select c from Course c where c.course_nm NOT IN (select m.course_nm from MentorSkills m where m.user_id=?1 and m.is_active='active')")
	public List<Course> findCourseName(@Param(value="user_id") int user_id);
 

}
