function showClock(){
    var nowTime = new Date();
    var nowYear     = nowTime.getFullYear();
    var nowMonth    = nowTime.getMonth() + 1;
    var nowDate     = nowTime.getDate();
    var nowHour = set2fig(nowTime.getHours());
    var nowMin  = set2fig(nowTime.getMinutes());
    var nowSec  = set2fig(nowTime.getSeconds());
    var msg = nowYear + "/" + nowMonth + "/" + nowDate + " " + nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById('RealTime').innerHTML = msg;
}
function set2fig(num){
    if(num < 10){
        num = "0" + num;
    }
    return num;
}
setInterval('showClock()', 1000);


function changePage(char){
    var alink;
    if(char == "signup"){
        alink = document.getElementById("signinId");
        alink.classList.toggle("displayNone");
        alink = document.getElementById("loginId");
        alink.classList.toggle("displayNone");
    }
    else if(char == "signin"){
        alink = document.getElementById("loginId");
        alink.classList.toggle("displayNone");
        alink = document.getElementById("signinId");
        alink.classList.toggle("displayNone");
    }
}