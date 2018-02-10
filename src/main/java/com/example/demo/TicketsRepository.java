package com.example.demo;

import org.springframework.data.repository.CrudRepository;

public interface TicketsRepository extends CrudRepository<Tickets,String> {
}
