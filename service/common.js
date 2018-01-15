function replaceParams(querySql,param,paramText) {
    /*
    * ^  $ 表示要被查找的字符串的起始第一个字符到结尾最后一个字符
    * 也就是整个输入的String用来匹配
    *String = [adf]空格    正则 x$ 如果$前面的字符不是x 就无法匹配
    * 所以一般查找字符串中的某部分字符串 一般不要用  ^...$ 这种写法
    *   .* 表示任意多个字符   除了  换行  不含空格等等
    *   var re = new RegExp("\\[.*@order_rqq@.*\\]");
    *
    * */
    var exp1 = new RegExp("\\[.*@" + paramText + "@.*\\]");
    if (param == "" || param == undefined) {
        var sql1 = querySql.replace(exp1, '1=1');
        //console.log(sql1);
        return sql1;
    } else {
        var sql2 = querySql.match(exp1);
        //console.log(sql2);
        var exp2 = new RegExp("[\\[\\]]", "g");
        var sql3 = sql2[0].replace(exp2, '');
        //console.log(sql3);
        var exp3 = new RegExp("\\@" + paramText + "\\@");
        var sql4 = sql3.replace(exp3, "'" + param + "'");
        //console.log(sql4);
        var sql5 = querySql.replace(exp1, sql4);
        //console.log(sql5);
        return sql5;
    }
}
module.exports.replaceParams =  replaceParams;