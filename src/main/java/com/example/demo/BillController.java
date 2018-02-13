package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

  //

@Controller
public class BillController  {
    @Autowired
    BillRepository billRepository;

    //@Autowired
    //EmployeeRepository employeeRepository;



    @ResponseBody
    @RequestMapping(path = "/employee/{employee}/aa/{aa}/tell/{tell}/mov/{mov}",method = RequestMethod.GET)
    public String saveReport(
            @PathVariable String employee,
            @PathVariable String aa,
            @PathVariable String tell,
            @PathVariable String mov
    ){


        //Employee employee = this.employeeRepository.findOne(employee);
        Bill bill = new Bill(employee,aa,tell,mov);
        this.billRepository.save(bill);


        return "saved";
    }
}
