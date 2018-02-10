package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
public interface EmployeeRepository extends CrudRepository<Employee, String> {

    Employee findByEmployeeIDAndPassword(
            @Param("employeeID") String employeeID,
            @Param("password") String password
    );

    Employee findByEmployeeID(
            @Param("employeeID") String employeeID
    );
}
