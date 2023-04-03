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

function changePage(char){
    console.log(char);
    if(char == 'login'){
        console.log('login');
        window.location.replace('../html/SignUp.html');
    }
    else{
        console.log('signUp');
        window.location.replace('../html/SignIn.html');
    }
}

setInterval('showClock()', 1000);