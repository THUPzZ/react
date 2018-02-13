package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface SnacksRepository extends CrudRepository<Snacks,Long> {
    Snacks findBySnacksName(@Param("snacksName") String snacksName);
}
