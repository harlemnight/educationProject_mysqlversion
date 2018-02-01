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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `babies` */

insert  into `babies`(`_id`,`baby_name`,`birthday`,`age`,`father`,`mather`,`grandpa`,`grandma`,`home_address`,`phone_no1`,`phone_no2`,`case`,`allergy`,`hobby`,`character`,`member_lx`,`init_count`,`course_count`,`lrrq`,`xgrq`,`status`,`yxbz`) values
(1,'陈亚寒','2014-01-02',3,'陈元',NULL,NULL,NULL,'重庆南岸','17783119364',NULL,'心脏病','花生过敏',NULL,NULL,'1',1,1,'2018-01-13 14:17:37','2018-01-29 21:35:33','0','Y');

/*Table structure for table `courses` */

DROP TABLE IF EXISTS `courses`;

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
) ENGINE=InnoDB AUTO_INCREMENT=274 DEFAULT CHARSET=utf8;

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
(2,'陈曦','123456',33,'33836858@qq.com','深圳市南山区科技园南区R2-B三楼','17783119364',NULL,'2018-01-10 22:40:32','2018-01-29 22:15:34','N',NULL,NULL,'0'),
(3,'陈曦','123456',33,'33836858@qq.com','深圳市南山区科技园南区R2-B三楼','17783119364',NULL,'2018-01-10 23:12:17','2018-01-29 22:15:29','N',NULL,NULL,'0'),
(4,'陈曦','123456',33,'33836858@qq.com','深圳市南山区科技园南区R2-B三楼','17783119364',NULL,'2018-01-10 23:40:03','2018-01-10 23:40:03','Y',NULL,NULL,'0');

/*Table structure for table `holidays` */

DROP TABLE IF EXISTS `holidays`;

CREATE TABLE `holidays` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `course_date` date NOT NULL,
  `course_lx` char(1) NOT NULL DEFAULT '0',
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `holidays` */

insert  into `holidays`(`id`,`course_date`,`course_lx`,`lrrq`,`xgrq`,`yxbz`) values
(3,'2018-02-01','0','2018-02-01 14:58:45','2018-02-01 14:58:51','N'),
(4,'2018-02-01','1','2018-02-01 14:58:59','2018-02-01 15:02:00','Y'),
(8,'2018-02-01','0','2018-02-01 15:02:36','2018-02-01 15:02:36','Y');

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

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

insert  into `orders`(`_id`,`baby_id`,`order_date`,`member_lx`,`course_count`,`czlx_dm`,`je`,`lrrq`,`xgrq`,`yxbz`) values
(1,1,'2017-11-06','1',5,'0',500.00,'2018-01-13 20:52:26','2018-01-13 20:52:26','Y'),
(18,1,'2018-01-29','1',5,'1',500.00,'2018-01-29 21:32:58','2018-01-29 21:32:58','Y'),
(19,1,'2018-01-29','1',-5,'2',-500.00,'2018-01-29 21:33:25','2018-01-29 21:33:25','Y');

/*Table structure for table `sysconfig` */

DROP TABLE IF EXISTS `sysconfig`;

CREATE TABLE `sysconfig` (
  `_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `col_ms` varchar(200) NOT NULL,
  `val` varchar(20) NOT NULL,
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `sysconfig` */

/*!50106 set global event_scheduler = 1*/;

/* Event structure for event `job_createCourseRecord_at_1000` */

/*!50106 DROP EVENT IF EXISTS `job_createCourseRecord_at_1000`*/;

DELIMITER $$

/*!50106 CREATE DEFINER=`root`@`localhost` EVENT `job_createCourseRecord_at_1000` ON SCHEDULE EVERY 1 DAY STARTS '2018-01-14 10:00:00' ON COMPLETION NOT PRESERVE ENABLE DO begin
	    call p_createCourseRecord();

	end */$$
DELIMITER ;

/* Procedure structure for procedure `p_createCourseRecord` */

/*!50003 DROP PROCEDURE IF EXISTS  `p_createCourseRecord` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `p_createCourseRecord`()
BEGIN
      declare ls_lx char(1);
      declare ld_default int;
      set @timenow = now();
      #开始事务
       # 表1
       -- update tb_ev_stocks set FSTATUS=3 where FSTATUS=0 and FVALIDENDDATE < @timenow ;
       # 表2
       --  update tb_ev_stock_details set FSTATUS=3 where FSTATUS=0 and FVALIDENDDATE < @timenow ;
       -- 当前日期是否在节假日设置表中设置了 0上课 1 放假
       select
            course_lx
            into
            ls_lx
      from
            holidays
      where yxbz = 'Y'
            and course_date = current_date()
      order by lrrq desc
      limit 0, 1;

	select DAYOFWEEK(current_date()) into ld_default;

      -- 0上课  否则放假就不写
      if (ls_lx = '0' or  (ls_lx is null and ld_default in (2,3,4,5,6)) )  then
       start transaction;

      insert into courses (
            babyId,
            course_bh,
            course_rq,
            course_time
      )
      select
            bb._id babyId,
            current_date() course_bh,
            current_date() course_rq,
            current_date() course_time
      from
            babies bb
      where bb.yxbz = 'Y'
            and bb.member_lx > '0'
            and bb.status = '0'
            and bb.course_count > 0;


      update
            babies bb
      set
            course_count = course_count - 1
      where bb.yxbz = 'Y'
            and bb.member_lx > '0'
            and bb.status = '0'
            and bb.course_count > 0;



      commit;
      #提交事务
       end if;
END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
