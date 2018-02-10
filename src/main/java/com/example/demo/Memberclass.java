package com.example.demo;
import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.*;

import lombok.Data;

@Data
@Entity
@Table(name="Memberclass")
public class Memberclass {
    @Id 
    private String _class;


    private Memberclass(){}
    Memberclass(String _class){
    this._class= _class;
    
  
    }

}
