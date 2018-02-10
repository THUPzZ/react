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
    private BuyMovie buyMovieID;
    @ManyToOne
    private Employee employee;

    private @Id String comingSoonID;
    private String name;
    private String camp;
    private String detail;
    private Date date;

    private ComingSoon() {}

     ComingSoon(String comingSoonID,String name, String camp, String detail,Date date,Employee employee){
        this.comingSoonID= comingSoonID;
        this.name = name;
        this.camp = camp;
        this.detail = detail;
        this.date = date;
        this.employee = employee;
    }
}
