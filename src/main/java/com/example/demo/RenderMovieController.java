package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.Date;

@Controller
public class RenderMovieController {

    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    RenderMovieRepository rendermovierepository;
    @Autowired
    BuyMovieRepository buymovieRepository;

    @ResponseBody
    @RequestMapping(path = "/id/{id}/namemovie/{namemovie}/camp/{camp}/price/{price}/note/{note}/date/{date}/employee/{employeeID}", method = RequestMethod.GET)
    public String RenderMovie(@PathVariable Long id,@PathVariable String namemovie,@PathVariable String camp,@PathVariable Integer price,@PathVariable String note,@PathVariable String date, @PathVariable String employeeID) {

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date da = new Date();
        try {
            da = formatter.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Employee employee = this.employeeRepository.findByEmployeeID(employeeID);
        BuyMovie buymovie = this.buymovieRepository.findOne(id);
        RenderMovie rendermovie = new RenderMovie(buymovie,namemovie,camp,price,note,da,employee);
        this.rendermovierepository.save(rendermovie);
        return "{\"status\":\"RenderMovie\"}";
    }
}