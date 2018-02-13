package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

import java.util.Date;

@Data
@Entity
public class BillRepair {
    private @Id @GeneratedValue Long RepairID;
    @NotNull
    @Size(min=10,max=200)
    private String note;

    private Date date;



    @OneToOne
    private Employee employeeID;
    @OneToOne
    private Device deviceID;

    private BillRepair(){}
    public BillRepair(String note,Date date,Employee employeeID,Device deviceID){
        this.date = date;
        this.note = note;
        this.employeeID = employeeID;
        this.deviceID = deviceID;

    }


}
