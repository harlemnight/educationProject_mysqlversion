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

/*Table structure for table `holidays` */

CREATE TABLE `holidays` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `course_date` date NOT NULL,
  `course_lx` char(1) NOT NULL DEFAULT '0',
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `holidays` */

insert  into `holidays`(`id`,`course_date`,`course_lx`,`lrrq`,`xgrq`,`yxbz`) values (3,'2018-02-01','0','2018-02-01 14:58:45','2018-02-01 14:58:51','N');
insert  into `holidays`(`id`,`course_date`,`course_lx`,`lrrq`,`xgrq`,`yxbz`) values (4,'2018-02-01','1','2018-02-01 14:58:59','2018-02-01 15:02:00','Y');
insert  into `holidays`(`id`,`course_date`,`course_lx`,`lrrq`,`xgrq`,`yxbz`) values (8,'2018-02-01','0','2018-02-01 15:02:36','2018-02-01 15:02:36','Y');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
