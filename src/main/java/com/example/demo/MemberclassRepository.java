package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MemberclassRepository extends CrudRepository<Memberclass, Long> {

 //   Employee findBy_class(
  //          @Param("Id") Long Id
  //          
  //  );
}
