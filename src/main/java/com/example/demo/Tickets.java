package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import javax.validation.*;
import javax.validation.constraints.*;

@Data
@Entity

public class Tickets {

	@GeneratedValue
	@Id
	private Long id;

	@ManyToOne
	private Theshow theshow;
	@ManyToOne
	private Member member;
	@ManyToOne
	private Movie movie;
	@NotNull @Min(70) @Max(500)
	private Integer totalprice;
	

	private Tickets() {}

	public Tickets(Theshow theshow,Movie movie,Member member,Integer totalprice) {

		this.totalprice = totalprice;
		this.movie =movie;
		this.member=member;
		this.theshow=theshow;
	
	
	}
}