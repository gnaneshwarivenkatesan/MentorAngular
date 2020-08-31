package com.mod.application.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name= "t_course")
public class Course {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name = "course_id ")
private int course_id;
@Column(name = "course_nm ")
private String course_nm;
@Column(name = "course_desc ")
private String course_desc;
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
public String getCourse_desc() {
	return course_desc;
}
public void setCourse_desc(String course_desc) {
	this.course_desc = course_desc;
}
@Override
public String toString() {
	return "Course [course_id=" + course_id + ", course_nm=" + course_nm + ", course_desc=" + course_desc + "]";
}
public Course(int course_id, String course_nm, String course_desc) {
	super();
	this.course_id = course_id;
	this.course_nm = course_nm;
	this.course_desc = course_desc;
}
Course(){
	
}
}
