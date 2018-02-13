package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface DrinksRepository extends CrudRepository<Drinks,Long> {
    Drinks findByDrinksname(@Param("drinksname") String drinksname);
}
