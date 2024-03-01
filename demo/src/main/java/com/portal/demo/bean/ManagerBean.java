package com.portal.demo.bean;

public class ManagerBean {

	public String id;
	public String name;
	public String managerRole;
	public String address;
	
	public ManagerBean(String id, String name, String managerRole, String address) {
		super();
		this.id = id;
		this.name = name;
		this.managerRole = managerRole;
		this.address = address;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getManagerRole() {
		return managerRole;
	}
	public void setManagerRole(String managerRole) {
		this.managerRole = managerRole;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
}
