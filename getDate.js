exports.getDate = function(){
    let today = new Date();
    let d = today.getDate();
    let mnth = (today.getMonth()+1);
    let y = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = y + "-" + mnth + "-" + d + " " + h + ":" + m + ":" + s;
    return day;
    
}

