const dateTimeFormat = (longTypeDate) => {
    var dateTimeType = "";
    var date = new Date();
    date.setTime(longTypeDate * 1000);
    dateTimeType = date.getFullYear() + "-" + getMonth(date) + "-" + getDay(date) + " " + getHours(date) + ":" + getMinutes(date) + ":" + getSeconds(date); //yyyy-MM-dd 00:00:00格式日期
    return dateTimeType;
}

function getMonth(date) {
    var month = "";
    month = date.getMonth() + 1; //getMonth()得到的月份是0-11  
    if (month < 10) {
        month = "0" + month;
    }
    return month;
}
//返回01-30的日期  
function getDay(date) {
    var day = "";
    day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    return day;
}
//返回小时
function getHours(date) {
    var hours = "";
    hours = date.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    return hours;
}
//返回分
function getMinutes(date) {
    var minute = "";
    minute = date.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    return minute;
}
//返回秒
function getSeconds(date) {
    var second = "";
    second = date.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    return second;
}

module.exports = dateTimeFormat;