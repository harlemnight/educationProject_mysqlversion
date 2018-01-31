var HolidaySql = {
    queryAll :  'select id,' +
                    ' course_date,' +
                    ' (case when course_lx =\'0\' then \'放假\' else \'上课\' end ) course_lx' +
                    ' from holidays where yxbz ="Y" ' +
                    '     and [course_date >= str_to_date(@course_rqq@, \'%Y-%m-%d\')]\n' +
                    '     and [course_date < str_to_date(@course_rqz@,\'%Y-%m-%d\') + 1]\n' +
                    'order by course_date desc limit ?,?',
    queryCount :   'select count(1) cnt from holidays where yxbz ="Y"',
    insert: 'insert holidays (course_date,course_lx) ' +
                    'values(str_to_date(?, \'%Y-%m-%d\'),?)',
    cancelHoliday: 'update holidays set yxbz = "N" ,xgrq=now() where id = ?'
};
module.exports = HolidaySql;
