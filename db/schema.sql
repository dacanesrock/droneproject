/*
To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"
*/

CREATE DATABASE drones_db;
USE drones_db;

CREATE TABLE drones
(
id int NOT NULL AUTO_INCREMENT,
drone_name varchar(255) NOT NULL,
price int NOT NULL DEFAULT "0",
camera BOOLEAN DEFAULT false,
camera_max varchar(30),
video BOOLEAN NOT NULL DEFAULT false,
video_res varchar(30),
video_fps varchar(30),
max_range varchar(30),
flight_time varchar(30),
gimbal BOOLEAN NOT NULL DEFAULT false,
gps BOOLEAN NOT NULL DEFAULT false,
avoidance BOOLEAN DEFAULT false,
headless BOOLEAN DEFAULT false,
altitude BOOLEAN DEFAULT false,,
flips BOOLEAN DEFAULT false,,
max_speed varchar(30),
weight varchar(30),
intelligent_flight BOOLEAN DEFAULT false,
picture_small varchar(255) NOT NULL,
picture_large varchar(255) NOT NULL,
PRIMARY KEY (id)
);
