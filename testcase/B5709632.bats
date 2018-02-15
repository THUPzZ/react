@test "B5709632 Sprint#2 กรณีข้อมูลถูกต้อง" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"tell":"0878752069"}' \
	http://localhost:8080/api/bills)

	echo $json | grep "href"

}
@test "B5709632 Sprint#2 กรณีข้อมูลน้อยกว่าที่กำหนด" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"tell":"0878"}' \
	http://localhost:8080/api/bills)
	
	echo $json | grep "path"

}
@test "B5709632 Sprint#2 กรณีข้อมูลเกินกว่าที่กำหนด" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"tell":"087887520690"}' \
	http://localhost:8080/api/bills)
	
	echo $json | grep "path"

}
@test "B5709632 Sprint#2 กรณีข้อมูลหมายเลขสองตัวหน้าที่กำหนดไม่ถูกต้อง" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"tell":"12788752069"}' \
	http://localhost:8080/api/bills)
	
	echo $json | grep "path"

}
@test "B5709632 Sprint#2 กรณีข้อมูลเป็น NULL " {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"tell":null}' \
	http://localhost:8080/api/bills)
	
	echo $json | grep "path"

}