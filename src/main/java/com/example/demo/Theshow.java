package com.example.demo;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Data
@Entity

public class Theshow {

    @ManyToOne
    private ComingSoon comingSoon;
    @ManyToOne
    private Employee employee;


    private @Id @GeneratedValue Long saveReportID;
    private String room;
    private String name;
    private String time;
    private Date date;

    public Theshow(){}
    public Theshow(String room,String name,String time,Date date,Employee employee,ComingSoon comingSoon){
        this.room = room;
        this.name = name;
        this.time = time;
        this.date = date;
        this.employee = employee;
        this.comingSoon = comingSoon;


    }
}
