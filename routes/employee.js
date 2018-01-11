var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../models/mysqldb');
var EmployeeSql = require('../models/employeesql');
var router = express.Router();
var pool = mysql.createPool( dbConfig.mysql );


/*
/*
* 账户列表
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
                param = [searchParams,searchParams,offset,pageSize];
                querySqlResult = EmployeeSql.queryAllBySearch;
                querySqlCount = EmployeeSql.queryCountBySearch;
            }else {
                param = [offset,pageSize];
                querySqlResult = EmployeeSql.queryAll;
                querySqlCount = EmployeeSql.queryCount;
            }

        pool.getConnection(function(err, connection) {
            connection.query(querySqlResult, param, function(err, employees) {
                if(err){
                        res.render('employee/list', {
                            status:false,
                            msg:err.toString(),
                            active_url:'employee/list'
                        });
                }else {
                    connection.query(querySqlCount,param,function(err, result) {
                        if(err){
                                res.render('employee/list', {
                                    status:false,
                                    msg:err.toString(),
                                    active_url:'employee/list'
                                });
                        }else {
                            var pageTotal =Math.ceil(result[0].cnt/pageSize);
                                res.render('employee/list', {
                                    status:true,
                                    employees:employees,
                                    searchParams:searchParams,
                                    pageNum:pageNum,
                                    pageTotal:pageTotal,
                                    active_url:'employee/list'
                                });
                        }
                        connection.release();
                    });
                }
            });
        });
});


/*
 * 账户添加
 */
router.get('/add',function(req, res) {res.render('employee/add', {});});

router.post('/add', function(req, res) {
    pool.getConnection(function(err, connection) {
        var param = [
                        req.body.employee_name,
                        req.body.password,
                        req.body.age,
                        req.body.email,
                        req.body.home_address,
                        req.body.phone_no1,
                        req.body.phone_no2,
                        null,
                        null
        ];

        connection.query(EmployeeSql.insert, param, function(err, result) {
            if(err){
                console.log(err.toString());
                res.render('employee/add', {
                    status:false,
                    msg:err.toString(),
                    active_url:'employee/list'
                });
            }else {
                console.log(result);
                res.redirect('/employee/list');
                connection.release();

            }

        });
    });
});



/*
* 账户按ID查询
* 通过href=/modify/59f0a634f934b125540f841b
* 的方式
* 注意获取参数的方式 req.params.id
* */
router.get('/modify/:id',function(req, res) {
    var login_employee = { _id: req.params.id};
    var status = true;
    var msg = "";
    Employee.findOne(login_employee,function(err,doc){
        if(err){
            msg = "未知错误";
        }else if(!doc){                                 //查询不到用户名匹配信息，则用户名不存在
            status = false;
            msg = login_employee.employee_name+"账户不存在";
        }else{}
        res.render('employee/detail', { title: '修改账户',employee:doc});
    });
});



/*
* 账户按ID修改
* */
router.post('/modify',function(req, res) {
    var employee = {
        employee_name: req.body.employee_name,
        age:req.body.age,
        email:req.body.email,
        home_address:req.body.home_address,
        phone_no1:req.body.phone_no1,
        phone_no2:req.body.phone_no2,
        xgrq:Date.now()
    };
    var conditions = {_id:req.body._id};
    var update     = {$set : employee};
    Employee.update(conditions,update,function(err) {
        if (err) {
        }else {
        }
        res.redirect('/employee/list');
    });
});


/*
 * 账户按ID删除
 */
router.get('/delete',function(req, res) {
    var employee = {yxbz:'N',xgrq: Date.now()};
    var conditions = {_id:req.query.id};
    var update     = {$set : employee};
    Employee.update(conditions,update,function(err) {
        if (err) {
        }else {
        }
        res.redirect('/employee/list');
    });

});

module.exports = router;
