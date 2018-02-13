package com.example.demo;

import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
@Entity
public class Bill {

    public @Id @GeneratedValue Long id;
    //@ManyToOne
   // private Employee employee;
    //private String name;
    private String aa;
    private String employee;
    @NotNull
    @Pattern(regexp = "0[6,8,9]\\d{8}")
    private String tell;
    private String mov;




    public Bill() {}

    public Bill(String employee,String aa,String tell,String mov) {
        this.employee = employee;
        this.aa = aa;
        this.tell= tell;
        this.mov=mov;





    }
}