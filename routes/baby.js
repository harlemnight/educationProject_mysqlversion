var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../sqlmap/mysqldb');
var BabySql = require('../sqlmap/babysql');
var router = express.Router();
var pool = mysql.createPool( dbConfig.mysql );

// 后端使用 moment
// babies.forEach(function(baby){
//    console.log(moment(baby.birthday).format('YYYY-MM-DD'));
// });

/*
* 宝宝列表
* */
router.get('/list', function(req, res) {
    var searchParams = req.query.searchParams;
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
    if ( !(searchParams==undefined) && !(searchParams=="")){
        param = [searchParams,searchParams,searchParams,searchParams,offset,pageSize];
        querySqlResult = BabySql.queryAllBySearch;
        querySqlCount = BabySql.queryCountBySearch;
    }else {
        param = [offset,pageSize];
        querySqlResult = BabySql.queryAll;
        querySqlCount = BabySql.queryCount;
    };
    pool.getConnection(function(err, connection) {
        connection.query(querySqlResult, param, function(err, babies) {
            if(err){
                res.render('baby/list', {
                    status:false,
                    msg:err.toString(),
                    active_url:'baby/list'
                });
            }else {
                connection.query(querySqlCount,param,function(err, result) {
                    if(err){
                        res.render('baby/list', {
                            status:false,
                            msg:err.toString(),
                            active_url:'baby/list'
                        });
                    }else {
                        var pageTotal =Math.ceil(result[0].cnt/pageSize);
                        res.render('baby/list', {
                            status:true,
                            babies:babies,
                            searchParams:searchParams,
                            pageNum:pageNum,
                            pageTotal:pageTotal,
                            active_url:'baby/list',
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
 * 添加宝宝
 */
router.get('/add',function(req, res) {res.render('baby/add', { });});

router.post('/add', function(req, res) {
    var param = [
        req.body.baby_name==""?null:req.body.baby_name,
        req.body.birthday==""?null:req.body.birthday,
        req.body.age==""?null:req.body.age,
        req.body.father==""?null:req.body.father,
        req.body.mather==""?null:req.body.mather,
        req.body.grandpa==""?null:req.body.grandpa,
        req.body.grandma==""?null:req.body.grandma,
        req.body.home_address==""?null:req.body.home_address,
        req.body.phone_no1==""?null:req.body.phone_no1,
        req.body.phone_no2==""?null:req.body.phone_no2,
        req.body.case==""?null:req.body.case,
        req.body.allergy==""?null:req.body.allergy,
        req.body.hobby==""?null:req.body.hobby,
        req.body.character==""?null:req.body.character,
        req.body.member_lx==""?null:req.body.member_lx,
        req.body.init_count==""?null:req.body.init_count,
        req.body.course_count==""?null:req.body.init_count
    ];

    pool.getConnection(function(err, connection) {
        connection.query(BabySql.insert, param, function(err, result) {
            if(err){
                var baby = {
                    baby_name:req.body.baby_name,
                    birthday:req.body.birthday,
                    age:req.body.age,
                    father:req.body.father,
                    mather:req.body.mather,
                    grandpa:req.body.grandpa,
                    grandma:req.body.grandma,
                    home_address:req.body.home_address,
                    phone_no1:req.body.phone_no1,
                    phone_no2:req.body.phone_no2,
                    case:req.body.case,
                    allergy:req.body.allergy,
                    hobby:req.body.hobby,
                    character:req.body.character,
                    member_lx:req.body.member_lx,
                    init_count:req.body.init_count
                }
                res.render('baby/add', {
                    status:false,
                    msg:err.toString(),
                    baby:baby,
                    active_url:'baby/list'
                });
            }else {
                res.redirect('/baby/list');
            }
            connection.release();
        });
    });
});



/*
* 宝宝按ID查询
* */
router.get('/modify/:id',function(req, res) {
    var param = [
        req.params.id==""?null:req.params.id
    ];
    pool.getConnection(function(err, connection) {
        connection.query(BabySql.getBabyById, param, function(err, baby) {
            if(err){
                res.render('baby/detail', {
                    status:false,
                    msg:err.toString(),
                    active_url:'baby/list'
                });
            }else {
                res.render('baby/detail', {
                    baby:baby[0],
                    status:true,
                    active_url:'baby/list'
                });
            }
            connection.release();
        });
    });
});



/*
* 宝宝按ID修改
* */
router.post('/modify',function(req, res) {
    var param = [
        req.body.baby_name==""?null:req.body.baby_name,
        req.body.birthday==""?null:req.body.birthday,
        req.body.age==""?null:req.body.age,
        req.body.father==""?null:req.body.father,
        req.body.mather==""?null:req.body.mather,
        req.body.grandpa==""?null:req.body.grandpa,
        req.body.grandma==""?null:req.body.grandma,
        req.body.home_address==""?null:req.body.home_address,
        req.body.phone_no1==""?null:req.body.phone_no1,
        req.body.phone_no2==""?null:req.body.phone_no2,
        req.body.case==""?null:req.body.case,
        req.body.allergy==""?null:req.body.allergy,
        req.body.hobby==""?null:req.body.hobby,
        req.body.character==""?null:req.body.character,
        req.body.member_lx==""?null:req.body.member_lx,
        req.body.init_count==""?null:req.body.init_count,
        req.body.course_count==""?null:req.body.init_count,
        req.body._id=""?null:req.body._id
    ];

    pool.getConnection(function(err, connection) {
        connection.query(BabySql.updateBaby, param, function(err, result) {
            if(err){
                console.log(req.body.birthday);
                var baby = {
                    baby_name:req.body.baby_name,
                    birthday:req.body.birthday,
                    age:req.body.age,
                    father:req.body.father,
                    mather:req.body.mather,
                    grandpa:req.body.grandpa,
                    grandma:req.body.grandma,
                    home_address:req.body.home_address,
                    phone_no1:req.body.phone_no1,
                    phone_no2:req.body.phone_no2,
                    case:req.body.case,
                    allergy:req.body.allergy,
                    hobby:req.body.hobby,
                    character:req.body.character,
                    member_lx:req.body.member_lx,
                    init_count:req.body.init_count,
                    course_count:req.body.init_count,
                    _id:req.body._id
                }
                res.render('baby/detail', {
                    status:false,
                    msg:err.toString(),
                    baby:baby,
                    active_url:'baby/list'
                });
            }else {
                res.redirect('/baby/list');
            }
            connection.release();
        });
    });

});


/*
 * 宝宝按ID删除
 */
router.get('/delete',function(req, res) {
    var param = [
        req.query._id=""?null:req.query._id
    ];
    pool.getConnection(function(err, connection) {
        connection.query(BabySql.deleteBabyById, param, function(err, result) {
            if(err){
            }else {
                res.redirect('/baby/list');
            }
            connection.release();
        });
    });
});

module.exports = router;