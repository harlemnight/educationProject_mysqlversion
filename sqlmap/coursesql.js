var CourseSql = {
    insert :    'insert into courses ' +
                '(' +
                'babyId,' +
                'course_bh,' +
                'course_rq,' +
                'course_time,' +
                'status,' +
                'bz,' +
                'lx' +
                ') ' +
                'values(?,str_to_date(?,\'%Y-%m-%d\'),?,?,?,?,?)',
    queryAll :  ' select es.course_rq,\n' +
                '\t bb.baby_name,\n' +
                '\t bb.father,\n' +
                '\t bb.mather,\n' +
                '\t bb.phone_no1,\n' +
                '\t es.babyId,\n' +
                '\t es._id,\n' +
                '\t es.lx ,\n' +
                'case when es.status=0 and es.yxbz ="Y"  then "已确认" \n' +
                '\t else "未确认"\n' +
                '\t end st '+
            '  from courses es,\n' +
                '\t babies bb\n' +
                'where es.babyId = bb._id\n' +
                '  and [es.yxbz = @yxbz@]\n' +
                '     and [es.course_rq >= str_to_date(@course_rqq@, \'%Y-%m-%d\')]\n' +
                '     and [es.course_rq < str_to_date(@course_rqz@,\'%Y-%m-%d\') + 1]\n' +
                '     and [bb.baby_name = @baby_name@]\n' +
                '     and [es.status = @status@]\n' +
                '     and [es.lx = @lx@] \n' +
                '  order by es.xgrq desc limit ?,?',
     queryCount     : ' select count(1) cnt '+
                    '  from courses es,\n' +
                    '\t babies bb\n' +
                    'where es.babyId = bb._id\n' +
                    '  and [es.yxbz = @yxbz@]\n' +
                    '     and [es.course_rq >= str_to_date(@course_rqq@, \'%Y-%m-%d\')]\n' +
                    '     and [es.course_rq < str_to_date(@course_rqz@,\'%Y-%m-%d\') + 1]\n' +
                    '     and [bb.baby_name = @baby_name@]\n' +
                    '     and [es.status = @status@]\n' +
                    '     and [es.lx = @lx@]\n' ,
    cancelCourse:   'update courses es set yxbz = "N" ,' +
                    '   xgrq = now() \n' +
                    ' where es._id = ? \n',
    confirmAppoint:   'update courses es set status = 0 ,' +
                    '   xgrq = now() \n' +
                    ' where es.status = "2" and es._id = ? \n',
    cancelAppoint:   'update courses es set ' +
                    '   yxbz = "N" ,\n' +
                    '   xgrq = now() \n' +
                    ' where es.status = "2"  and es._id = ? \n',
    queryBabyExpire :  'select * from babies where yxbz ="Y" ' +
                        'and  [ course_count <=  @course_count@ ] \n' +
                        'and  [ baby_name =  @baby_name@ ] \n' +
                        'order by course_count limit ?,?',
    queryBabyExpireCount :   'select count(1) cnt from babies where yxbz ="Y" ' +
                        'and  [ course_count <=  @course_count@ ] \n' +
                        'and  [ baby_name =  @baby_name@ ] \n'
};

module.exports = CourseSql;
