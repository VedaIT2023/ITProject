package com.jsp.tintava;

public class Restaraunt {
	
String name;
String address;
int pinCode;
String restrauntType;
int minCost;
String logo;
String serviceType;



public Restaraunt(String name, String address, int pinCode, String restrauntType, int minCost, String logo,
		String serviceType) {
	super();
	this.name = name;
	this.address = address;
	this.pinCode = pinCode;
	this.restrauntType = restrauntType;
	this.minCost = minCost;
	this.logo = logo;
	this.serviceType = serviceType;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public int getPinCode() {
	return pinCode;
}
public void setPinCode(int pinCode) {
	this.pinCode = pinCode;
}
public String getRestrauntType() {
	return restrauntType;
}
public void setRestrauntType(String restrauntType) {
	this.restrauntType = restrauntType;
}
public int getMinCost() {
	return minCost;
}
public void setMinCost(int minCost) {
	this.minCost = minCost;
}
public String getLogo() {
	return logo;
}
public void setLogo(String logo) {
	this.logo = logo;
}
public String getServiceType() {
	return serviceType;
}
public void setServiceType(String serviceType) {
	this.serviceType = serviceType;
}
@Override
public String toString() {
	return "Restaraunt [name=" + name + ", address=" + address + ", pinCode=" + pinCode + ", restrauntType="
			+ restrauntType + ", minCost=" + minCost + ", logo=" + logo + ", serviceType=" + serviceType + "]";
}

List<Restaraunt> resta=


}
