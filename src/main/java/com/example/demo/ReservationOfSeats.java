package com.example.demo;
import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.*;

import lombok.Data;

@Data
@Entity
@Table(name="ReservationOfSeats")
public class ReservationOfSeats {
   
    @ManyToOne
    private Member member;
    @ManyToOne
    private Theshow theshow;
    @ManyToOne
    private Seat seat;
    
    private @Id @GeneratedValue Long ID;

    private String moviename;
    private String room;
    private String namemember;

    private ReservationOfSeats(){}
    ReservationOfSeats(Member member,Theshow theshow,Seat seat,String moviename,String room,String namemember){
        this.member=member;
        this.theshow=theshow;
        this.seat=seat;
        this.moviename=moviename;
        this.room=room;
        this.namemember=namemember;

    
  
    }

}
