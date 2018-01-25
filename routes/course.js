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
 * status = '0' and yxbz = 'Y'
 **/
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


/**
 *查询取消课程记录
 * status ='0'
 * yxbz = 'N'
 **/
router.get('/cancel_list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = CourseSql.queryAll;
    var querySqlCount = CourseSql.queryCount;
    var params_var = ['N',req.query.course_rqq,req.query.course_rqz,req.query.baby_name,'0',0];
    var params_final = ['yxbz','course_rqq','course_rqz','baby_name','status','lx'];
    for( var i=0;i<6;i++) {
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
 * lx=2
 **/
router.get('/appoint_list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = CourseSql.queryAll;
    var querySqlCount = CourseSql.queryCount;
    var params_var = ['Y',req.query.course_rqq,req.query.course_rqz,req.query.baby_name,0,'2'];
    var params_final = ['yxbz','course_rqq','course_rqz','baby_name','status','lx'];
    for( var i=0;i<6;i++) {
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
/**
 *
 *课程签到 ，status =0 lx =0
 * 预约 添加记录 status =2 lx =2
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


/**
 *
 * 保存课程签到 ，status =0 lx =0
 * 预约 添加记录 status =2 lx =2
 */
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
                    var param = [-1,req.body.baby_id==""?null:req.body.baby_id];
                    connection.query(BabySql.updateBabyCourse, param, function(err, rs) {
                        if (err) {
                            res.render('course/add', {
                                baby_id:req.body.baby_id,
                                baby_name:req.body.baby_name,
                                course_rq : req.body.course_rq,
                                lx : req.body.lx,
                                title:title,
                                msg:err.toString()
                            });
                        } else {
                            res.redirect('/course/list');
                        }
                    });

                } else {
                    //预约不直接更新剩余课程数 需要进行确认才更新
                    res.redirect('/course/appoint_list');
                }
            }
            connection.release();
        });
    });

});

/*
* 课程取消
* 只针对已经签到的课程进行取消
* status = 0 的
* update yxbz = 'Y'
* */
router.get('/cancel',function(req, res) {
    var param = [
        req.query.id=""?null:req.query.id
    ];

    pool.getConnection(function(err, connection) {
        connection.query(CourseSql.cancelCourse, param, function(err, result) {
            if(err){
                res.render('course/list', {
                    msg:err.toString()
                });
            }else {
                    res.redirect('/course/cancel_list');
            }
            connection.release();
        });
    });
});


/*
* 课程预约确认
* 只针对已经预约的课程进行确认
* status = 0 的
* update yxbz = 'Y'
* */
router.get('/confirmAppoint',function(req, res) {
    var param = [
        req.query.id=""?null:req.query.id
    ];

    pool.getConnection(function(err, connection) {
        connection.query(CourseSql.confirmAppoint, param, function(err, result) {
            if(err){
                res.render('course/appoint_list', {
                    msg:err.toString()
                });
            }else {
                res.redirect('/course/appoint_list');
            }
            connection.release();
        });
    });
});


/*
* 课程预约取消
* 只针对未确认的预约的课程进行取消
* 已经确认的课程需通过取消课程来取消
* status = 2 的
* update yxbz = 'N'
* */
router.get('/cancelAppoint',function(req, res) {
    var param = [
        req.query.id=""?null:req.query.id
    ];
    pool.getConnection(function(err, connection) {
        connection.query(CourseSql.cancelAppoint, param, function(err, result) {
            if(err){
                res.render('course/appoint_list', {
                    msg:err.toString()
                });
            }else {
                res.redirect('/course/appoint_list');
            }
            connection.release();
        });
    });
});


module.exports = router;