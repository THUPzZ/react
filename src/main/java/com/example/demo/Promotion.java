package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Data;


import java.util.Date;

@Data
@Entity
public class Promotion {
    private @Id @GeneratedValue Long Promotion_ID;
    @NotNull
    @Pattern(regexp = "mov\\d{3}")
    private String number;
    private String fastival;
    private String  promov;
    private Date dateStart;
    private Date dateStop;


    @OneToOne
    private Employee employeeID;

    private Promotion(){}
    public Promotion(String number, String fastival, String  promov, Date dateStart,Date dateStop,Employee employeeID){
        this.number = number;
        this.fastival = fastival;
        this.promov = promov;
        this.dateStart = dateStart;
        this.dateStop = dateStop;
        this.employeeID = employeeID;

    }


}
