package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DatabaseLoader  implements CommandLineRunner {
    private final TheshowRepository theshowRepository;
    private final EmployeeRepository employeeRepository;
    private final ComingSoonRepository comingSoonRepository;
    private final MovieRepository movierepository;
    private final PromotionRepository promotionRepository;
    private final BuyMovieRepository buyMovieRepository;
    private final DrinksRepository drinksrepository;
    private final MemberclassRepository memberclassRepository;

    @Autowired
    public DatabaseLoader(TheshowRepository theshowRepository, EmployeeRepository employeeRepository,
    ComingSoonRepository comingSoonRepository,MovieRepository movierepository,
    PromotionRepository promotionRepository,BuyMovieRepository buyMovieRepository,
    DrinksRepository drinksrepository,MemberclassRepository memberclassRepository) {

        this.theshowRepository = theshowRepository;
        this.employeeRepository = employeeRepository;
        this.comingSoonRepository = comingSoonRepository;
        this.movierepository = movierepository;
        this.promotionRepository = promotionRepository;
        this.buyMovieRepository = buyMovieRepository;
        this.drinksrepository = drinksrepository;
        this.memberclassRepository = memberclassRepository;
    }

    @Override
    public void run(String... strings) throws Exception {


        ComingSoon comingSoon1 = new ComingSoon("1","Maze Runner 3"," Century Fox","Action",null,null);
        this.comingSoonRepository.save(comingSoon1);
        ComingSoon comingSoon2 = new ComingSoon("2","Jumanji"," Sony Pictures","Action",null,null);
        this.comingSoonRepository.save(comingSoon2);


        Employee employee1 = new Employee("B","theeraprased meemui","1");
        this.employeeRepository.save(employee1);
        Employee employee2 = new Employee("1","theeraprased meemui","1");
        this.employeeRepository.save(employee2);


        this.movierepository.save(new Movie("M01", "Black Planter","Marvel","แบล็คแพนเทอร์  ซูเปอร์ผิวสีคนแรกถึงแม้ที่ดูผิวเผินที่เกิดมาใช้ชีวิตร่ำรวยในฐานะเจ้าชายแห่งประเทศ Wakada  ",250000));
        this.movierepository.save(new Movie("M02", "Doctor Strage","Marvel","Doctor Strange เป็นเรื่องราวของ ดร. สตีเฟ่น เสตรนจ์  หมอศัลยแพทย์ทางประสาทฝีมือดีคนหนึ่ง ที่ได้สูญเสียมือข้างถนัดจากอุบัติเหตุ จนเหมือนอนาคตการเป็นหมอของเขาจะดับวู้บลง",300000));
        this.movierepository.save(new Movie("M03", "Moana","Walt Disney"," โมอานา นักเดินสาวทางทะเล วัย 16 ปี ที่ท่องเที่ยวไปยังหมู่เกาะต่างๆ เพื่อตามหาเกาะที่สาบสูญในตำนาน  ",200000));
        this.movierepository.save(new Movie("M04", "Fantastic Beats","Dreamwork","เริ่มกันที่ตัวเอกของเรื่องอย่าง นิวท์ สคามันเดอร์ นักสัตว์วิเศษวิทยา ผู้เขียนหนังสือ ัตว์มหัศจรรย์และถิ่นที่อยู่ ซึ่งเป็นแบบเรียนในชั้นเรียนสัตว์วิเศษของแฮร์รี่ พอตเตอร์  ",250000));


        BuyMovie buy1 = new BuyMovie("B1","Peter Rabbit","Sony Pictures",250000,"Jutamat","ComingSoon");
        this.buyMovieRepository.save(buy1);
        BuyMovie buy2 = new BuyMovie("B2","A Wrinkle in Time","Walt Disney Studios",245000,"Suremas","ComingSoon");
        this.buyMovieRepository.save(buy2);

        Drinks drinks1 = new Drinks("โค๊ก : 30 บาท");
        this.drinksrepository.save(drinks1);

        Drinks drinks2 = new Drinks("เปปซี่ : 30 บาท");
        this.drinksrepository.save(drinks2);

        Memberclass member1 = new Memberclass("First Class");
        Memberclass member2 = new Memberclass("Premium Class");
        this.memberclassRepository.save(member1);
        this.memberclassRepository.save(member2);
        

    }
}
