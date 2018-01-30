var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../sqlmap/mysqldb');
var HolidaySql = require('../sqlmap/holidaysql');
var Common = require('../service/common');
var pool = mysql.createPool( dbConfig.mysql );


router.get('/list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = CourseSql.queryAll;
    var querySqlCount = CourseSql.queryCount;
    var params_var = ['Y',req.query.course_rqq,req.query.course_rqz,req.query.baby_name,'0',0];
    var params_final = ['yxbz','course_rqq','course_rqz','baby_name','status','lx'];
    for( var i=0;i<6;i++) {
        querySqlResult = Common.replaceParams(querySqlResult,params_var[i],params_final[i]);
        querySqlCount = Common.replaceParams(querySqlCount,params_var[i],params_final[i]);
    }
    pool.getConnection(function(err, connection) {
        connection.query(querySqlResult, param, function(err, courses) {
            if(err){
                res.render('course/list', {
                    status:false,
                    msg:err.toString(),
                    active_url:'course/list'
                });
            }else {
                connection.query(querySqlCount,param,function(err, result) {
                    if(err){
                        res.render('course/list', {
                            status:false,
                            msg:err.toString(),
                            active_url:'course/list'
                        });
                    }else {
                        res.render('course/list', {
                            status:true,
                            courses:courses,
                            course_rqq:req.query.course_rqq,
                            course_rqz:req.query.course_rqz,
                            baby_name:req.query.baby_name,
                            pageNum:pageNum,
                            pageTotal:Math.ceil(result[0].cnt/pageSize),
                            active_url:'course/list',
                            offset:offset
                        });
                    }
                    connection.release();
                });
            }
        });
    });
});


module.exports = router;
