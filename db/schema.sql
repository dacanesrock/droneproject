CREATE DATABASE drones_db;
USE drones_db;

CREATE TABLE drones
(
	id int NOT NULL AUTO_INCREMENT,
	drone varchar(255) NOT NULL,
	price int NOT NULL,
	camera BOOLEAN DEFAULT false,
	camera_max varchar(30),
	video BOOLEAN DEFAULT false,
	video_res varchar(30),
	video_max varchar(30),
	max_range varchar(30) NOT NULL,
	flight_time varchar(30) NOT NULL,
	gimbal BOOLEAN DEFAULT false,
	gps BOOLEAN DEFAULT false,
	avoidance BOOLEAN DEFAULT false,
	headless BOOLEAN DEFAULT false,
	altitude BOOLEAN DEFAULT false,
	flips BOOLEAN DEFAULT false,
	max_speed varchar(30) NOT NULL,
	weight varchar(30) NOT NULL,
	intelligent_flight BOOLEAN DEFAULT false
	);
	