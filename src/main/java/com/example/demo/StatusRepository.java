package com.example.demo;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.CrudRepository;
public interface StatusRepository extends CrudRepository<Status, String> {

}
