package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PromotionRepository extends CrudRepository<Promotion, String> {

//    Employee findByEmployeeID(
//            @Param("employeeID") String employeeID
//
//    );
}