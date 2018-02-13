package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ReservationOfSeatsRepository extends CrudRepository<ReservationOfSeats, Long> {

 //   Employee findBy_class(
  //          @Param("Id") Long Id
  //          
  //  );
}
