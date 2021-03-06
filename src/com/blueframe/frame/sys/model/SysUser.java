package com.blueframe.frame.sys.model;

import com.blueframe.frame.base.model.BaseEntity;

/**
 * 用户 对象
 * @author hhLiu
 */
public class SysUser extends BaseEntity<SysUser> {
	
	private static final long serialVersionUID = 1L;

	private String name;
	private String username;
	private String password;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
