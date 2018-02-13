package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;



import javax.persistence.*;
import java.util.Date;
import java.text.SimpleDateFormat;


@Data
@Entity

public class Snack_and_Drink {

	private @Id @GeneratedValue Long Bill;

	@ManyToOne
	private Drinks clickdrink;
	@ManyToOne
	private Snacks clicksnack;
	private String totaldrink;

	private String pricedrink;
		
	private String totalsnack;
	private String pricesnack;
	private String totalprice;
	private Date billdate; 
	

	private Snack_and_Drink() {}

	public Snack_and_Drink(Drinks clickdrink, Snacks clicksnack,String totaldrink,String pricedrink,String totalsnack,String pricesnack,String totalprice,Date billdate) {
	
		this.clickdrink = clickdrink;
		this.clicksnack = clicksnack;
		this.totaldrink = totaldrink;
		this.pricedrink = pricedrink;
		this.totalsnack = totalsnack;
		this.pricesnack = pricesnack;
		this.totalprice = totalprice;
		this.billdate = billdate;
		 
	}
}