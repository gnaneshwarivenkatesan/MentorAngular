package com.mod.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="t_user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="user_id")
	private int user_id;
	@Column(name="user_nm")
	private String user_nm;
	@Column(name="role")
	private String role;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public User(int user_id, String user_nm, String role) {
		super();
		this.user_id = user_id;
		this.user_nm = user_nm;
		this.role = role;
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", user_nm=" + user_nm + ", role=" + role + "]";
	}
	
	User(){}
	
	
	
}
