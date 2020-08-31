package com.mod.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="t_training")
public class Training {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "training_id ")
	private int training_id;
	@Column(name="course_id")
	private int course_id;
	
	@Column(name="course_nm")
	private String course_nm;
	public int getTraining_id() {
		return training_id;
	}
	public void setTraining_id(int training_id) {
		this.training_id = training_id;
	}
	
	@Column(name="learner_nm")
	private String learner_nm;
	@Column(name="mntr_id")
	private int mntr_id;
	public int getMntr_id() {
		return mntr_id;
	}
	public void setMntr_id(int mntr_id) {
		this.mntr_id = mntr_id;
	}
	@Column(name="status")
	private String status;
	public int getCourse_id() {
		return course_id;
	}
	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}
	public String getCourse_nm() {
		return course_nm;
	}
	public void setCourse_nm(String course_nm) {
		this.course_nm = course_nm;
	}
	public String getLearner_nm() {
		return learner_nm;
	}
	public void setLearner_nm(String learner_nm) {
		this.learner_nm = learner_nm;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	Training(){
	}

}
