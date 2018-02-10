package com.example.demo;

import lombok.Data;

import java.util.Date;
import javax.persistence.*;
import javax.validation.*;
import javax.validation.constraints.*;


@Data
@Entity

public class Drinks {

	private @Id @GeneratedValue Long Id;
	private String drinksname;

	private Drinks() {}

	public Drinks(String drinksname) {
	
		this.drinksname = drinksname;
		
	}
}