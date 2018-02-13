package com.example.demo;

import lombok.Data;

import java.util.Date;
import javax.persistence.*;
import javax.validation.*;
import javax.validation.constraints.*;


@Data
@Entity

public class Snacks {

	private @Id @GeneratedValue Long Id;
	private String snacksName;
	private Integer price;
	
	private Snacks() {}

	public Snacks(String snacksName,Integer price) {
		
		this.snacksName = snacksName;
		this.price = price;
		
	}
}