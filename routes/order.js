var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../sqlmap/mysqldb');
var BabySql = require('../sqlmap/babysql');
var OrderSql = require('../sqlmap/ordersql');
var router = express.Router();
var pool = mysql.createPool( dbConfig.mysql );

router.get('/', function(req, res, next) {res.render('index', {});});

/*
* 办卡续卡列表
* */
router.get('/list', function(req, res) {
    var baby_name = req.query.baby_name;
    var order_rqq = req.query.course_rqq;
    var order_rqz = req.query.course_rqz;
    var num = req.query.page;
    var pageNum = 0;
    var pageSize = 2;
    if ( num == undefined || num <= 1) {
        pageNum = 1;
    }else {
        pageNum = num;
    }
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param ;
    var querySqlResult ;
    var querySqlCount ;


    pool.getConnection(function(err, connection) {
        connection.query(querySqlResult, param, function(err, orders) {
            if(err){
                res.render('order/list', {
                    status:false,
                    msg:err.toString(),
                    active_url:'order/list'
                });
            }else {
                connection.query(querySqlCount,param,function(err, result) {
                    if(err){
                        res.render('order/list', {
                            status:false,
                            msg:err.toString(),
                            active_url:'order/list'
                        });
                    }else {
                        var pageTotal =Math.ceil(result[0].cnt/pageSize);
                        res.render('order/list', {
                            status:true,
                            orders:orders,
                            order_rqq:order_rqq,
                            order_rqz:order_rqz,
                            baby_name:baby_name,
                            pageNum:pageNum,
                            pageTotal:pageTotal,
                            active_url:'order/list',
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
