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
(1,'陈亚寒','2014-01-02',3,'陈元',NULL,NULL,NULL,'重庆南岸','17783119364',NULL,'心脏病','花生过敏',NULL,NULL,'1',30,0,'2018-01-13 14:17:37','2018-01-13 14:17:37','0','Y'),
(2,'含韵','2016-06-15',2,NULL,'含苞',NULL,NULL,NULL,'12623119364',NULL,NULL,NULL,NULL,NULL,'2',90,90,'2018-01-13 14:19:32','2018-01-13 14:19:32','0','Y'),
(3,'张建亚','2012-07-02',5,'张玉玺','韩亚巍','张菲菲','雅菲哦','重庆渝中区','12623113423',NULL,NULL,NULL,NULL,NULL,'3',180,180,'2018-01-13 14:21:00','2018-01-13 14:21:00','0','Y'),
(4,'紫云没','2013-08-09',5,'子涵','姚非',NULL,NULL,'重庆渝北','13923113423',NULL,NULL,NULL,NULL,NULL,'0',10,10,'2018-01-13 14:22:09','2018-01-13 14:22:09','0','Y'),
(5,'谭维','2013-03-01',4,'谭非','亚萨萨',NULL,NULL,'重庆贝贝','17823113423',NULL,NULL,NULL,NULL,NULL,'1',30,30,'2018-01-13 14:23:34','2018-01-13 14:23:34','0','Y'),
(6,'刘毅非','2013-01-04',4,'刘爸爸','刘妈妈',NULL,NULL,'重庆南岸','15823123423',NULL,NULL,NULL,NULL,NULL,'1',7,10,'2018-01-13 14:25:34','2018-01-13 14:25:34','0','Y');

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
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  `status` char(1) NOT NULL DEFAULT '0',
  `bz` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `courses` */

insert  into `courses`(`_id`,`babyId`,`course_bh`,`course_rq`,`course_time`,`baby_name`,`father`,`mather`,`phone_no1`,`lrrq`,`xgrq`,`yxbz`,`status`,`bz`) values 
(1,2,'2018-01-14','2018-01-14','2018-01-14','含韵',NULL,'含苞','12623119364','2018-01-14 23:12:22','2018-01-14 23:12:22','Y','0',NULL),
(2,3,'2018-01-14','2018-01-14','2018-01-14','张建亚','张玉玺','韩亚巍','12623113423','2018-01-14 23:12:22','2018-01-14 23:12:22','Y','0',NULL),
(3,5,'2018-01-14','2018-01-14','2018-01-14','谭维','谭非','亚萨萨','17823113423','2018-01-14 23:12:22','2018-01-14 23:12:22','Y','0',NULL),
(4,6,'2018-01-14','2018-01-14','2018-01-14','刘毅非','刘爸爸','刘妈妈','15823123423','2018-01-14 23:12:22','2018-01-14 23:12:22','Y','0',NULL),
(8,2,'2018-01-14','2018-01-14','2018-01-14','含韵',NULL,'含苞','12623119364','2018-01-14 23:13:10','2018-01-14 23:13:10','Y','0',NULL),
(9,3,'2018-01-14','2018-01-14','2018-01-14','张建亚','张玉玺','韩亚巍','12623113423','2018-01-14 23:13:10','2018-01-14 23:13:10','Y','0',NULL),
(10,5,'2018-01-14','2018-01-14','2018-01-14','谭维','谭非','亚萨萨','17823113423','2018-01-14 23:13:10','2018-01-14 23:13:10','Y','0',NULL),
(11,6,'2018-01-14','2018-01-14','2018-01-14','刘毅非','刘爸爸','刘妈妈','15823123423','2018-01-14 23:13:10','2018-01-14 23:13:10','Y','0',NULL);

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
  `je` decimal(10,2) DEFAULT NULL,
  `lrrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `xgrq` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `yxbz` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Data for the table `orders` */

insert  into `orders`(`_id`,`baby_id`,`order_date`,`member_lx`,`course_count`,`czlx_dm`,`je`,`lrrq`,`xgrq`,`yxbz`) values 
(1,1,'2017-11-06','1',30,'0',3000.00,'2018-01-13 20:52:26','2018-01-13 20:52:26','Y'),
(2,2,'2017-11-22','2',90,'0',9000.00,'2018-01-13 20:52:59','2018-01-13 20:52:59','Y'),
(3,3,'2017-11-17','3',180,'0',18000.00,'2018-01-13 20:53:16','2018-01-13 20:53:16','Y'),
(4,4,'2017-10-21','0',10,'0',1000.00,'2018-01-13 20:53:53','2018-01-13 20:53:53','Y'),
(5,5,'2017-10-03','1',30,'0',3000.00,'2018-01-13 20:54:19','2018-01-13 20:54:19','Y'),
(6,6,'2017-11-15','0',7,'0',700.00,'2018-01-13 20:54:53','2018-01-13 20:54:53','Y'),
(7,4,'2018-01-13','1',30,'1',3000.00,'2018-01-13 20:57:12','2018-01-13 20:57:12','Y'),
(10,6,'2018-01-16','0',1,'1',100.00,'2018-01-14 15:28:46','2018-01-14 15:28:46','Y'),
(11,6,'2018-01-18','1',30,'1',3000.00,'2018-01-14 15:29:51','2018-01-14 15:29:51','Y'),
(14,6,'2018-01-16','0',2,'1',200.00,'2018-01-14 16:00:59','2018-01-14 16:00:59','Y'),
(15,6,'2018-01-18','1',30,'1',3000.00,'2018-01-14 16:01:33','2018-01-14 16:01:33','Y'),
(16,6,'2018-01-18','1',-30,'2',3000.00,'2018-01-14 16:02:21','2018-01-14 16:02:21','Y'),
(17,6,'2018-01-18','1',-30,'2',-3000.00,'2018-01-14 16:07:16','2018-01-14 16:07:16','Y');

/*Table structure for table `test` */

DROP TABLE IF EXISTS `test`;

CREATE TABLE `test` (
  `a` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `test` */

insert  into `test`(`a`) values 
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a'),
('a');

/*Table structure for table `tt` */

DROP TABLE IF EXISTS `tt`;

CREATE TABLE `tt` (
  `_id` bigint(20) NOT NULL DEFAULT '0',
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
  `yxbz` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tt` */

insert  into `tt`(`_id`,`baby_name`,`birthday`,`age`,`father`,`mather`,`grandpa`,`grandma`,`home_address`,`phone_no1`,`phone_no2`,`case`,`allergy`,`hobby`,`character`,`member_lx`,`init_count`,`course_count`,`lrrq`,`xgrq`,`status`,`yxbz`) values 
(2,'含韵','2016-06-15',2,NULL,'含苞',NULL,NULL,NULL,'12623119364',NULL,NULL,NULL,NULL,NULL,'2',90,90,'2018-01-13 14:19:32','2018-01-13 14:19:32','0','Y'),
(3,'张建亚','2012-07-02',5,'张玉玺','韩亚巍','张菲菲','雅菲哦','重庆渝中区','12623113423',NULL,NULL,NULL,NULL,NULL,'3',180,180,'2018-01-13 14:21:00','2018-01-13 14:21:00','0','Y'),
(5,'谭维','2013-03-01',4,'谭非','亚萨萨',NULL,NULL,'重庆贝贝','17823113423',NULL,NULL,NULL,NULL,NULL,'1',30,30,'2018-01-13 14:23:34','2018-01-13 14:23:34','0','Y'),
(6,'刘毅非','2013-01-04',4,'刘爸爸','刘妈妈',NULL,NULL,'重庆南岸','15823123423',NULL,NULL,NULL,NULL,NULL,'1',7,10,'2018-01-13 14:25:34','2018-01-13 14:25:34','0','Y');

/*!50106 set global event_scheduler = 1*/;

/* Event structure for event `job_createCourseRecord_at_1000` */

/*!50106 DROP EVENT IF EXISTS `job_createCourseRecord_at_1000`*/;

DELIMITER $$

/*!50106 CREATE DEFINER=`root`@`localhost` EVENT `job_createCourseRecord_at_1000` ON SCHEDULE EVERY 1 MINUTE STARTS '2018-01-14 21:00:10' ON COMPLETION NOT PRESERVE ENABLE DO begin
	    call p_createCourseRecord();  

	end */$$
DELIMITER ;

/* Procedure structure for procedure `p_createCourseRecord` */

/*!50003 DROP PROCEDURE IF EXISTS  `p_createCourseRecord` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `p_createCourseRecord`()
BEGIN
	start transaction;
	    set @timenow=now(); #开始事务
	    # 表1
	    -- update tb_ev_stocks set FSTATUS=3 where FSTATUS=0 and FVALIDENDDATE < @timenow ;  
	    # 表2
	   --  update tb_ev_stock_details set FSTATUS=3 where FSTATUS=0 and FVALIDENDDATE < @timenow ;
	    insert into courses (
     babyId,
     course_bh,
     course_rq,
     course_time,
     baby_name,
     father,
     mather,
     phone_no1
)
select
     bb.`_id` babyId,
     current_date() course_bh,
     current_date()course_rq,
     current_date()　course_time,
     bb.baby_name,
     bb.father,
     bb.mather,
     bb.phone_no1
from
     babies bb
where bb.yxbz = 'Y'
     and bb.member_lx > '0'
     and bb.status = '0'
     and bb.course_count > 0;
	    
	    commit;  #提交事务
    END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
