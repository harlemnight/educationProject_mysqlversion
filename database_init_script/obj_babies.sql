/*
SQLyog Ultimate
MySQL - 5.7.20-log : Database - education
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`education` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `education`;

/*Table structure for table `babies` */

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `babies` */

insert  into `babies`(`_id`,`baby_name`,`birthday`,`age`,`father`,`mather`,`grandpa`,`grandma`,`home_address`,`phone_no1`,`phone_no2`,`case`,`allergy`,`hobby`,`character`,`member_lx`,`init_count`,`course_count`,`lrrq`,`xgrq`,`status`,`yxbz`) values (1,'陈亚寒','2014-01-02',3,'陈元',NULL,NULL,NULL,'重庆南岸','17783119364',NULL,'心脏病','花生过敏',NULL,NULL,'1',1,0,'2018-01-13 14:17:37','2018-01-29 21:35:33','0','Y');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
