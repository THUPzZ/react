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
public class PromotionController {

    @Autowired
    PromotionRepository promotionRepository;
    @Autowired
    EmployeeRepository employeeRepository;

    @ResponseBody
    @RequestMapping(path = "/number/{number}/fastival/{fastival}/promov/{promov}/dateStart/{dateStart}/dateStop/{dateStop}/employeeID/{employeeID}", method = RequestMethod.GET)

    public String test(@PathVariable String number,
                       @PathVariable String fastival,
                       @PathVariable String promov,
                       @PathVariable String dateStart,
                       @PathVariable String dateStop,
                       @PathVariable String employeeID
    ) {

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        Date d1 = new Date();
        try {
            d = formatter.parse(dateStart);
            d1 = formatter.parse(dateStop);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Employee IDemployee = this.employeeRepository.findOne(employeeID);
        Promotion promotion = new Promotion(number,fastival,promov,d,d1,IDemployee);
            this.promotionRepository.save(promotion);
        return "saved";
    }
}