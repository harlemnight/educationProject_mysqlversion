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
 * status ='3' lx=1
 **/
router.get('/appoint_list', function(req, res) {
    var pageNum = ( req.query.page == undefined || req.query.page <= 1)?1:req.query.page;
    var pageSize = 2;
    var offset = (parseInt(pageNum)-1)*pageSize;
    var param = [offset,pageSize];
    var querySqlResult = CourseSql.queryAll;
    var querySqlCount = CourseSql.queryCount;
    var params_var = [req.query.course_rqq,req.query.course_rqz,req.query.baby_name,0,'1'];
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
    var course_count =  '7';
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


router.get('/add',function(req, res) {

    var num = req.query.page;
    var pageNum = 0;
    var pageSize = 20;
    if ( num == undefined || num <= 1) {
        pageNum = 1;
    }else {
        pageNum = num;
    }
    var offset = (parseInt(pageNum)-1)*pageSize;
    var condition = {yxbz:'Y',init_count:{$gt: 0}};
    Baby.find(condition,//这里是查询条件如果没有条件就是查询所有的数据，此参数可不传递  name: /周/
        function (err, babies) {
            if (err) {
                res.render('course/add', {status:false,msg:err.toString()});
            }
            else {
                Baby.count(condition,function(err,count) {
                    var pageTotal = Math.ceil(count / pageSize);
                    res.render('course/add', {  status: true,
                                                babies: babies,
                                                pageNum: pageNum,
                                                pageTotal: pageTotal,
                                                course_rq : req.query.course_rq,
                                                course_time : req.query.course_time,
                                                offset:offset,
                        active_url:'course/add'
                                             });
                })
            }
        }).limit(pageSize).skip(offset).sort({'lrrq':-1});

});


router.post('/add', function(req, res) {
    Baby.find({_id:{$in: req.body.baby_id}},function(err,baby_docs){
        if(err){
            res.render('course/add', { status:false,msg:err.toString()});
        }else if(!baby_docs){
            res.render('course/add', { status:false,msg: '没有获取到宝贝信息'});
        }else{
            var course_docs = [baby_docs.length];
            for ( var i = 0;i<baby_docs.length;i++) {
                course_docs[i] = new Course(
                    {
                        babyId:baby_docs[i]._id,
                        course_bh: req.body.course_rq+''+req.body.course_time,
                        course_rq: req.body.course_rq,
                        course_time:req.body.course_time,
                        baby_name:baby_docs[i].baby_name,
                        father:baby_docs[i].father,
                        mather:baby_docs[i].mather,
                        phone_no1:baby_docs[i].phone_no1
                    }
                );
            };

            //这里由于采用非内嵌方式存储宝贝签到信息（多个文档），因此无法同时满足
            //不存在则写入，存在则更新
            //因此comment this code
            //采用内嵌数组的方式来存储宝贝签到信息
            Course.collection.insert(course_docs,function (err, docs) {
                    if (err) {
                        res.render('course/add', {status:false,msg:err.toString()});
                    } else {
                        Baby.update({_id:{$in: req.body.baby_id}},{$inc:{init_count:-1}},{multi:true} ,function(err) {
                            if (err) {
                            }else {
                                var pageNum = 1;
                                var pageSize = 20;
                                var offset = (pageNum-1)*pageSize;
                                Baby.find({yxbz:'Y',init_count:{$gt: 0}},//这里是查询条件如果没有条件就是查询所有的数据，此参数可不传递  name: /周/
                                    function (err, babies) {
                                        if (err) {
                                            res.render('course/add', { status:false,msg:err.toString()});
                                        }
                                        else {
                                            Baby.count({yxbz:'Y',init_count:{$gt: 0}},function(err,count) {
                                                var pageTotal = Math.ceil(count / pageSize);
                                                res.render('course/add', {  status:true,
                                                    msg:'保存记录卡成功',
                                                    babies:babies,
                                                    pageNum:pageNum,
                                                    pageTotal: pageTotal,
                                                    course_rq : req.body.course_rq,
                                                    course_time : req.body.course_time,
                                                    offset:offset,
                                                    active_url:'course/add'
                                                });
                                            })
                                        }
                                    }).limit(pageSize).skip(offset).sort({'lrrq':-1});
                            }
                        });
                            }
                }
            );
        }
    });

});


/*
 * 剩余课程查询
 */
router.get('/last',function(req, res) {res.render('course/last', { });});
module.exports = router;