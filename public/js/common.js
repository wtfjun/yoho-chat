function appendZero(obj) {
    if (obj < 10) return "0" + "" + obj;
    else return obj;
}

function getLocalHMS() {
    var time = (new Date()).getTime();
    var d = new Date();
    return ' '+d.getFullYear()+'-' + appendZero(parseInt( d.getMonth()+1 ))+'-' + appendZero(d.getDate())+' ' + appendZero(d.getHours()) + ":" + appendZero(d.getMinutes()) + ":" + appendZero(d.getSeconds());
}