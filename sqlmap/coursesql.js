var CourseSql = {
    insert :    'insert into courses ' +
                '(' +
                'baby_id,' +
                'course_bh,' +
                'course_rq,' +
                'course_time,' +
                'status,' +
                'bz' +
                ') ' +
                'values(?,str_to_date(?,?,\'%Y-%m-%d\'),?,?,?)',
    queryAll :  ' select es.course_rq,\n' +
                '\tbb.baby_name,\n' +
                '\tbb.father,\n' +
                '\tbb.mather,\n' +
                '\tbb.phone_no1,\n' +
                '\tes.babyId,\n' +
                '\tes._id\n' +
                '  from courses es,\n' +
                '\t babies bb\n' +
                'where es.babyId = bb._id\n' +
                '  and es.yxbz = \'Y\'\n' +
                '     and [es.course_rq >= str_to_date(@course_rqq@, \'%Y-%m-%d\')]\n' +
                '     and [es.course_rq < str_to_date(@course_rqz@,\'%Y-%m-%d\') + 1]\n' +
                '     and [bb.baby_name = @baby_name@]\n' +
                '     and [es.status = @status@]\n' +
                '  order by course_rq desc limit ?,?',
     queryCount     : ' select count(1) cnt '+
                    '  from courses es,\n' +
                    '\t babies bb\n' +
                    'where es.babyId = bb._id\n' +
                    '  and es.yxbz = \'Y\'\n' +
                    '     and [es.course_rq >= str_to_date(@course_rqq@, \'%Y-%m-%d\')]\n' +
                    '     and [es.course_rq < str_to_date(@course_rqz@,\'%Y-%m-%d\') + 1]\n' +
                    '     and [bb.baby_name = @baby_name@]\n' +
                    '     and [es.status = @status@]\n' ,
    updateCourse: 'update course es set `status`= ? ,xgrq = now(),bz =?\n' +
                    ' where es._id = ?'
};

module.exports = CourseSql;
