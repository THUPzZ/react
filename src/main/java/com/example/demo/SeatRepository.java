package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface SeatRepository extends CrudRepository<Seat, String> {

 //   Employee findBy_class(
  //          @Param("Id") Long Id
  //          
  //  );
}
