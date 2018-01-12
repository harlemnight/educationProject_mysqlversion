var OrderSql = {
    insert :    'insert into babies ' +
                '(' +
                'baby_name,' +
                'birthday,' +
                'age,' +
                'father,' +
                'mather,' +
                'grandpa,' +
                'grandma,' +
                'home_address,' +
                'phone_no1,' +
                'phone_no2,' +
                '`case`,' +
                'allergy,' +
                'hobby,' +
                '`character`,' +
                'member_lx,' +
                'init_count,' +
                'course_count'+
                ') ' +
                'values(?,str_to_date(?, \'%Y-%m-%d\'),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    queryAll :  'select * from babies where yxbz ="Y" order by lrrq desc limit ?,?',
    queryAllBySearch :  'select * from babies where yxbz ="Y" and ' +
                        '( baby_name= ? or phone_no1 = ? or father = ? or mather = ?) ' +
                        'order by lrrq desc limit ?,?',
    queryCount :   'select count(1) cnt from babies where yxbz ="Y"',
    queryCountBySearch :   'select count(1) cnt from babies where yxbz ="Y" and ' +
                        '( baby_name= ? or phone_no1 = ? or father = ? or mather = ?) ',
    getBabyById :   'select * from babies where _id = ? ',
    updateBaby  :   'update babies set ' +
                    'baby_name = ?,' +
                    'birthday = str_to_date(?, \'%Y-%m-%d\') ,' +
                    'age = ?, ' +
                    'father = ?, ' +
                    'mather = ?, ' +
                    'grandpa = ?, ' +
                    'grandma = ?,' +
                    'home_address = ? ,' +
                    'phone_no1 = ? ,' +
                    'phone_no2 = ? ,' +
                    '`case` = ? ,' +
                    'allergy = ? ,' +
                    'hobby = ? ,' +
                    '`character` = ? ,' +
                    'member_lx = ? ,' +
                    'init_count = ? ,' +
                    'course_count = ? ,' +
                    'xgrq = now() '+
                    'where _id = ? ',
    deleteBabyById :   'update babies set yxbz = "N" ,xgrq = now() where _id = ?'
};

module.exports = OrderSql;
