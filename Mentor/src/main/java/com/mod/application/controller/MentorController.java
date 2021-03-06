package com.mod.application.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mod.application.dao.CourseDao;
import com.mod.application.dao.MentorDao;
import com.mod.application.dao.TrainingDao;
import com.mod.application.model.Course;
import com.mod.application.model.MentorSkills;
import com.mod.application.model.Training;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
// mentor controller class
public class MentorController {

	@Autowired
	MentorDao mentordao;
	@Autowired
	TrainingDao trainingDao;
	@Autowired
	CourseDao courseDao;

	// Method to get details from training table
	@GetMapping("/training/{mntr_id}")
	public List<Training> getTrainings(@PathVariable int mntr_id) throws SQLException {
		System.out.println("in controller mapping");
		return trainingDao.getCourseDetails(mntr_id);
	}

	// Method to get details from mentor skills table
	@GetMapping("/course/{user_id}")
	public List<MentorSkills> getCourse(@PathVariable int user_id) throws Exception {
		System.out.println("already registered course");
		String course_status = "active";
		return mentordao.getRegisteredCourse(user_id, course_status);
	}

	// Method for search course
	@GetMapping("/search/{letter}")
	public List<Course> searchCourse(@PathVariable String letter) throws Exception {
		System.out.println("SEARCH RESULT");
		return courseDao.findByCourse(letter);
	}

	// Method to delete completed course from already registered corse page
	@GetMapping("/delete/{user_id}/{course_id}")
	public void deleteCourse(@PathVariable int user_id, @PathVariable int course_id) throws Exception {
		System.out.println("deleted row");
		// System.out.println(mentordao.getRegisteredCourse(user_id));
		mentordao.deleteById(user_id, course_id);
	}

	// Method to register course
	@PostMapping("/register")
	public MentorSkills registerCourse(@RequestBody MentorSkills mntr) {
		System.out.println("registerd successfully");
		return mentordao.save(mntr);

	}

	// Method to get course name in search drop down
	@GetMapping("/getCourseName/{user_id}")
	public List<Course> getCourseName(@PathVariable int user_id) {
		return courseDao.findCourseName(user_id);

	}
}
