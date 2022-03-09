//for all page 
var audio = new Audio('/asset/Audio/Backsound/Sapphire Lotus.mp3');
audio.loop = true;
audio.play();

//document.oncontextmenu = new Function("return false");
//Page 1
//get username
function input_username(){
    
    document.getElementById('greetings').insertAdjacentText('beforeend', username);
}

//Algorithm for change gender
var z = 1;
function displayX() {
    z = 1;
    clicked();
  }

function displayY() {
      z = 0;
      clicked();
    }

function clicked (){
    var backchar1 = document.getElementById('char_left');
    var backchar2 = document.getElementById('char_right');
    if(z == 1){
        
        backchar1.style.backgroundColor = 'blue';
        backchar2.style.backgroundColor = 'yellow';
    }
    else if(z == 0){
        backchar1.style.backgroundColor = 'yellow';
        backchar2.style.backgroundColor = 'blue';

    }
}

function chooseChara(){
    if(z == 1){
        document.getElementById('aksesoris').src='asset/character/character-boy1/';
        document.getElementById('hair-back').src='asset/character/character-boy1/hair-back.png';
        document.getElementById('head').src='asset/character/character-boy1/head.png';
        document.getElementById('eye').src='asset/character/character-boy1/eye.png';
        document.getElementById('eye2').src='asset/character/character-boy1/eye2.png';
        document.getElementById('eye3').src='asset/character/character-boy1/eye3.png';
        document.getElementById('hair-front').src='asset/character/character-boy1/hair-front.png';
        document.getElementById('body').src='asset/character/character-boy1/body.png';
        document.getElementById('hand-left').src='asset/character/character-boy1/hand-left.png';
        document.getElementById('hand-right').src='asset/character/character-boy1/hand-right.png';
        document.getElementById('foot').src='asset/character/character-boy1/foot.png';
    }
    else if(z == 0){
        document.getElementById('aksesoris').src='asset/character/character-girl1/';
        document.getElementById('hair-back').src='asset/character/character-girl1/hair-back.png';
        document.getElementById('head').src='asset/character/character-girl1/head.png';
        document.getElementById('eye').src='asset/character/character-girl1/eye.png';
        document.getElementById('eye2').src='asset/character/character-girl1/eye2.png';
        document.getElementById('eye3').src='asset/character/character-girl1/eye3.png';
        document.getElementById('hair-front').src='asset/character/character-girl1/hair-front.png';
        document.getElementById('body').src='asset/character/character-girl1/body.png';
        document.getElementById('hand-left').src='asset/character/character-girl1/hand-left.png';
        document.getElementById('hand-right').src='asset/character/character-girl1/hand-right.png';
        document.getElementById('foot').src='asset/character/character-girl1/foot.png';
    }
}

function play(){
    chooseChara();
    input_username();
}


//Page 2

//Algoritm for time
var d,h,m,s,animate;

function init(){
    d=new Date();
    m= 11;
    s= 00;
    clock();
};

function clock(){
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==24){
            m=0;
        }
    }
    $('min',s);
    $('hr',m);
    greetings(m);
    clock2(m,s);
    animate=setTimeout(clock,1000);
};

function $(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

window.onload=init;

//greetings
greetings(m);
function greetings(){
    username = document.getElementById('username').value;
    if(m >= 06 && m<=11){
        document.getElementById("greetings").innerHTML = 'Good Morning, ' +username;
    }
    if(m >= 12 && m<=18){
        document.getElementById("greetings").innerHTML = 'Good Afternoon, ' +username;
    }
    if(m >= 19 && m<=23){
        document.getElementById("greetings").innerHTML = 'Good Evening, ' +username;
    }
    if(m >= 00 && m<=05){
        document.getElementById("greetings").innerHTML = 'Good Night, ' +username;
    }
}


//Algorithm for status bar

var i = 0;
var width_makan = 50;
var width_tidur = 50;
var width_belajar = 1;
var width_bermain = 50;
move();
function move() {
  if (i == 0) {
    i = 1;
    var makan = document.getElementById("proggress_bar1");
    var tidur = document.getElementById("proggress_bar2");
    var bermain = document.getElementById("proggress_bar3");
    var belajar = document.getElementById("proggress_bar4");
    var id = setInterval(frame, 50);
    function frame() {
        if(width_makan >0){
        width_makan = width_makan - 0.1;
        makan.style.width = width_makan + "%";
        }
        if(width_tidur >0){
        width_tidur = width_tidur - 0.1;
        tidur.style.width = width_tidur + "%";
        }
        if(width_bermain >0){
        width_bermain = width_bermain - 0.1;
        bermain.style.width = width_bermain + "%";
        }
        if(width_belajar >0){
        width_belajar = width_belajar - 0.1;
        belajar.style.width = width_belajar + "%";
        }
      }
    }
  }

  function tambah_makan(){
      for(var i = 0; i < 20 ; i++){
      if(width_makan > 100){
          return;
      }
      width_makan = width_makan +1
    }
}

function tambah_belajar(){
    for(var i = 0; i < 20 ; i++){
    if(width_belajar > 100){
        return;
    }
    width_belajar = width_belajar +1
  }
}


function tambah_tidur(){
    for(var i = 0; i < 20 ; i++){
    if(width_tidur > 100){
        return;
    }
    width_tidur = width_tidur +1
  }
}


function tambah_bermain(){
    for(var i = 0; i < 20 ; i++){
    if(width_bermain > 100){
        return;
    }
    width_bermain = width_bermain +1
  }
}



//for clock
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");

function clock2(m, s) {
  const minuteDegree = (s / 60) * 360;
  const hourDegree = (m / 12) * 360;

  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}



//change costume{
xiao_body =  'asset/costume/Xiao/body.png';
xiao_hand_right = 'asset/costume/Xiao/hand_right.png';
xiao_hand_left = 'asset/costume/Xiao/hand_left.png';

    function change_outfit(){
        document.getElementById('body').src = xiao_body;
        document.getElementById('hand-left').src= xiao_hand_left;
        document.getElementById('hand-right').src= xiao_hand_right;
    }


//pop ups

var pop_ups = document.getElementById('pop_ups');
var pop_ups_in = document.getElementById('pop_ups_in');
close_pop();
function open_pop(){
    pop_ups.style.display = 'block';
    pop_ups_in.style.display = 'block';
}

function close_pop(){
    pop_ups.style.display = 'none';
    pop_ups_in.style.display = 'none';
}