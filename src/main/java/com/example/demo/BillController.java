package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class BillController  {
    @Autowired
    BillRepository billRepository;

    //@Autowired
   // EmployeeRepository employeeRepository;

   
    @ResponseBody
    @RequestMapping(path = "'/name/{name}/aa/{gg}", method = RequestMethod.GET)


    public String saveRepository(@PathVariable String name,
                                @PathVariable String gg){


       // Employee employee = this.employeeRepository.findOne(g);
        Bill bill = new Bill(name,gg);
        this.billRepository.save(bill);


        return  "save";
    }
}
