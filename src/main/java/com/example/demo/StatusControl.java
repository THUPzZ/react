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
public class StatusControl {
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    ComingSoonRepository comingSoonRepository;
    @Autowired
    StatusRepository repository;

    @ResponseBody
    @RequestMapping(path = "/name/{name}/camp/{camp}/detail/{detail}/date/{date}/employee/{employeeID}/comingSoon/{comingSoonID}",method = RequestMethod.GET)
    public String saveReport(
            @PathVariable String name,
            @PathVariable String camp,
            @PathVariable String employeeID,
            @PathVariable String comingSoonID,
            @PathVariable String detail,
            @PathVariable String date){

        Employee employee = this.employeeRepository.findOne(employeeID);
        ComingSoon comingSoon = this.comingSoonRepository.findOne(comingSoonID);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date da = new Date();

        try {
           da = formatter.parse(date);
        } catch (ParseException e) {
          e.printStackTrace();
        }

        Status status = new Status(name,camp,detail,da,comingSoon,employee);
            this.repository.save(status);
        return "saved";
    }
}
