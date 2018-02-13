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
    @Autowired
    DrinksRepository drinksRepository;
    @Autowired
    SnacksRepository snacksRepository;

    @ResponseBody
    @RequestMapping(path = "/clickdrink/{clickdrink}/clicksnack/{clicksnack}/totaldrink/{totaldrink}/pricedrink/{pricedrink}/totalsnack/{totalsnack}/pricesnack/{pricesnack}/totalprice/{totalprice}/billdate/{billdate}",method = RequestMethod.GET)
    public String saveReport(
                            
    			@PathVariable String clickdrink,
                        @PathVariable String clicksnack,
			@PathVariable String totaldrink,
                        @PathVariable String pricedrink,							
			@PathVariable String totalsnack,
			@PathVariable String pricesnack,
			@PathVariable String totalprice,
			@PathVariable String billdate){                             

                     SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
                     Date d = new Date();
                     try {
                             d = formatter.parse(billdate);
                    } catch (ParseException e) {
                            e.printStackTrace();
                     }


        Snack_and_Drink snack_and_Drink = new Snack_and_Drink(this.drinksRepository.findByDrinksname(clickdrink),this.snacksRepository.findBySnacksName(clicksnack),totaldrink,pricedrink,totalsnack,pricesnack,totalprice,d);
        this.snack_and_DrinkRepository.save(snack_and_Drink);


        return "saved";
	}
}

