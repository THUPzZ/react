package com.example.demo;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;
import java.util.Date;
import javax.validation.constraints.*;
import javax.persistence.*;

@Data
@Entity
public class Status {

    @ManyToOne
    private ComingSoon comingSoon;
    @ManyToOne
    private Employee employee;

    private @Id @GeneratedValue String statusID;
    @NotNull
    private String name;
    @Size(min=5,max=30)
    private String camp;
    @Size(min=4,max=40)
    private String detail;
    public Date date;

    private Status() {}

     Status(String name, String camp, String detail,Date date,ComingSoon comingSoon,Employee employee){
        this.name = name;
        this.camp = camp;
        this.detail = detail;
        this.date = date;
        this.comingSoon = comingSoon;
        this.employee = employee;
    }
}
