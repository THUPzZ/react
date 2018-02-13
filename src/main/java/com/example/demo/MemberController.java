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
public class MemberController {
    @Autowired
    MemberclassRepository MemberclassRepository;
    @Autowired
    MemberRepository memberRepository;
  
    @ResponseBody
    @RequestMapping(path = "/userName/{userName}/pass/{pass}/name/{name}/tel/{tel}/memberclass/{memberclass}",method = RequestMethod.POST)
    public String saveReport(
                             @PathVariable String userName,
                             @PathVariable String pass,
                             @PathVariable String name,
                             @PathVariable String tel,
                             @PathVariable Long memberclass
                            ){
        Memberclass memberclass1 = this.MemberclassRepository.findOne(memberclass);
      
        Member member = new Member(userName,pass,name,tel,memberclass1);
        this.memberRepository.save(member);


        return "saved";
    }
}
