package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MemberRepository extends CrudRepository<Member, String> {
     
        Member findByUserNameAndPass(
        @Param("userName") String userName,
        @Param("pass") String pass
        );
        Member findByUserName(
        @Param("userName") String userName
        );
    



}
