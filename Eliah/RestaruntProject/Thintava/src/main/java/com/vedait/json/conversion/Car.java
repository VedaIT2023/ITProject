package com.vedait.json.conversion;

public class Car {

	String name;
	String color;
	double price;
	int maxSpeed;
	String version;
	
	void engineStart() {
		System.out.println("Engine Starting");
	}
	
	void engineStop() {
		System.out.println("Engine Stop");
	}
	
	public Car(String name,String color,double price,int maxSpeed,String version){
		this.name = name;
		this.color = color;
		this.price = price;
		this.maxSpeed = maxSpeed;
		this.version = version;
	}
}
