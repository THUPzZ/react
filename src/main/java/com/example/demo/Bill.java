package com.example.demo;

import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;
@Data
@Entity
public class Bill {

    private @Id  @GeneratedValue  Long id;

    private String name;
    private String aa;


    //@ManyToOne
   // private Employee nameEmployee;

    private Bill() {}

    public Bill(String name,String aa) {
        this.name=name;
        this.aa=aa;




    }
}