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

/* Procedure structure for procedure `p_createCourseRecord` */

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
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
