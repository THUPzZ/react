package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;


import lombok.Data;

@Data
@Entity
public class Device {
    @Pattern(regexp = "dv\\d{3}")
    private @Id String deviceID;
    @NotNull
    private String deviceName;



    private Device(){}
    public Device(String deviceID,String deviceName){
        this.deviceID=deviceID;
        this.deviceName = deviceName;

    }


}
