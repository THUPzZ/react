package com.example.demo;
import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.*;

import lombok.Data;

@Data
@Entity
@Table(name="Theatre")
public class Theatre {
    
   private  @Id  String theatreID;
   private String labal;
  
  
private Theatre(){}
Theatre(String theatreID,String labal){
    this.theatreID = theatreID;
    this.labal = labal;
    }
}
