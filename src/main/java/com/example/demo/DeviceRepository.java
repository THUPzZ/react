package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface DeviceRepository extends CrudRepository<Device, String> {
    Device findByDeviceName(
            @Param("deviceName") String deviceName
    );}
