//Page 1

//Algorithm for change gender
var x = document.getElementById("homechar1");
x.style.display = "block";
var y = document.getElementById("homechar2");
y.style.display = "none";
var z = 1;
function displayX() {
    x.style.display = "block";
    y.style.display = "none";
    z = 1;
  }
  function displayY() {
      y.style.display = "block";
      x.style.display = "none";
      z = 0;
    }
    chooseChara();
function chooseChara(){
    if(z = 1){
        document.getElementById('aksesoris').src='/asset/character/character-girl1/';
        document.getElementById('hair-back').src='/asset/character/character-girl1/hair-back.png';
        document.getElementById('head').src='/asset/character/character-girl1/head.png';
        document.getElementById('eye').src='/asset/character/character-girl1/eye.png';
        document.getElementById('eye2').src='/asset/character/character-girl1/eye2.png';
        document.getElementById('eye3').src='/asset/character/character-girl1/eye3.png';
        document.getElementById('hair-front').src='/asset/character/character-girl1/hair-front.png';
        document.getElementById('body').src='/asset/character/character-girl1/body.png';
        document.getElementById('hand-left').src='/asset/character/character-girl1/hand-left.png';
        document.getElementById('hand-right').src='/asset/character/character-girl1/hand-right.png';
        document.getElementById('foot').src='/asset/character/character-girl1/foot.png';
    }else if(z = 0){
    }
}


var x = document.getElementById("")



//Page 2

//Algoritm for time
var d,h,m,s,animate;

function init(){
    d=new Date();
    m= 23;
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
    animate=setTimeout(clock,1000);
};

function $(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

window.onload=init;

//Algorithm for status bar

var i = 0;
var width_makan = 100;
var width_tidur = 100;
var width_belajar = 100;
var width_bermain = 100;
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


