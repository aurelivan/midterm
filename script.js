//for all page

//background audio

var audio = new Audio('asset/Audio/Backsound/Sapphire Lotus.mp3');
audio.loop = true;

//rgb function
function rgb(r, g, b, o){
    return "rgb("+r+","+g+","+b+","+o+")";
}

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
    var char1 = document.getElementById("char-home1");
    var char2 = document.getElementById("char-home2");
    char1.style.transition = 'all 0.6s';
    char2.style.transition = 'all 0.6s';
    if(z == 1){
        char1.style.transform = 'scale(1.2)';
        char1.style.filter = 'brightness(110%)';
        char2.style.transform = 'scale(0.9)';
        char2.style.filter = 'brightness(40%)';
    }
    
    else if(z == 0){
        char2.style.transform = 'scale(1.2)';
        char2.style.filter = 'brightness(110%)';
        char1.style.transform = 'scale(0.9)';
        char1.style.filter = 'brightness(40%)';
    }
}

function chooseChara(){
    if(z == 1){
        document.getElementById('accessories').src='asset/character/character-boy1/';
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
        document.getElementById('accessories').src='asset/character/character-girl1/';
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


//submit username

document.getElementById('start').disabled =true;
function submit_username(){
        document.getElementById('username').disabled = true;
        document.getElementById('start').style.pointerEvents = 'all';
        document.getElementById('start').style.opacity = '1';
}
//function for loading screen

//function for play / start button
$("#start").click(function(){
    $("#loading_screen").show();
    chooseChara();//function for gender
    $("#greetings").text(username);//display user name at greetings
    document.getElementById("Page2").scrollIntoView({behavior: 'auto'});//jump to page 2
    audio.play();//play backsound music 
    $(document).ready(function($) {
        setTimeout(function() {
        $("#loading_screen").hide(1000);
        }, 1500);
    });
    chooseChara();
    input_username();
    /*$("play").hover(function() { //BELOM JALAN
        $(this).css("background-color", "beige");
        $(this).css("transition", "0.3s");
    });*/

    var p1 = document.getElementById("Page1");
    var p2 = document.getElementById("Page2");
    if (p2.style.display === "none") {
        p2.style.display = "block";
        p1.style.display = "none";
    }

    document.getElementById("Page2").scrollIntoView({behavior: 'auto'});
    move();

});
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
    change_back(m)
    clock2(m,s);
    animate=setTimeout(clock,1000);
};

window.onload=init;



//change background


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
change_back(m)
function change_back(){
    username = document.getElementById('username').value;
    if(m >= 08 && m<=11){
        document.getElementById("Page2").style.backgroundImage = 'url(asset/background/pagi.png)';
    }
    if(m >= 12 && m<=15){
        document.getElementById("Page2").style.backgroundImage = 'url(asset/background/siang.png)';
    }
    if(m >= 16 && m<=18){
        document.getElementById("Page2").style.backgroundImage = 'url(asset/background/sore.png)';
    }
    if(m >= 18 && m<=08){
        document.getElementById("Page2").style.backgroundImage = 'url(asset/background/malam.png)';
    }
}



//Algortm for gif
function gif_hid(){
    document.getElementById('eat_gif').style.display = 'none';
    document.getElementById('sleep_gif').style.display = 'none';
    document.getElementById('study_gif').style.display = 'none';
    document.getElementById('play_gif').style.display = 'none';
}
gif_hid();
function show_gif(i){
if(i == 1){
    document.getElementById('eat_gif').style.display = 'block';
}
else if(i == 2){
    document.getElementById('sleep_gif').style.display = 'block';
}
else if(i == 3){
    document.getElementById('study_gif').style.display = 'block';
}
else if(i == 4){
    document.getElementById('play_gif').style.display = 'block';
}
}

//Tombol back
function back() {
    var p1 = document.getElementById("Page1");
    var p2 = document.getElementById("Page2");
    if (p1.style.display === "none") {
        p1.style.display = "block";
        p2.style.display = "none";
    }
}

//Algorithm for status bar
var width_makan = 50;
var width_tidur = 50;
var width_belajar = 1;
var width_bermain = 50;
function move() {
    var makan = document.getElementById("proggress_bar1");
    var tidur = document.getElementById("proggress_bar2");
    var bermain = document.getElementById("proggress_bar3");
    var belajar = document.getElementById("proggress_bar4");
    var id = setInterval(frame, 1000);
    function frame() {
        if(width_makan >0){
        width_makan = width_makan - 1;
        makan.style.width = width_makan + "%";
        if(width_makan < 20){
            makan.style.backgroundColor = 'red';
        }
        else{
            makan.style.backgroundColor = '#01a10e';
        }

        }
        else{
            $("#gameover_screen").show();
        }

        if(width_tidur >0){
        width_tidur = width_tidur - 1;
        tidur.style.width = width_tidur + "%";
        if(width_tidur < 20){
            tidur.style.backgroundColor = 'red';
        }
        else{
            tidur.style.backgroundColor = '#01a10e';
        }
        }
        if(width_bermain >0){
        width_bermain = width_bermain - 1;
        bermain.style.width = width_bermain + "%";
        if(width_bermain < 20){
            bermain.style.backgroundColor = 'red';
        }
        else{
            bermain.style.backgroundColor = '#01a10e';
        }
        }
        if(width_belajar >0){
        width_belajar = width_belajar - 1;
        belajar.style.width = width_belajar + "%";
        if(width_belajar < 20){
            belajar.style.backgroundColor = 'red';
        }
        else{
            belajar.style.backgroundColor = '#01a10e';
        }
        }
      }
    }


// tombol tambah stat makan, dll
  function tambah_makan(){
      for(var i = 0; i < 20 ; i++){
     
      if(width_makan > 100){
          return;
      }
      show_gif(1);
      width_makan = width_makan +1;
      setTimeout(gif_hid,2000);
    }
}

function tambah_belajar(){
    for(var i = 0; i < 20 ; i++){
    if(width_belajar > 100){
        return;
    }
    show_gif(3);
    width_belajar = width_belajar +1;
    setTimeout(gif_hid,2000);
  }
}


function tambah_tidur(){
    for(var i = 0; i < 20 ; i++){
    if(width_tidur > 100){
        return;
    }
    show_gif(2);
    width_tidur = width_tidur +1;
    setTimeout(gif_hid,2000);
  }
}


function tambah_bermain(){
    for(var i = 0; i < 20 ; i++){
    if(width_bermain > 100){
        return;
    }
    show_gif(4);
    width_bermain = width_bermain +1;
    setTimeout(gif_hid,2000);
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



//change costume

//search outfit file
function search_gantungan(i){
    url = 'asset/costume/'+ i + "/gantungan.png"
    return url;
}
function search_acc(i){
        url = 'asset/costume/'+ i + "/accessories.png"
    return url;
}
function search_body(i){
        url = 'asset/costume/'+ i + "/body.png"
    return url;
}
function search_left(i){
        url = 'asset/costume/'+ i + "/hand-left.png"
    return url;
}
function search_right(i){
        url = 'asset/costume/'+ i + "/hand-right.png"
    return url;
}
function search_foot(i){
        url = 'asset/costume/'+ i + "/foot.png"
    return url;
}

function check_file_outfit(){
    for(i = 0;i <5; i++){
    var z = $("#change_costum_row");
    var a = $(document.createElement('div'));
    $(a).attr('class','change_costum col-2');
    var b = $(document.createElement('img')); 
    $(b).attr('src',search_gantungan(i+1));
    $(b).attr('class','change_outfit');
    $(a).append(b);
    $(z).append(a);
}
}
check_file_outfit();


$(".change_outfit").click(function(){
    var index = $(this).parent().index();
    document.getElementById('accessories').src = search_acc(index+1);
    document.getElementById('body').src = search_body(index+1);
    document.getElementById('hand-left').src = search_left(index+1);
    document.getElementById('hand-right').src = search_right(index+1);
    document.getElementById('foot').src = search_foot(index+1);
});


//pop up
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

// achievements
document.getElementById('achievements').style.display = 'none';

function calculate(){
    caltidur = width_tidur;
    return caltidur;
}

calculate();

function achievements(){
    background = document.getElementById('achievements');
    background.style.display = 'block'; 
    document.getElementById('user-name').innerHTML = ('Hello ') + username;
    document.getElementById('makan_status').innerHTML = parseInt(width_makan) + '%';
    document.getElementById('tidur_status').innerHTML = parseInt(calculate()) +'%';
    document.getElementById('bermain_status').innerHTML = parseInt(width_bermain) + '%';
    document.getElementById('belajar_status').innerHTML = parseInt(width_belajar) + '%';



} 
 function closeachievements(){
     document.getElementById('achievements').style.display = 'none';
 }