#!/bin/usr

@test "B5723294 บันข้อมูลลงตารางได้ปกติ่ " {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"camp": "2","date":"2017-02-05","namemovie": "test12","note": "test22","price":100}' \
	http://localhost:8080/api/renderMovies)

	echo $json | grep "href"

}

@test "B5723294 note น้อยกว่า3ตัวอักษร " {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"camp": "2","date":"2017-02-05","namemovie": "tegg","note": "te","price":100}' \
	http://localhost:8080/api/renderMovies)

	echo $json | grep "size must be between 3 and 30"

}

@test "B5723294 price ห้ามเป็น null" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"camp": "2","date":"2017-02-05","namemovie": "test12","note": "teggg","price":null}' \
	http://localhost:8080/api/renderMovies)

	echo $json | grep "may not be null"

}

@test "B5723294 namemovie ห้ามเกิน 10 ตัวอักษร" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"camp": "2","date":"2017-02-05","namemovie": "testtesttesttest","note": "tegg","price":545}' \
	http://localhost:8080/api/renderMovies)

	echo $json | grep "size must be between 1 and 10"

}

@test "B5723294 กรอก date ไปผิดรูปแบบ " {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"camp": "2","date":"20-20-2250","namemovie": "test12","note": "test22","price":100}' \
	http://localhost:8080/api/renderMovies)

	echo $json | grep "Failed to parse Date value"

}


