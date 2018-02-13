package com.example.demo;
import javax.persistence.*;
import java.util.Date;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Data;
import javax.validation.constraints.*;


import lombok.Data;

@Data
@Entity
@Table(name="Member")
public class Member {

    private @Id String userName;
    @Size(min=8,max=12)
    private String pass;
    @NotNull
    private String name;
    @Pattern(regexp = "0\\d{9}")
    private String tel;

    @ManyToOne
    private Memberclass memberclass;
    
   
    private Member(){}
     Member(String userName,String pass,String name,String tel,Memberclass memberclass){
        this.userName = userName;
        this.pass = pass;
        this.name = name;
        this.tel = tel;
        this.memberclass=memberclass;


    }
}
