var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../sqlmap/mysqldb');
var CourseSql = require('../sqlmap/coursesql');
var BabySql = require('../sqlmap/babysql');
var Common = require('../service/common');
var router = express.Router();
var pool = mysql.createPool( dbConfig.mysql );

/**
 *查询课程记录
 * status = '0'
 **/
router.get('/list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = CourseSql.queryAll;
    var querySqlCount = CourseSql.queryCount;
    var params_var = [req.query.course_rqq,req.query.course_rqz,req.query.baby_name,'0',0];
    var params_final = ['course_rqq','course_rqz','baby_name','status','lx'];
    for( var i=0;i<5;i++) {
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


/**
 *查询取消课程记录
 * status ='1'
 **/
router.get('/cancel_list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = CourseSql.queryAll;
    var querySqlCount = CourseSql.queryCount;
    var params_var = [req.query.course_rqq,req.query.course_rqz,req.query.baby_name,'1',0];
    var params_final = ['course_rqq','course_rqz','baby_name','status','lx'];
    for( var i=0;i<5;i++) {
        querySqlResult = Common.replaceParams(querySqlResult,params_var[i],params_final[i]);
        querySqlCount = Common.replaceParams(querySqlCount,params_var[i],params_final[i]);
    }
    pool.getConnection(function(err, connection) {
        connection.query(querySqlResult, param, function(err, courses) {
            if(err){
                res.render('course/cancel_list', {
                    status:false,
                    msg:err.toString(),
                    active_url:'course/cancel_list'
                });
            }else {
                connection.query(querySqlCount,param,function(err, result) {
                    if(err){
                        res.render('course/cancel_list', {
                            status:false,
                            msg:err.toString(),
                            active_url:'course/cancel_list'
                        });
                    }else {
                        res.render('course/cancel_list', {
                            status:true,
                            courses:courses,
                            course_rqq:req.query.course_rqq,
                            course_rqz:req.query.course_rqz,
                            baby_name:req.query.baby_name,
                            pageNum:pageNum,
                            pageTotal:Math.ceil(result[0].cnt/pageSize),
                            active_url:'course/cancel_list',
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
 *查询预约课程记录
 * lx=1
 **/
router.get('/appoint_list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = CourseSql.queryAll;
    var querySqlCount = CourseSql.queryCount;
    var params_var = [req.query.course_rqq,req.query.course_rqz,req.query.baby_name,0,'2'];
    var params_final = ['course_rqq','course_rqz','baby_name','status','lx'];
    for( var i=0;i<5;i++) {
        querySqlResult = Common.replaceParams(querySqlResult,params_var[i],params_final[i]);
        querySqlCount = Common.replaceParams(querySqlCount,params_var[i],params_final[i]);
    }
    pool.getConnection(function(err, connection) {
        connection.query(querySqlResult, param, function(err, courses) {
            if(err){
                res.render('course/appoint_list', {
                    status:false,
                    msg:err.toString(),
                    active_url:'course/appoint_list'
                });
            }else {
                connection.query(querySqlCount,param,function(err, result) {
                    if(err){
                        res.render('course/appoint_list', {
                            status:false,
                            msg:err.toString(),
                            active_url:'course/appoint_list'
                        });
                    }else {
                        res.render('course/appoint_list', {
                            status:true,
                            courses:courses,
                            course_rqq:req.query.course_rqq,
                            course_rqz:req.query.course_rqz,
                            baby_name:req.query.baby_name,
                            pageNum:pageNum,
                            pageTotal:Math.ceil(result[0].cnt/pageSize),
                            active_url:'course/appoint_list',
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
 *查询剩余课程提醒
 **/
/*
* 宝宝列表
* */
router.get('/last_list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = CourseSql.queryBabyExpire;
    var querySqlCount = CourseSql.queryBabyExpireCount;
    var course_count =  7;
    var params_var = [course_count,req.query.searchParams];
    var params_final = ['course_count','baby_name'];
    for( var i=0;i<2;i++) {
        querySqlResult = Common.replaceParams(querySqlResult, params_var[i], params_final[i]);
        querySqlCount = Common.replaceParams(querySqlCount, params_var[i], params_final[i]);
    }
    console.log(querySqlResult);
    pool.getConnection(function(err, connection) {
        connection.query(querySqlResult, param, function(err, babies) {
            if(err){
                res.render('course/last_list', {
                    status:false,
                    msg:err.toString(),
                    active_url:'course/last_list'
                });
            }else {
                connection.query(querySqlCount,param,function(err, result) {
                    if(err){
                        res.render('course/last_list', {
                            status:false,
                            msg:err.toString(),
                            active_url:'course/last_list'
                        });
                    }else {
                        var pageTotal =Math.ceil(result[0].cnt/pageSize);
                        res.render('course/last_list', {
                            status:true,
                            babies:babies,
                            searchParams:req.query.searchParams,
                            pageNum:pageNum,
                            pageTotal:pageTotal,
                            active_url:'course/last_list',
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
* 课程取消
* */
router.get('/delete',function(req, res) {
    var course = {yxbz:'N',xgrq: Date.now()};
    var conditions = {_id:req.query.id};
    var update     = {$set : course};
        Course.findOneAndUpdate(conditions,update,function(err,cs_doc) {
            if (err) {
                res.render('course/list', { status:false,msg:err.toString()});
            }else if(!cs_doc) {
                res.render('course/list', { status:false,msg:'查找课程失败'});
            }else {
                    var conditions = {_id:cs_doc.babyId};
                    var update     = {$set : {xgrq: Date.now()} ,$inc:{init_count:1}};
                        Baby.update(conditions,update,function(err) {
                            if (err) {
                                res.render('course/list', { status:false,msg:'更新宝贝信息失败'});
                            }else {
                                res.redirect('/course/list');
                            }
                        });
            }
        });
});


/**
 *
 *课程签到 ，status =0 lx =0
 * 预约 添加记录 status =2 lx =1
 */
router.get('/add',function(req, res) {
        var title = req.query.lx=='0'?'签到':'预约';
          res.render('course/add', {
                                        status: true,
                                        baby_id:req.query.id,
                                        baby_name:req.query.baby_name,
                                        course_rq : req.query.course_rq,
                                        lx : req.query.lx,
                                        title:title
           });
});



router.post('/add', function(req, res) {
    var param = [
        req.body.baby_id==""?null:req.body.baby_id,
        req.body.course_rq==""?null:req.body.course_rq,
        req.body.course_rq==""?null:req.body.course_rq,
        req.body.course_rq==""?null:req.body.course_rq,
        req.body.lx=='0'?'0':'2',
        null,
        req.body.lx==""?null:req.body.lx
    ];

    pool.getConnection(function(err, connection) {
        connection.query(CourseSql.insert, param, function(err, result) {
            if(err){
                var title = req.body.lx=='0'?'签到':'预约';
                res.render('course/add', {
                    baby_id:req.body.baby_id,
                    baby_name:req.body.baby_name,
                    course_rq : req.body.course_rq,
                    lx : req.body.lx,
                    title:title,
                    msg:err.toString()
                });
            }else {
                if (req.body.lx=='0'){
                    res.redirect('/course/list');
                } else {
                    res.redirect('/course/appoint_list');
                }

            }
            connection.release();
        });
    });

});


/*
 * 剩余课程查询
 */
router.get('/last',function(req, res) {res.render('course/last', { });});
module.exports = router;