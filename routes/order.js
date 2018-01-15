var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../sqlmap/mysqldb');
var OrderSql = require('../sqlmap/ordersql');
var Common = require('../service/common');
var router = express.Router();
var pool = mysql.createPool( dbConfig.mysql );

router.get('/', function(req, res, next) {res.render('index', {});});

/*
* 办卡续卡列表
* */
router.get('/list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = OrderSql.queryByName;
    var querySqlCount = OrderSql.queryCountByName;

    var params_var = [req.query.order_rqq,req.query.order_rqz,req.query.baby_name];
    var params_final = ['order_rqq','order_rqz','baby_name'];
    for( var i=0;i<3;i++) {
        querySqlResult = Common.replaceParams(querySqlResult,params_var[i],params_final[i]);
        querySqlCount = Common.replaceParams(querySqlCount,params_var[i],params_final[i]);
    }
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
                        res.render('order/list', {
                            status:true,
                            orders:orders,
                            order_rqq:req.query.order_rqq,
                            order_rqz:req.query.order_rqz,
                            baby_name:req.query.baby_name,
                            pageNum:pageNum,
                            pageTotal:Math.ceil(result[0].cnt/pageSize),
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

/*
* 跳转续卡冲账页面
* */
router.get('/renewal',function(req, res) {
        res.render('order/renewal', {
            status:true,
            baby_name:req.query.baby_name,
            baby_id:req.query.baby_id,
            czlx_dm:req.query.czlx_dm,
            active_url:'order/list',
            title:req.query.czlx_dm=="1"?'续卡':'冲账'
        });
});


/*
 *  保存续卡冲账
 */
router.post('/renewal', function(req, res) {
    var course_count = 0;
    var money = 0;
    if (req.body.czlx_dm=="2"){
        course_count = 0-parseInt(req.body.course_count);
        money = 0-parseInt(req.body.money);
    }else {
        course_count = req.body.course_count;
        money = req.body.money;
    }
    var param = [
        req.body.baby_id==""?null:req.body.baby_id,
        req.body.order_date==""?null:req.body.order_date,
        req.body.member_lx==""?null:req.body.member_lx,
        course_count,
        req.body.czlx_dm==""?null:req.body.czlx_dm,
        money
    ];

    pool.getConnection(function(err, connection) {
        connection.query(OrderSql.insert, param, function(err, result) {
            var order = {
                baby_name:req.body.baby_name,
                baby_id:req.body.baby_id,
                order_date:req.body.order_date,
                member_lx:req.body.member_lx,
                course_count:req.body.course_count,
                money:req.body.money,
                czlx_dm:req.body.czlx_dm
            }
            if(err){
                res.render('order/renewal', {
                    status:false,
                    msg:err.toString(),
                    order:order,
                    baby_name:req.query.baby_name,
                    baby_id:req.query.baby_id,
                    czlx_dm:req.query.czlx_dm,
                    active_url:'order/list'
                });
            }else {
                 param = [
                    req.body.member_lx==""?null:req.body.member_lx,
                     course_count,
                    req.body.baby_id==""?null:req.body.baby_id
                ];
                connection.query(OrderSql.updateBabyCourse,param,function(err, result) {
                    if(err){
                        res.render('order/renewal', {
                            status:false,
                            msg:err.toString(),
                            order:order,
                            baby_name:req.query.baby_name,
                            baby_id:req.query.baby_id,
                            czlx_dm:req.query.czlx_dm,
                            active_url:'order/list'
                        });
                    }else {
                        res.redirect('/order/list');
                    }
                    connection.release();
                });
            }
        });
    });
});


module.exports = router;
