var EmployeeSql = {
    insert : 'insert into employees ' +
            '(' +
            'employee_name,' +
            'password,' +
            'age,' +
            'email,' +
            'home_address,' +
            'phone_no1,' +
            'phone_no2,' +
            'rzrq,' +
            'lzrq' +
            ') ' +
            'values(?,?,?,?,?,?,?,?,?)',
    queryAll : 'select * from employees where yxbz ="Y" order by lrrq desc limit ?,?',
    queryAllBySearch : 'select * from employees where yxbz ="Y" and ( employee_name= ? or phone_no1 = ?) ' +
                        'order by lrrq desc limit ?,?',
    queryCount : 'select count(1) cnt from employees where yxbz ="Y"',
    queryCountBySearch : 'select count(1) cnt from employees where yxbz ="Y" and ( employee_name= ? or phone_no1 = ?) ',
    getEmployeeById : 'select * from employees where _id = ? ',
    deleteEmployeeById : 'update employees set yxbz = "N" where _id = ?'
};
module.exports = EmployeeSql;
