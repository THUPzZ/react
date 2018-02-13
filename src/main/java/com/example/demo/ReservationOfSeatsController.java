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
public class ReservationOfSeatsController {
    @Autowired
    ReservationOfSeatsRepository reservationOfSeatsRepository;
    @Autowired
    SeatRepository seatRepository;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    TheshowRepository theshowRepository;
   
    @ResponseBody
    @RequestMapping(path = "/member/{memberID}/theshow/{theshowID}/seat/{seatID}/moviename/{moviename}/room/{room}/namemem/{namemem}",method = RequestMethod.POST)
    public String ID(
                             @PathVariable String memberID,
                             @PathVariable Long theshowID,
                             @PathVariable String seatID,
                             @PathVariable String moviename,
                             @PathVariable String room,
                             @PathVariable String namemem
                            ){
        Member member = this.memberRepository.findByUserName(memberID);
        Theshow theshow = this.theshowRepository.findOne(theshowID);
        Seat seat = this.seatRepository.findOne(seatID);
   
      
        ReservationOfSeats reservationOfSeats = new ReservationOfSeats(member,theshow,seat,moviename,room,namemem);
        this.reservationOfSeatsRepository.save(reservationOfSeats);


        return "saved";
    }
}
