#!/bin/usr
@test "B5713431 บันทึก database " {
    json=$(curl -X POST -H "Content-Type: application/json" \
	    -d '{"name": "test","camp": "mavel","detail": "comedy","date":"2002-11-11"}' \
	    http://localhost:8080/api/statuses)

		echo $json | grep "_links"

}

@test "B5713431 name ห้ามเป็น null" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	    -d '{"name": null,"camp": "mavel","detail": "comedy","date":"2017-02-05"}' \
	    http://localhost:8080/api/statuses)

		echo $json | grep "may not be null"

}

@test "B5713431 camp ห้ามน้อยกว่า 5 ตัวอักษร" {
    json=$(curl -X POST -H "Content-Type: application/json" \
		-d '{"name": "sut","camp": "sony","detail": "fantacy","date":"2018-02-05"}' \
		http://localhost:8080/api/statuses)

		echo $json | grep "size must be between 5 and 30"

}

@test "B5713431 detail ห้ามมากกว่า 40 ตัวอักษร" {
    json=$(curl -X POST -H "Content-Type: application/json" \
		-d '{"name": "love","camp": "disneyworld","detail": "ani","date":"2018-11-08"}' \
		http://localhost:8080/api/statuses)

		echo $json | grep "size must be between 4 and 40"

}

@test "B5713431 dete ผิดรูปแบบ" {
    json=$(curl -X POST -H "Content-Type: application/json" \
		-d '{"name": "sura","camp": "mavel","detail": "comedy","date":"20-20-2250"}' \
		http://localhost:8080/api/statuses)

		echo $json | grep "Failed to parse Date value"

}
