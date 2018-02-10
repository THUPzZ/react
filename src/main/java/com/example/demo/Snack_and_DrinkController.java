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
public class Snack_and_DrinkController {

    
    @Autowired
    Snack_and_DrinkRepository snack_and_DrinkRepository;

    @ResponseBody
    @RequestMapping(path = "/Bill/{Bill}/Drink/{Drink}/Totaldrink/{Totaldrink}/Totalpricedrink/{Totalpricedrink}/Snack/{Snack}/Totalsnack/{Totalsnack}/Totalpricesnack/{Totalpricesnack}/Totaldetail/{Totaldetail}/Billdate/{Billdate}/Billtime/{Billtime}",method = RequestMethod.GET)
    public String saveReport(
                             @PathVariable String Bill ,
    						 @PathVariable String Drink,
							 @PathVariable String Totaldrink,
                             @PathVariable String Totalpricedrink,
							 @PathVariable String Snack,
							 @PathVariable String Totalsnack,
							 @PathVariable String Totalpricesnack,
							 @PathVariable String Totaldetail,
							 @PathVariable String Billdate,
							 @PathVariable String Billtime){                             


        Snack_and_Drink snack_and_Drink = new Snack_and_Drink(Bill,Drink,Totaldrink,Totalpricedrink,Snack,Totalsnack,Totalpricesnack,Totaldetail,Billdate,Billtime);
        this.snack_and_DrinkRepository.save(snack_and_Drink);


        return "saved";
	}
}

