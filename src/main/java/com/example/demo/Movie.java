package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Movie{

	private @Id @GeneratedValue Long id;
	private String idmovie;
	private String namemovie;
	private String camp;
	private String detail;
	private Integer price;

	private Movie() {}

	public Movie(String idmovie, String namemovie,String camp,String detail,Integer price) {
		this.idmovie = idmovie;
		this.namemovie = namemovie;
		this.camp = camp;
		this.detail = detail;
		this.price = price;
	}
}