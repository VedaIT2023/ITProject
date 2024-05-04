package com.vedait.json.conversion;

import java.io.FileReader; 
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonConversion {

	public static void main(String[] args) {
		
		Car eliahCar = new Car("Hyndai","red",13000,230,"v1");
		
		Car saika = new Car("Hyndai","red",14000,430,"v3");
		
		eliahCar.engineStart();
				
		System.out.println(eliahCar.name);
		
		
		
		

		JSONParser parser = new JSONParser();
		try {
	        String projectDirectory = System.getProperty("user.dir");

			Object obj = parser.parse(new FileReader(projectDirectory + "/restarunt.json"));
			JSONObject jsonObject = (JSONObject) obj;

			JSONArray restaurants = (JSONArray) jsonObject.get("Restarunt");
			System.out.println(restaurants.size());

			Iterator iterator = restaurants.iterator();
			while (iterator.hasNext()) {
				JSONObject rst = (JSONObject) iterator.next();

				String name = (String) rst.get("name");
				String address = (String) rst.get("address");
				String pincode = (String) rst.get("pincode");
				String restaruntType = (String) rst.get("RestaruntType");
				String minCost = (String) rst.get("minCost");
				String logo = (String) rst.get("logo");
				String serviceType = (String) rst.get("serviceType");

				System.out.println("Name: " + name);
				System.out.println("Address: " + address);
				System.out.println("Pin Code: " + pincode);
				System.out.println("Restarunt Type: " + restaruntType);
				System.out.println("Min Cost: " + minCost);
				// System.out.println("logo: " + logo);
				System.out.println("Service Type: " + serviceType);
				
				System.out.println("================================");
			}

			for (Object object : restaurants) {
				JSONObject rst = (JSONObject) object;

				String name = (String) rst.get("name");
				String address = (String) rst.get("address");
				String pincode = (String) rst.get("pincode");
				String restaruntType = (String) rst.get("RestaruntType");
				String minCost = (String) rst.get("minCost");
				String logo = (String) rst.get("logo");
				String serviceType = (String) rst.get("serviceType");

				System.out.println("Name: " + name);
				System.out.println("Address: " + address);
				System.out.println("Pin Code: " + pincode);
				System.out.println("Restarunt Type: " + restaruntType);
				System.out.println("Min Cost: " + minCost);
				//System.out.println("logo: " + logo);
				System.out.println("Service Type: " + serviceType);

				System.out.println("================================");

			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
