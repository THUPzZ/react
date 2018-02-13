package com.example.demo;
import javax.persistence.*;
import java.util.Date;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Data;
@Data
@Entity

public class Employee {
    private @Id String employeeID;
    private String nameEmployee;
    private String password;


private Employee(){}

    Employee(String employeeID, String nameEmployee, String password){

    this.employeeID= employeeID;
    this.nameEmployee=nameEmployee;
    this.password = password;
  
    }

}
