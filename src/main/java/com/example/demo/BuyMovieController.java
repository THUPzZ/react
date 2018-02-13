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

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class BuyMovieController {

	@Autowired
    EmployeeRepository employeeRepository;
    @Autowired
	BuyMovieRepository buymovierepository;
	@Autowired
	MovieRepository movieRepository;

	@ResponseBody
	@RequestMapping(path = "/idmovie/{idmovie}/namemovie/{namemovie}/camp/{camp}/price/{price}/note/{note}/employee/{employeeID}", method = RequestMethod.GET)
	public String BuyMovie(@PathVariable String idmovie
	,@PathVariable String namemovie,
	@PathVariable String camp,
	@PathVariable Integer price,
	@PathVariable String note, @PathVariable String employeeID) {

		Employee employee = this.employeeRepository.findByEmployeeID(employeeID);
		Movie movie = this.movieRepository.findByidmovie(idmovie);
		BuyMovie buymovie = new BuyMovie(movie,namemovie,camp,price,note,employee);
			this.buymovierepository.save(buymovie);

		return "{\"status\":\"BuyMovie\"}";

	}
}