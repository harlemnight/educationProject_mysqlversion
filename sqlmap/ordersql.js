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
    updateBabyCourse: 'update babies bb\n' +
                        'set bb.member_lx = ?,\n' +
                        ' bb.course_count = bb.course_count+?\n' +
                        'where bb._id = ?',
    queryByName :  'select os._id,\n' +
                    '     os.order_date,\n' +
                    '     bs.baby_name,\n' +
                    '     os.baby_id,\n' +
                    '     case when os.member_lx =\'0\' then \'次卡\'\n' +
                    '\t  when os.member_lx =\'1\' then \'月卡\'\n' +
                    '\t  when os.member_lx =\'2\' then \'季卡\'\n' +
                    '\t  when os.member_lx =\'3\' then \'半年卡\'\n' +
                    '\t  else \'年卡\'\n' +
                    '\t end member_lx,\n' +
                    '     os.course_count,\n' +
                    '     case when os.czlx_dm =\'0\' then \'初次办理\'\n' +
                    '\t  when os.czlx_dm =\'1\' then \'续卡\'\n' +
                    '\t  else \'冲帐\'\n' +
                    '\t end czlx_dm,\n' +
                    '     os.je\n' +
                    'from\n' +
                    '     orders os,\n' +
                    '     babies bs\n' +
                    'where os.baby_id = bs._id\n' +
                    '     and [os.order_date >= str_to_date(@order_rqq@, \'%Y-%m-%d\')]\n' +
                    '     and [os.order_date < str_to_date(@order_rqz@,\'%Y-%m-%d\') + 1]\n' +
                    '     and [bs.baby_name = @baby_name@]\n' +
                    '     order by os.lrrq desc\n' +
                    '     limit ?,?\n' ,
    queryCountByName :  'select\n' +
                        '     count(1) cnt\n' +
                        'from\n' +
                        '     orders os,\n' +
                        '     babies bs\n' +
                        'where os.baby_id = bs._id\n' +
                        '     and [os.order_date >= str_to_date(@order_rqq@, \'%Y-%m-%d\')]\n' +
                        '     and [os.order_date < str_to_date(@order_rqz@, \'%Y-%m-%d\') + 1]\n' +
                        '     and [bs.baby_name = @baby_name@]\n' ,
    getOrderById :   'select * from orders where _id = ? '
};

module.exports = OrderSql;
