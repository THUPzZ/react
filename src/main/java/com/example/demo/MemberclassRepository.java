package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MemberclassRepository extends CrudRepository<Memberclass, String> {

 //   Employee findByEmployeeIDAndPassword(
  //          @Param("employeeID") String employeeID,
  //          @Param("password") String password
  //  );
}
