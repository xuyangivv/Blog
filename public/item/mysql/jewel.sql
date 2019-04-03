SET NAMES UTF8;
DROP DATABASE IF EXISTS xy;
CREATE DATABASE xy CHARSET=UTF8;
USE xy;
#分类表
CREATE TABLE xy_jewelry_family(
	f_id TINYINT PRIMARY KEY,
	f_name VARCHAR(5) UNIQUE
);
INSERT INTO xy_jewelry_family VALUES
				(1,'腕表'),
				(2,'珠宝'),
				(3,'高级珠宝'),
				(4,'婚礼系列'),
				(5,'礼物'),
				(6,'服务');
#商品信息表
CREATE TABLE  sp_jewelry(
	s_id TINYINT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(10) UNIQUE,
	price DECIMAL(8,2),
	spec VARCHAR(100),
	detail VARCHAR(10000),
	shelftime DATE DEFAULT'2018-12-1 ',
	isOnline BOOL,
	s_type CHAR(6),
	familyId TINYINT(100),
	FOREIGN KEY(familyId) REFERENCES xy_jewelry_family(f_id)
);
INSERT INTO sp_jewelry VALUES
			(NULL,'ALTIPLANO系列超薄腕表',210000,'男士腕表GOA43120','潮波腕表，自动上链，玫瑰金',DEFAULT,0,'男士腕表',1),
			(NULL,'大啊啊',250000,'八八八八','啊啊啊',DEFAULT,1,'酷酷酷',3);
#UPDATE sp_family SET            WHERE s_id='';
#DELETE FROM sp_jewelry WHERE s_id='';
#用户表
CREATE TABLE user(
	u_id INT PRIMARY KEY AUTO_INCREMENT,
	uname CHAR(6),
	upwd VARCHAR(6),
	mail VARCHAR(15),
	tel VARCHAR(11)
);
INSERT INTO user VALUES
			(NULL,'第一个用户',123456,'666@qq.com',10086);