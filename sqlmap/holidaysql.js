var HolidaySql = {
    queryAll :  'select id,' +
                    ' course_date,' +
                    ' course_lx' +
                    ' from holidays where yxbz ="Y" ' +
                    'order by  xgrq limit ?,?',
    queryCount :   'select count(1) cnt from holidays where yxbz ="Y"'
};
module.exports = HolidaySql;
