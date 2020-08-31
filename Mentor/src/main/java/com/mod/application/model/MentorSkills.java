package com.mod.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="t_mntr_skills")
public class MentorSkills {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "skill_id ")
	private int skill_id;
	@Column(name="user_id")
	private int user_id;
	@Column(name="user_nm")
	private String user_nm;
	@Column(name="course_id")
	private int course_id;
	@Column(name="course_desc")
	private String course_desc;
	@Column(name="course_nm")
	private String course_nm;
	@Column(name="status")
	private String status;
	@Column(name="is_active")
	private String is_active;
	public MentorSkills(int skill_id, int user_id, String user_nm, int course_id, String course_desc, String course_nm,
			String status, String is_active) {
		super();
		this.skill_id = skill_id;
		this.user_id = user_id;
		this.user_nm = user_nm;
		this.course_id = course_id;
		this.course_desc = course_desc;
		this.course_nm = course_nm;
		this.status = status;
		this.is_active = is_active;
	}
	public String getIs_active() {
		return is_active;
	}
	public void setIs_active(String is_active) {
		this.is_active = is_active;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getSkill_id() {
		return skill_id;
	}
	public void setSkill_id(int skill_id) {
		this.skill_id = skill_id;
	}

	
	public String getCourse_desc() {
		return course_desc;
	}
	public void setCourse_desc(String course_desc) {
		this.course_desc = course_desc;
	}
	MentorSkills(){
		
	}
	
	

	
}
