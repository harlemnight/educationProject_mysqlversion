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

/*Table structure for table `courses` */

CREATE TABLE `courses` (
  `_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `babyId` bigint(20) NOT NULL,
  `course_bh` varchar(32) NOT NULL,
  `course_rq` date NOT NULL,
  `course_time` varchar(32) DEFAULT NULL,
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  `status` char(1) NOT NULL DEFAULT '0',
  `bz` varchar(500) DEFAULT NULL,
  `lx` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=277 DEFAULT CHARSET=utf8;

/*Data for the table `courses` */

insert  into `courses`(`_id`,`babyId`,`course_bh`,`course_rq`,`course_time`,`lrrq`,`xgrq`,`yxbz`,`status`,`bz`,`lx`) values (276,1,'2018-02-02','2018-02-02','2018-02-02','2018-02-02 10:00:00','2018-02-02 10:00:00','Y','0',NULL,'0');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
