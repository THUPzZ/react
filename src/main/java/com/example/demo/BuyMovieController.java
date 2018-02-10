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
	BuyMovieRepository buymovierepository;

	@ResponseBody
	@RequestMapping(path = "/idmovie/{idmovie}/namemovie/{namemovie}/camp/{camp}/price/{price}/name/{name}/note/{note}", method = RequestMethod.GET)
	public String BuyMovie(@PathVariable String idmovie,@PathVariable String namemovie,@PathVariable String camp,@PathVariable Integer price,@PathVariable String name,@PathVariable String note) {
		BuyMovie buymovie = new BuyMovie(idmovie,namemovie,camp,price,name,note);
			this.buymovierepository.save(buymovie);
		return "{\"status\":\"BuyMovie\"}";
	}
}