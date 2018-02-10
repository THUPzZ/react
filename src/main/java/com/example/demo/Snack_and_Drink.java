package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.*;
import java.util.Date;


@Data
@Entity

public class Snack_and_Drink {

	private @Id @GeneratedValue String Bill;
	private String Drink;
	private String Totaldrink;
	private String Totalpricedrink;
	private String Snack;
	private String Totalsnack;
	private String Totalpricesnack;
	private String Totaldetail;
	private String Billdate;
	private String Billtime;

	private Snack_and_Drink() {}

	public Snack_and_Drink(String Bill, String Drink, String Totaldrink, String Totalpricedrink, String Snack, String Totalsnack, String Totalpricesnack, String Totaldetail, String Billdate, String Billtime) {
		this.Bill = Bill;
		this.Drink = Drink;
		this.Totaldrink = Totaldrink;
		this.Totalpricedrink = Totalpricedrink;
		this.Snack = Snack;
		this.Totalsnack = Totalsnack;
		this.Totalpricesnack = Totalpricesnack;
		this.Totaldetail = Totaldetail;
		this.Billdate = Billdate;
		this.Billtime = Billtime;
	}
}