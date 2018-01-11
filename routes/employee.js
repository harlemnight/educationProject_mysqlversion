var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../models/mysqldb');
var EmployeeSql = require('../models/employeesql');
var router = express.Router();
var pool = mysql.createPool( dbConfig.mysql );

// 响应一个JSON数据
var responseJSON = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({     code:'-200',     msg: '操作失败'
        });
    } else {
        res.json(ret);
    }};


/*
* 账户列表
* */
router.post('/add', function(req, res) {
    pool.getConnection(function(err, connection) {
        var param = ['陈曦', '123456',33, '33836858@qq.com','深圳市南山区科技园南区R2-B三楼','17783119364',null,null,null];
        connection.query(EmployeeSql.insert, param, function(err, result) {
            // 以json形式，把操作结果返回给前台页面
            responseJSON(res, result);
            // 释放连接
            connection.release();

        });
    });
});


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

                }else {
                    console.log(employees);
                    connection.query(querySqlCount,param,function(err, count) {
                        console.log(count);
                        var pageTotal =Math.ceil(count/pageSize);
                            res.render('employee/list', {
                                status:true,
                                employees:employees,
                                searchParams:searchParams,
                                pageNum:pageNum,
                                pageTotal:pageTotal,
                                active_url:'employee/list'
                            });
                    });
                }
                connection.release();
            });
        });
});


/*
 * 账户添加
 */
router.get('/add',function(req, res) {res.render('employee/add', {});});

router.post('/add', function(req, res) {
    var new_employee = new Employee(
        {
            employee_name: req.body.employee_name,
            password:req.body.password,
            birthday: req.body.birthday,
            age:req.body.age,
            wexin:req.body.wexin,
            email:req.body.email,
            home_address:req.body.home_address,
            phone_no1:req.body.phone_no1,
            phone_no2:req.body.phone_no2
        }
    );
    new_employee.save(function (err, employee) {
        if (err) {
        }else {
        }
        res.redirect('/employee/list');
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
