@test "B5712922 Sprint#2 กรณีข้อมูลถูกต้อง" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"deviceID":"dv001","deviceName":"จอภาพ"}' \
	http://localhost:8080/api/devices)

	echo $json | grep "href"
}
@test "B5712922 Sprint#2 กรณีข้อมูล ID ผิด" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"deviceID":"00001","deviceName":"จอภาพ"}' \
	http://localhost:8080/api/devices)

	echo $json | grep "Error while committing the transaction"
}
@test "B5712922 Sprint#2 กรณีข้อมูลเกินกว่าที่กำหนด" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"note":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}' \
	http://localhost:8080/api/billRepairs)

	echo $json | grep "path"
}
@test "B5712922 Sprint#2 กรณีข้อมูลอุปกรณ์เป็น NULL" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"deviceID":"dv001","deviceName":null}' \
	http://localhost:8080/api/devices)

	echo $json | grep "Error while committing the transaction"
}
@test "B5712922 Sprint#2 กรณีข้อมูลว่างเปล่า" {
    json=$(curl -X POST -H "Content-Type:application/json" \
	-d' {"deviceID":"","deviceName":""}' \
	http://localhost:8080/api/devices)

	echo $json | grep "Error while committing the transaction"
}