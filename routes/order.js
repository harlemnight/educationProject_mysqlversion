var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../sqlmap/mysqldb');
var OrderSql = require('../sqlmap/ordersql');
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
         querySqlResult = replaceParams(querySqlResult,params_var[i],params_final[i]);
         querySqlCount = replaceParams(querySqlCount,params_var[i],params_final[i]);
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




 function replaceParams(querySql,param,paramText) {
     /*
     * ^  $ 表示要被查找的字符串的起始第一个字符到结尾最后一个字符
     * 也就是整个输入的String用来匹配
     *String = [adf]空格    正则 x$ 如果$前面的字符不是x 就无法匹配
     * 所以一般查找字符串中的某部分字符串 一般不要用  ^...$ 这种写法
     *   .* 表示任意多个字符   除了  换行  不含空格等等
     *   var re = new RegExp("\\[.*@order_rqq@.*\\]");
     *
     * */
     var exp1 = new RegExp("\\[.*@"+paramText+"@.*\\]");
     if ( param==undefined || param==""){
         var sql1 = querySql.replace(exp1,'1=1');
         //console.log(sql1);
         return sql1;
     } else {
         var sql2 = querySql.match(exp1);
         //console.log(sql2);
         var exp2 = new RegExp("[\\[\\]]","g");
         var sql3 = sql2[0].replace(exp2,'');
         //console.log(sql3);
         var exp3 = new RegExp("\\@"+paramText+"\\@");
         var sql4 = sql3.replace(exp3,"'"+param+"'");
         //console.log(sql4);
         var sql5 = querySql.replace(exp1,sql4);
         //console.log(sql5);
         return sql5;
     }


 }

module.exports = router;
