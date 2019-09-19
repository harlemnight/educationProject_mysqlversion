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

/*Table structure for table `orders` */

CREATE TABLE `orders` (
  `_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `baby_id` bigint(20) NOT NULL,
  `order_date` date NOT NULL,
  `member_lx` char(1) NOT NULL DEFAULT '0',
  `course_count` int(3) NOT NULL,
  `czlx_dm` char(1) NOT NULL,
  `je` decimal(10,2) DEFAULT NULL,
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

/*Data for the table `orders` */

insert  into `orders`(`_id`,`baby_id`,`order_date`,`member_lx`,`course_count`,`czlx_dm`,`je`,`lrrq`,`xgrq`,`yxbz`) values (1,1,'2017-11-06','1',5,'0',500.00,'2018-01-13 20:52:26','2018-01-13 20:52:26','Y');
insert  into `orders`(`_id`,`baby_id`,`order_date`,`member_lx`,`course_count`,`czlx_dm`,`je`,`lrrq`,`xgrq`,`yxbz`) values (18,1,'2018-01-29','1',5,'1',500.00,'2018-01-29 21:32:58','2018-01-29 21:32:58','Y');
insert  into `orders`(`_id`,`baby_id`,`order_date`,`member_lx`,`course_count`,`czlx_dm`,`je`,`lrrq`,`xgrq`,`yxbz`) values (19,1,'2018-01-29','1',-5,'2',-500.00,'2018-01-29 21:33:25','2018-01-29 21:33:25','Y');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
