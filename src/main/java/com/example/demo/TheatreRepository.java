package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface TheatreRepository extends CrudRepository<Theatre, String> {

}
