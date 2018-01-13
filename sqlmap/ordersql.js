var OrderSql = {
    insert :    'insert into orders ' +
                '(' +
                'baby_id,' +
                'order_date,' +
                'member_lx,' +
                'course_count,' +
                'czlx_dm,' +
                'je' +
                ') ' +
                'values(?,str_to_date(?, \'%Y-%m-%d\'),?,?,?,?)',
    queryAll :  'select * from orders where yxbz ="Y" order by lrrq desc limit ?,?',
    queryAllBySearch :  'select * from orders where yxbz ="Y" and ' +
                        '( baby_name= ? or phone_no1 = ? or father = ? or mather = ?) ' +
                        'order by lrrq desc limit ?,?',
    queryCount :   'select count(1) cnt from orders where yxbz ="Y"',
    queryCountBySearch :   'select count(1) cnt from orders where yxbz ="Y" and ' +
                        '( baby_name= ? or phone_no1 = ? or father = ? or mather = ?) ',
    getOrderById :   'select * from orders where _id = ? ',
};

module.exports = OrderSql;
