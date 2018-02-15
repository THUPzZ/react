#!/bin/usr

@test "B5711512 บันทึกข้อมูลได้ปกติ" {
    json=$(curl -X POST -H "Content-Type: application/json" \
    -d '{"userName": "thupza","pass": "12341234" ,"name":"theeraprasedmeemui","tel":"0933282268"}' \
    http://localhost:8080/api/members)

	echo $json | grep "theeraprasedmeemui"

}

@test "B5711512 เบอร์โทรไม่ขึ้นต้นด้วย 0" {
    json=$(curl -X POST -H "Content-Type: application/json" \
    -d '{"userName": "thupza","pass": "12341234" ,"name":"theeraprasedmeemui","tel":"1933282268"}' \
    http://localhost:8080/api/members)

	echo $json | grep "TransactionSystemException"

}

@test "B5711512 password เกิน 12 ตัว" {
    json=$(curl -X POST -H "Content-Type: application/json" \
    -d '{"userName": "thupza","pass": "1234123412341234" ,"name":"theeraprasedmeemui","tel":"0933282268"}' \
    http://localhost:8080/api/members)

	echo $json | grep "TransactionSystemException"

}

@test "B5711512 ชื่อห้ามเป็น null" {
    json=$(curl -X POST -H "Content-Type: application/json" \
    -d '{"userName": "thupza","pass": "123412" ,"name":null,"tel":"0933282268"}' \
    http://localhost:8080/api/members)

	echo $json | grep "TransactionSystemException"

}

@test "B5711512 password น้อยกว่า3" {
    json=$(curl -X POST -H "Content-Type: application/json" \
    -d '{"userName": "thupza","pass": "12" ,"name":"theeraprased meemui","tel":"0933282268"}' \
    http://localhost:8080/api/members)

	echo $json | grep "TransactionSystemException"

}



