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
	@NotNull
	@ManyToOne
	private Theshow theshow;

	@ManyToOne
	private Member member;






	private Date orderDate = new Date();

	private Tickets() {}

	public Tickets(Theshow theshow,Member member) {

		this.theshow = theshow;
		this.member = member;
	
	
	}
}