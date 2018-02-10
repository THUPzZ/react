package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import java.util.Date;

@Controller
public class TheshowController {
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    ComingSoonRepository comingSoonRepository;
    @Autowired
    TheshowRepository repository;

    @ResponseBody
    @RequestMapping(path = "/room/{room}/name/{name}/time/{time}/date/{date}/employee/{employeeID}/comingSoon/{comingSoonID}",method = RequestMethod.GET)
    public String saveReport(
                             @PathVariable String room,
                             @PathVariable String employeeID,
                             @PathVariable String comingSoonID,
                             @PathVariable String name,
                             @PathVariable String time,
                             @PathVariable String date){
        Employee employee = this.employeeRepository.findOne(employeeID);
        ComingSoon comingSoon = this.comingSoonRepository.findOne(comingSoonID);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        try {
            d = formatter.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Theshow theshow = new Theshow(room,name,time,d,employee,comingSoon);
        this.repository.save(theshow);


        return "saved";
    }
}
