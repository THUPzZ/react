package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PromotionController {

    @Autowired
    PromotionRepository promotionRepository;

    @ResponseBody
    @RequestMapping(path = "/name/{name}/fastival/{fastival}/promov/{promov}", method = RequestMethod.GET)

    public String test(@PathVariable String name,
                       @PathVariable String fastival,
                       @PathVariable String promov) {

        Promotion promotion = new Promotion(name,fastival,promov);
            this.promotionRepository.save(promotion);
        return "saved";
    }
}