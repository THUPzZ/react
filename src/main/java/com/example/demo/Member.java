package com.example.demo;
import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.validation.constraints.*;

import lombok.Data;

@Data
@Entity
@Table(name="Member")
public class Member {

    private @Id String userName;
    private String pass;
    private String name;
    private String tel;

    @ManyToOne
    private Memberclass memberclass;
    
   
    public Member(){}
    public Member(String userName,String pass,String name,String tel,Memberclass memberclass){
        this.userName = userName;
        this.pass = pass;
        this.name = name;
        this.tel = tel;
        this.memberclass=memberclass;


    }
}
