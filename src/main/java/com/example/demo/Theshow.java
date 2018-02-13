package com.example.demo;
import lombok.Data;
import javax.persistence.*;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Data
@Entity
@Table(name="Theshow")
public class Theshow {

    @ManyToOne
    private ComingSoon comingSoon;
    @ManyToOne
    private Employee employee;
    @ManyToOne
    private Theatre theatre;


    private @Id @GeneratedValue Long saveReportID;
    private String room;
    private String name;
    private String time;
    private Date date;

    public Theshow(){}
    public Theshow(String name,String time,Date date,Employee employee,ComingSoon comingSoon,Theatre theatre,String room){
        this.name = name;
        this.time = time;
        this.date = date;
        this.employee = employee;
        this.comingSoon = comingSoon;
        this.theatre = theatre;
        this.room = room;


    }
}
