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

/*!50106 set global event_scheduler = 1*/;

/* Event structure for event `job_createCourseRecord_at_1000` */

DELIMITER $$

/*!50106 CREATE DEFINER=`root`@`localhost` EVENT `job_createCourseRecord_at_1000` ON SCHEDULE EVERY 1 DAY STARTS '2018-01-14 10:00:00' ON COMPLETION NOT PRESERVE ENABLE DO begin
	    call p_createCourseRecord();

	end */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
