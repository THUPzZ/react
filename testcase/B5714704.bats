#!/usr/bin/env bats
@test "B5714704 ข้อมูลปกติ" {
	json=$(curl -X POST -H "Content-Type:application/json" -d \
	'{ "pricesnack": 80 }' \
	http://localhost:8080/api/ticketses)
	
	echo $json | grep "href"
}
@test "B5714704 ข้อมูลว่าง" {
	json=$(curl -X POST -H "Content-Type:application/json" -d \
	'{ "pricesnack": null  }' \
	http://localhost:8080/api/ticketses)
	
	echo $json | grep "may not be null"
}
@test "B5714704 ราคาน้อยกว่า 70" {
	json=$(curl -X POST -H "Content-Type:application/json" -d \
	'{ "pricesnack": 40 }' \
	http://localhost:8080/api/ticketses)
	
	echo $json | grep "must be greater than"
}
@test "B5714704 ราคามากกว่า 500" {
	json=$(curl -X POST -H "Content-Type:application/json" -d \
	'{ "pricesnack": 510 }' \
	http://localhost:8080/api/ticketses)
	
	echo $json | grep "must be less than"
}
@test "B5714704 ราคาเป็นstring" {
	json=$(curl -X POST -H "Content-Type:application/json" -d \
	'{ "pricesnack": "test" }' \
	http://localhost:8080/api/ticketses)
	
	echo $json | grep "Can not deserialize value of type"
}