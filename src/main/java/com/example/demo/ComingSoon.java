package com.example.demo;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;
import java.util.Date;
@Data
@Entity
public class ComingSoon {


    @ManyToOne
    private Employee employee;
    @ManyToOne
    private BuyMovie buy;

    private @Id @GeneratedValue String comingSoonID;
    private String name;
    private String camp;
    private String detail;
    private Date date;

    private ComingSoon() {}

     ComingSoon(String name, String camp, String detail,Date date,Employee employee,BuyMovie buy){
        this.name = name;
        this.camp = camp;
        this.detail = detail;
        this.date = date;
        this.employee = employee;
        this.buy = buy;
    }
}
