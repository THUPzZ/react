package com.example.demo;
import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.*;

import lombok.Data;

@Data
@Entity
@Table(name="OfSeats")
public class OfSeats {
    private @Id @GeneratedValue Long _ID;
    @ManyToOne
    private Employee employee;
    @ManyToOne
    private Theshow theshow;
    @ManyToOne
    private Seat seat;
    
    

    private String moviename;
    private String room;
    

    private OfSeats(){}
    OfSeats(Employee employee,Theshow theshow,Seat seat,String moviename,String room){
        this.employee=employee;
        this.theshow=theshow;
        this.seat=seat;
        this.moviename=moviename;
        this.room=room;
       

    
  
    }

}
