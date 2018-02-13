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
public class OfSeatsController {
    @Autowired
    OfSeatsRepository ofSeatsRepository;
    @Autowired
    SeatRepository seatRepository;
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    TheshowRepository theshowRepository;
   
    @ResponseBody
    @RequestMapping(path = "/employee/{employeeID}/theshow/{theshowID}/seat/{seatID}/moviename/{moviename}/room/{room}",method = RequestMethod.POST)
    public String ID( @PathVariable String employeeID,
                             @PathVariable Long theshowID,
                             @PathVariable String seatID,
                             @PathVariable String moviename,
                             @PathVariable String room
                            ){
        Employee employee = this.employeeRepository.findOne(employeeID);
        Theshow theshow = this.theshowRepository.findOne(theshowID);
        Seat seat = this.seatRepository.findOne(seatID);
   
      
        OfSeats ofSeats = new OfSeats(employee,theshow,seat,moviename,room);
        this.ofSeatsRepository.save(ofSeats);
        return "saved";
    }
}
