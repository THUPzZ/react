package com.example.demo;
import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.*;

import lombok.Data;

@Data
@Entity
@Table(name="Seat")
public class Seat {
    
   private  @Id  String seatId;
   private String labal;
   ////////////////status=0คือที่นั่งว่าง status=1มีคนเลือกไปแล้ว status=2 มีคนจอง
   private Integer status;




    private Seat(){}
    Seat(String seatId,String labal,int status){
    this.seatId= seatId;
    this.labal = labal;
    this.status = status;

    
  
    }

}
