package com.example.demo;
import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.*;

import lombok.Data;

@Data
@Entity
@Table(name="Memberclass")
public class Memberclass {
    
   private  @Id  @GeneratedValue Long Id;
   private String idclass;
    private  String _class;


    private Memberclass(){}
    Memberclass(String _class,String idclass){
    this._class= _class;
    this.idclass = idclass;
    
  
    }

}
