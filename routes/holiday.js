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
    var querySqlResult = HolidaySql.queryAll;
    var querySqlCount = HolidaySql.queryCount;
    var params_var = [req.query.course_rqq,req.query.course_rqz];
    var params_final = ['course_rqq','course_rqz'];
    for( var i=0;i<2;i++) {
        querySqlResult = Common.replaceParams(querySqlResult,params_var[i],params_final[i]);
        querySqlCount = Common.replaceParams(querySqlCount,params_var[i],params_final[i]);
    }
    pool.getConnection(function(err, connection) {
        connection.query(querySqlResult, param, function(err, holidays) {
            if(err){
                res.render('holiday/list', {
                    status:false,
                    msg:err.toString(),
                    active_url:'holiday/list'
                });
            }else {
                connection.query(querySqlCount,param,function(err, result) {
                    if(err){
                        res.render('holiday/list', {
                            status:false,
                            msg:err.toString(),
                            active_url:'holiday/list'
                        });
                    }else {
                        res.render('holiday/list', {
                            status:true,
                            holidays:holidays,
                            course_rqq:req.query.course_rqq,
                            course_rqz:req.query.course_rqz,
                            pageNum:pageNum,
                            pageTotal:Math.ceil(result[0].cnt/pageSize),
                            active_url:'holiday/list',
                            offset:offset
                        });
                    }
                    connection.release();
                });
            }
        });
    });
});


/**
 *跳转设置日期页面
 */
router.get('/add',function(req, res) {
    res.render('holiday/add', {
        status: true
    });
});

/**
 *
 * 保存过滤日期
 */
router.post('/add', function(req, res) {
    var param = [
        req.body.course_rq==""?null:req.body.course_rq,
        req.body.course_lx==""?null:req.body.course_lx
    ];
    pool.getConnection(function(err, connection) {
                connection.query(HolidaySql.insert, param, function(err, result) {
                    if(err){
                        res.render('holiday/add', {
                            course_rq:req.body.course_rq,
                            lx : req.body.course_lx,
                            msg:err.toString()
                        });
            }else {
                res.redirect('/holiday/list');
            }
            connection.release();
        });
    });

});


/*
* 日期取消
* */
router.get('/cancel',function(req, res) {
    var param = [
        req.query.id=""?null:req.query.id
    ];
    pool.getConnection(function(err, connection) {
        connection.query(HolidaySql.cancelHoliday, param, function(err, result) {
            if(err){
                res.render('holiday/list', {
                    msg:err.toString()
                });
            }else {
                res.redirect('/holiday/list');
            }
            connection.release();
        });
    });
});



module.exports = router;
