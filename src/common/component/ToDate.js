/*
    1 min 内： "刚刚", 60000ms
    1 hour 内： "n分钟之前", 3600000 ms
    1 day 内： "n小时之前", 86400000 ms
    1 week 内： "n天之前"， 604800000 ms
    time
*/

function ToDate(props) {
    let {time} = props;
    let nowTime = Date.now();
    let newTime = new Date(time).getTime();
    let disTime = nowTime - newTime;
    if(disTime < 60000){
        return "刚刚";
    }else if(disTime < 3600000){
        return parseInt(disTime / 60000) + "分钟之前";
    }else if(disTime < 86400000){
        return parseInt(disTime / 3600000) + "小时之前";
    }else if(disTime < 604800000){
        return parseInt(disTime / 86400000) + "天之前";
    }
    return time;
}
export default ToDate;