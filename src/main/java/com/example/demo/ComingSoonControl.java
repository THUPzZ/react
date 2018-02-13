package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Date;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;


@Controller
public class ComingSoonControl {
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    ComingSoonRepository repository;
    @Autowired
    BuyMovieRepository buyMovieRepository;

    @ResponseBody
    @RequestMapping(path = "/name/{name}/detail/{detail}/camp/{camp}/date/{date}/employee/{employeeID}/id/{id}",method = RequestMethod.GET)
    public String saveReport(
            @PathVariable String name,
            @PathVariable String camp,
            @PathVariable String employeeID,
            @PathVariable String detail,
            @PathVariable String date,
            @PathVariable Long id){

        Employee employee = this.employeeRepository.findOne(employeeID);
        BuyMovie buy = this.buyMovieRepository.findOne(id);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date da = new Date();

        try {
           da = formatter.parse(date);
        } catch (ParseException e) {
          e.printStackTrace();
        }

        ComingSoon comingsoon = new ComingSoon(name,camp,detail,da,employee,buy);
            this.repository.save(comingsoon);
        return "saved";
    }
}
