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
public class SeatController {
    @Autowired
    SeatRepository seatclassRepository;
   
    @ResponseBody
    @RequestMapping(path = "/seatId/{seatId}/labal/{labal}/status/{status}",method = RequestMethod.POST)
    public String saveReport(
                             @PathVariable String seatId,
                             @PathVariable String labal,
                             @PathVariable Integer status
                            ){
   
      
        Seat seat = new Seat(seatId,labal,status);
        this.seatclassRepository.save(seat);


        return "saved";
    }
}
