/*
SQLyog Ultimate v12.4.1 (64 bit)
MySQL - 5.7.20-log : Database - education
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`education` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `education`;

/*Table structure for table `babies` */

DROP TABLE IF EXISTS `babies`;

CREATE TABLE `babies` (
  `_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `baby_name` varchar(32) NOT NULL,
  `birthday` date NOT NULL,
  `age` int(3) DEFAULT NULL,
  `father` varchar(32) DEFAULT NULL,
  `mather` varchar(32) DEFAULT NULL,
  `grandpa` varchar(32) DEFAULT NULL,
  `grandma` varchar(32) DEFAULT NULL,
  `home_address` varchar(500) DEFAULT NULL,
  `phone_no1` varchar(20) NOT NULL,
  `phone_no2` varchar(20) DEFAULT NULL,
  `case` varchar(750) DEFAULT NULL,
  `allergy` varchar(750) DEFAULT NULL,
  `hobby` varchar(100) DEFAULT NULL,
  `character` varchar(100) DEFAULT NULL,
  `member_lx` char(1) NOT NULL DEFAULT '0',
  `init_count` int(3) NOT NULL,
  `course_count` int(3) NOT NULL,
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` char(1) NOT NULL DEFAULT '0',
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `babies` */

/*Table structure for table `courses` */

DROP TABLE IF EXISTS `courses`;

CREATE TABLE `courses` (
  `_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `babyId` bigint(20) NOT NULL,
  `course_bh` varchar(32) NOT NULL,
  `course_rq` date NOT NULL,
  `course_time` varchar(10) NOT NULL,
  `baby_name` varchar(32) NOT NULL,
  `father` varchar(32) DEFAULT NULL,
  `mather` varchar(32) DEFAULT NULL,
  `phone_no1` varchar(20) DEFAULT NULL,
  `lrrq` date NOT NULL,
  `xgrq` date NOT NULL,
  `yxbz` char(1) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `courses` */

/*Table structure for table `employees` */

DROP TABLE IF EXISTS `employees`;

CREATE TABLE `employees` (
  `_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `employee_name` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `age` int(3) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `home_address` varchar(500) DEFAULT NULL,
  `phone_no1` varchar(20) NOT NULL,
  `phone_no2` varchar(20) DEFAULT NULL,
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  `rzrq` date DEFAULT NULL,
  `lzrq` date DEFAULT NULL,
  `status` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `employees` */

insert  into `employees`(`_id`,`employee_name`,`password`,`age`,`email`,`home_address`,`phone_no1`,`phone_no2`,`lrrq`,`xgrq`,`yxbz`,`rzrq`,`lzrq`,`status`) values 
(1,'周宇东','123456',33,'33836858@qq.com','深圳市南山区科技园南区R2-B三楼','17783119364',NULL,'2018-01-10 21:53:58','2018-01-10 21:53:58','Y',NULL,NULL,'0'),
(2,'陈曦','123456',33,'33836858@qq.com','深圳市南山区科技园南区R2-B三楼','17783119364',NULL,'2018-01-10 22:40:32','2018-01-10 22:40:32','Y',NULL,NULL,'0'),
(3,'陈曦','123456',33,'33836858@qq.com','深圳市南山区科技园南区R2-B三楼','17783119364',NULL,'2018-01-10 23:12:17','2018-01-10 23:12:17','Y',NULL,NULL,'0'),
(4,'陈曦','123456',33,'33836858@qq.com','深圳市南山区科技园南区R2-B三楼','17783119364',NULL,'2018-01-10 23:40:03','2018-01-10 23:40:03','Y',NULL,NULL,'0');

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `baby_id` bigint(20) NOT NULL,
  `order_date` date NOT NULL,
  `member_lx` char(1) NOT NULL DEFAULT '0',
  `course_count` int(3) NOT NULL,
  `czlx_dm` char(1) NOT NULL,
  `je` decimal(10,0) DEFAULT NULL,
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `orders` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
