package com.example.demo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
@Data
@Entity
public class RenderMovie {
    private @Id @GeneratedValue  Long id;
    @ManyToOne
    private BuyMovie iDmovie;
    @ManyToOne
    private Employee employee;


    
    @Size(min=1,max=10)
    private String namemovie;
    @NotNull
    private String camp;
    @NotNull
    private Integer price;
    @Size(min=3,max=30)
    private String note;
    private Date date;




    private RenderMovie() {}

    public RenderMovie(BuyMovie iDmovie,String namemovie,String camp,Integer price,String note,Date date,Employee employee){

        this.iDmovie = iDmovie;
        this.namemovie = namemovie;
        this.camp = camp;
        this.price = price;
        this.note= note;
        this.date= date;
        this.employee = employee;


    }
}
