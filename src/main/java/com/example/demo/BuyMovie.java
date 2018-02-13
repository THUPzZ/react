package com.example.demo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Data
@Entity
public class BuyMovie {
	private @Id @GeneratedValue  Long id;
	@ManyToOne
	private Movie idmovie;
	@ManyToOne
    private Employee employee;


	//@ManyToOne
	//private Movie namemovie;
	private String namemovie;
	private String camp;
	private Integer price;
	//private String name;
	private String note;



	private BuyMovie() {}

	public BuyMovie(Movie  idmovie,String namemovie,String camp,Integer price,String note,Employee employee){

		this.idmovie = idmovie;
		this.namemovie = namemovie;
		this.camp = camp;
		this.price = price;
		//this.name = name;
		this.note= note;
		this.employee = employee;


	}
}
