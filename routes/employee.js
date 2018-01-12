var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../sqlmap/mysqldb');
var EmployeeSql = require('../sqlmap/employeesql');
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
            };

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
 * 保存账户表单页
 */
router.get('/add',function(req, res) {res.render('employee/add', {});});
/*
 * 保存账户
 */
router.post('/add', function(req, res) {
    var param = [
        req.body.employee_name==""?null:req.body.employee_name,
        req.body.password==""?null:req.body.password,
        req.body.age==""?null:req.body.age,
        req.body.email==""?null:req.body.email,
        req.body.home_address==""?null:req.body.home_address,
        req.body.phone_no1==""?null:req.body.phone_no1,
        req.body.phone_no2==""?null:req.body.phone_no2,
        null,null
    ];
        pool.getConnection(function(err, connection) {
            connection.query(EmployeeSql.insert, param, function(err, result) {
                if(err){
                    var employee = {
                        employee_name:req.body.employee_name,
                        password:req.body.password,
                        age:req.body.age,
                        email:req.body.email,
                        home_address:req.body.home_address,
                        phone_no1:req.body.phone_no1,
                        phone_no2:req.body.phone_no2
                    }
                    res.render('employee/add', {
                        status:false,
                        msg:err.toString(),
                        employee:employee,
                        active_url:'employee/list'
                    });
                }else {
                    res.redirect('/employee/list');
                }
                connection.release();
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
    var param = [
        req.params.id==""?null:req.params.id
    ];
    pool.getConnection(function(err, connection) {
        connection.query(EmployeeSql.getEmployeeById, param, function(err, employee) {
            if(err){
                res.render('employee/detail', {
                    status:false,
                    msg:err.toString(),
                    active_url:'employee/list'
                });
            }else {
                res.render('employee/detail', {
                        employee:employee[0],
                        status:true,
                        active_url:'employee/list'
                });
            }
            connection.release();
        });
    });
});

/*
* 保存修改
* */
router.post('/modify',function(req, res) {
    var param = [
        req.body.employee_name==""?null:req.body.employee_name,
        req.body.age==""?null:req.body.age,
        req.body.email==""?null:req.body.email,
        req.body.home_address==""?null:req.body.home_address,
        req.body.phone_no1==""?null:req.body.phone_no1,
        req.body.phone_no2==""?null:req.body.phone_no2,
        null,null,
        req.body._id=""?null:req.body._id
    ];
        pool.getConnection(function(err, connection) {
            connection.query(EmployeeSql.updateEmployee, param, function(err, result) {
                if(err){
                    var employee = {
                        employee_name:req.body.employee_name,
                        age:req.body.age,
                        email:req.body.email,
                        home_address:req.body.home_address,
                        phone_no1:req.body.phone_no1,
                        phone_no2:req.body.phone_no2,
                        _id:req.body._id
                    }
                    res.render('employee/detail', {
                        status:false,
                        msg:err.toString(),
                        employee:employee,
                        active_url:'employee/list'
                    });
                }else {
                    res.redirect('/employee/list');
                }
                connection.release();
            });
        });
});


/*
 * 账户按ID删除
 */
router.get('/delete',function(req, res) {
    var param = [
        req.query._id=""?null:req.query._id
    ];
    pool.getConnection(function(err, connection) {
        connection.query(EmployeeSql.deleteEmployeeById, param, function(err, result) {
            if(err){
            }else {
                res.redirect('/employee/list');
            }
            connection.release();
        });
    });
});

module.exports = router;
