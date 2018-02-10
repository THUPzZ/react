package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Promotion {
    private @Id @GeneratedValue Long ID;
    private String name;
    private String fastival;
    private String  promov;

  private Promotion(){}
    public Promotion(String name, String fastival, String  promov){
        this.name = name;
        this.fastival = fastival;
        this.promov = promov;


    }


}
