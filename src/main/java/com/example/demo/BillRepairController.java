package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class BillRepairController {

    @Autowired
    BillRepairRepository billRepairRepository;
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    DeviceRepository deviceRepository;

    @ResponseBody
    @RequestMapping(path = "/note/{note}/date/{date}/employeeID/{employeeID}/deviceName/{deviceName}", method = RequestMethod.GET)

    public String test(@PathVariable String note,
                       @PathVariable String date,
                       @PathVariable String employeeID,
                       @PathVariable String deviceName
    ) {

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        try {
            d = formatter.parse(date);

        } catch (ParseException e) {
            e.printStackTrace();
        }

        Employee employee = this.employeeRepository.findOne(employeeID);

        Device device = this.deviceRepository.findByDeviceName(deviceName);

        BillRepair billRepair = new BillRepair(note,d,employee,device);
        this.billRepairRepository.save(billRepair);
        return "saved";
    }
}