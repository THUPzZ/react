package com.example.demo;

import org.codehaus.groovy.runtime.dgmimpl.arrays.LongArrayGetAtMetaMethod;
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
public class TicketsController {

    @Autowired
	TheshowRepository theshowRepository;
    @Autowired
	MemberRepository memberRepository;
    @Autowired
    TicketsRepository ticketsRepository;
    @Autowired
    MovieRepository movieRepository;
    @ResponseBody
    @RequestMapping(path = "/Movie/{movie}/Theshow/{clickdrink}/Member/{member}/price/{totalprice}",method = RequestMethod.GET )
    public String saveReport(
                            
    						 @PathVariable Long clickdrink,
                             @PathVariable String member,
                             @PathVariable Integer totalprice,
                             @PathVariable Long movie
                            
                             
							 ){      

                                Tickets tickets = new Tickets(this.theshowRepository.findOne(clickdrink),this.movieRepository.findOne(movie),this.memberRepository.findOne(member),totalprice);
                                this.ticketsRepository.save(tickets);


        return "saved";
	}



}

