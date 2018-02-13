package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.sql.Date;

@Component
public class DatabaseLoader  implements CommandLineRunner {
    private final TheshowRepository theshowRepository;
    private final EmployeeRepository employeeRepository;
    private final ComingSoonRepository comingSoonRepository;
    private final MovieRepository movieRepository;
    private final PromotionRepository promotionRepository;
    private final BuyMovieRepository buyMovieRepository;
    private final DeviceRepository deviceRepository;
    private final MemberclassRepository memberclassRepository;
    private final SeatRepository seatRepository;
    private final MemberRepository memberRepository;
    private final TheatreRepository theatreRepository;
    private final DrinksRepository drinksrepository;
    private final SnacksRepository snacksrepository;

    

    @Autowired
    public DatabaseLoader(TheshowRepository theshowRepository, 
    EmployeeRepository employeeRepository, ComingSoonRepository comingSoonRepository,
    MovieRepository movieRepository,PromotionRepository promotionRepository,
    BuyMovieRepository buyMovieRepository,DeviceRepository deviceRepository,
    MemberclassRepository memberclassRepository,SeatRepository seatRepository,
    MemberRepository memberRepository,TheatreRepository theatreRepository,
    DrinksRepository drinksrepository,SnacksRepository snacksrepository) {
        this.theshowRepository = theshowRepository;
        this.employeeRepository = employeeRepository;
        this.comingSoonRepository = comingSoonRepository;
        this.movieRepository = movieRepository;
        this.promotionRepository = promotionRepository;
        this.buyMovieRepository = buyMovieRepository;
        this.deviceRepository = deviceRepository;
        this.memberclassRepository = memberclassRepository;
        this.seatRepository = seatRepository;
        this.memberRepository = memberRepository;
        this.theatreRepository = theatreRepository;
        this.drinksrepository = drinksrepository;
        this.snacksrepository = snacksrepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        ComingSoon comingSoon1 = new ComingSoon("Maze Runner 3","Century Fox","Action",null,null,null);
        this.comingSoonRepository.save(comingSoon1);
        ComingSoon comingSoon2 = new ComingSoon("Jumanji","Sony Pictures","Action",null,null,null);
        this.comingSoonRepository.save(comingSoon2);

        //////////////////////////////////////////////////////////////////////////////////
        Employee employee1 = new Employee("B","theeraprased meemui","1");
        this.employeeRepository.save(employee1);
        Employee employee2 = new Employee("1","theeraprased meemui","1");
        this.employeeRepository.save(employee2);
        /////////////////////////////////////////////////////////////////////////////////


        this.movieRepository.save(new Movie("M01", "Frozen","Walt Disney","เรื่องราวของ Frozen เอ่ยถึงคำพยากรณ์ที่ทำให้อาณาจักรหนึ่งจำต้องตกอยู่ภายใต้ หน้าหนาวอันใจเย็น และก็เหี้ยมโหดอำมหิตนิรันดร์ ",250000));
        this.movieRepository.save(new Movie("M02", "Life of pi","The Sixth Sense ","เรื่องราวของเด็กหนุ่มที่ชื่อ พาย พาเทล ชาวอินเดียอายุ 16 จากเมือง พอนดิเชอร์รี่ (Pondicherry) เขาได้โดยสารมากับเรือลำหนึ่งซึ่งได้บรรทุกสัตว์หลายชนิดจุดมุ่งหมายคือไปโตรอนโต ",300000));
        this.movieRepository.save(new Movie("M03", "IT","Warner Bros. Pictures"," จากนวนิยายชื่อดังของสตีเฟ่น คิงสู่การดัดแปลงเป็นภาพยนตร์บนจอใหญ่อีกครั้ง ซึ่งครั้งนี้เป็นผลงานการกำกับของแอนดี มุสเชตติ จากภาพยนตร์สยองขวัญเรื่อง MAMA  ",200000));
        this.movieRepository.save(new Movie("M04", "Kingmans","20th Century Fox","แฮร์รี่ได้พบกับแก๊งเด็กซ่าที่มีพ่อหนุ่มตัวแรงอย่าง แกรี่ 'เอ็กซี่' อันวิน (ทารอน อีเกอร์ตัน) และได้ชักชวนให้เขาเข้ามาร่วมทีมสายลับฝึกหัดที่ไม่ได้มีแค่ปืนเปล่าๆ ",250000));

        this.deviceRepository.save(new Device("dv001","จอภาพ"));
        this.deviceRepository.save(new Device("dv002","ลำโพงซ้าย"));
        this.deviceRepository.save(new Device("dv003","ลำโพงขวา"));
        this.deviceRepository.save(new Device("dv004","ลำโพงด้านหลัง"));
        this.deviceRepository.save(new Device("dv005","เครื่องฉาย"));
        this.deviceRepository.save(new Device("dv006","เครื่องอ่านแผ่นหนัง"));
        
        
        this.memberclassRepository.save(new Memberclass("Firstclass","1"));
        this.memberclassRepository.save(new Memberclass("Premiereclass","2"));
        this.memberclassRepository.save(new Memberclass("Standardclass","3"));


        this.memberRepository.save(new Member("thup","22346787","test","0933282267",null));
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////ที่นั่ง///////ที่นั่ง////////ที่นั่ง///////////ที่นั่ง/////////ที่นั่ง//////ที่นั่ง///////ที่นั่ง//////ที่นั่ง///////ที่นั่ง////////ที่นั่ง/////////////ที่นั่ง////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.seatRepository.save(new Seat("A","A",0));
        this.seatRepository.save(new Seat("B","B",0));
        this.seatRepository.save(new Seat("C","C",0));
        this.seatRepository.save(new Seat("D","D",0));
        this.seatRepository.save(new Seat("E","E",0));
        this.seatRepository.save(new Seat("F","F",0));
        this.seatRepository.save(new Seat("G","G",0));
        this.seatRepository.save(new Seat("H","H",0));
        this.seatRepository.save(new Seat("I","I",0));
        this.seatRepository.save(new Seat("J","J",0));
        this.seatRepository.save(new Seat("K","K",0));
        this.seatRepository.save(new Seat("L","L",0));
        this.seatRepository.save(new Seat("M","M",0));
        this.seatRepository.save(new Seat("N","N",0));
        this.seatRepository.save(new Seat("O","O",0));
        this.seatRepository.save(new Seat("P","P",0));
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////โรงฉาย/////////โรงฉาย/////////////////โรงฉาย///////////////โรงฉาย/////////////////////////////////////////

        this.theatreRepository.save(new Theatre("Theatre1","Theatre1"));
        this.theatreRepository.save(new Theatre("Theatre2","Theatre2"));
        this.theatreRepository.save(new Theatre("Theatre3","Theatre3"));
        this.theatreRepository.save(new Theatre("Theatre4","Theatre4"));
        this.theatreRepository.save(new Theatre("Theatre5","Theatre5"));
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Drinks drinks1 = new Drinks("ไม่รับน้ำ",0);
        this.drinksrepository.save(drinks1);
        Drinks drinks2 = new Drinks("เปปซี่",30);
        this.drinksrepository.save(drinks2);
        Drinks drinks3 = new Drinks("แฟนต้า",30);
        this.drinksrepository.save(drinks3);
        Drinks drinks4 = new Drinks("โอชิกรีนที",40);
        this.drinksrepository.save(drinks4);

        Snacks snacks1 = new Snacks("ไม่รับขนม",0);
        this.snacksrepository.save(snacks1);
        Snacks snacks2 = new Snacks("ป๊อปคอร์น (S)",90);
        this.snacksrepository.save(snacks2);
        Snacks snacks3 = new Snacks("ป๊อปคอร์น (M)",150);
        this.snacksrepository.save(snacks3);
        Snacks snacks4 = new Snacks("ป๊อปคอร์น (L)",200);
        this.snacksrepository.save(snacks4);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    }
}
