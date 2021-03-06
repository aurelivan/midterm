//for all page

//background audio

var musick = new Audio('asset/Audio/Backsound/Sapphire Lotus.mp3');
musick.loop = true;

function mulaiMusick()
{
    var play=document.getElementById("mulai");
    var volumeslider=document.getElementById('volumeslider');

    play.addEventListener('click', fplay);
    volumeslider.addEventListener('mousemove', setvolume);

    function setvolume()
    {
        musick.volume=volumeslider.value / 100 
    }


    function fplay()
    {
        if(musick.paused)
        {
            musick.play();
            $("#speaker").attr("src", "asset/icon/sound_unmute.png");
            /*play.style.background="url (asset/icon/pause.png)";*/
        }else{
            musick.pause();
            $("#speaker").attr("src", "asset/icon/mute_speaker.png");
        }
    }
}

window.addEventListener('load', mulaiMusick); 

//clicking noises

const audio2 = new Audio();
audio2.src = "asset/Audio/click/click.mp3";

//rgb function
function rgb(r, g, b, o){
    return "rgb("+r+","+g+","+b+","+o+")";
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Page 1

//credit list

$("#background_credit").hide();

$("#open_credit").click(function(){
    $("#background_credit").show();
});
$("#close_credit").click(function(){
    $("#background_credit").hide();
});

//guide
$("#background_guide").hide();

$("#open_guide").click(function(){
    $("#background_guide").show();
});
$("#close_guide").click(function(){
    $("#background_guide").hide();
});

//gameover screen
$("#gameover_screen").hide();
function gameover() {
    $("#gameover_screen").show();
    if (z == 1) {
        $("#gameover_gif").attr("src", "asset/gif/boy/gameover.gif");
    }
    else {
        $("#gameover_gif").attr("src", "asset/gif/girl/gameover.gif");
    }
    $("#background_info").hide();
    $("#background_confirmation").hide();
}

//get username
function input_username(){
    document.getElementById('greetings').insertAdjacentText('beforeend', username);
}

//Algorithm for change gender
var z = 1;
function displayX() { //cowo
    z = 1;
    clicked();
}

function displayY() { //cewe
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
        document.getElementById('eat_char').src = 'asset/character/eat/boy/1.gif'
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
        document.getElementById('eat_char').src = 'asset/character/eat/girl/1.gif'
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
    change_makan_ava()//change gender for mini games makan
    chooseChara();//function for gender
    $("#greetings").text(username);//display user name at greetings
    document.getElementById("Page2_1").scrollIntoView({behavior: 'auto'});//jump to page 2
    musick.play();//play backsound music 
    $(document).ready(function($) {
        setTimeout(function() {
        $("#loading_screen").hide(1000);
        }, 1500);
    });
    chooseChara();
    input_username();
    
    $("#Page2_1").show();
    $("#Page1").hide();
    move();
});

//Page 2


//Algoritm for time
var d,h,m,s,animate;

var deadline;
var alert_count;

function init(){
    deadline = 0;
    dropout = 0;
    alert_count = 0;
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
        deadline++;
        if(m==24){
            m=0;
        }
        $("#semester_title").text("Semester " + sem);
        if (alert_count >= 3) {
            dropout++;
        }
        if (dropout >= 1 && alert_count >= 3) {
            gameover();
            $("#background_warning").hide();
        }
        if (deadline >= 2) {
            $("#background_warning").show();
            $("#what").text ("You need to study -_-")
            if (z == 1) {
                $("#gif_warning").attr("src", "asset/gif/boy/shocked.png");
            }
            else {
                $("#gif_warning").attr("src", "asset/gif/girl/shocked.png");
            }
            $("#lesgo").text("Let's Study");
            $("#lesgo").click(function() {
                tambah_belajar();
                $("#background_warning").hide();
            });
            alert_count++;
            deadline = 1;
        }
    }
    $('min',s);
    $('hr',m);
    greetings(m);
    change_back(m)
    clock2(m,s);
    animate=setTimeout(clock,1000); //nanti balikin jadi 1000
};

//function for play / start button
$("#start").click(function(){
    init();
    gif_gender();
    $("#loading_screen").show();
    chooseChara();//function for gender
    $("#greetings").text(username);//display user name at greetings
    document.getElementById("Page2_1").scrollIntoView({behavior: 'auto'});//jump to page 2
    audio.play();//play backsound music 
    $(document).ready(function($) {
        setTimeout(function() {
        $("#loading_screen").hide(1000);
        }, 1500);
    });
    chooseChara();
    input_username();
    
    $("#Page2_1").show();
    $("#Page1").hide();
    move();
});

//Page 2

//info/menu pop up
$("#background_info").hide();

$("#open_info").click(function(){
    $("#background_info").show();
});
$("#close_info").click(function(){
    $("#background_info").hide();
});

//reset game confirmation pop up
$("#background_confirmation").hide();

$("#open_confirmation").click(function(){
    $("#background_confirmation").show();
    $("#background_info").hide();
});
$("#close_confirmation").click(function(){
    $("#background_confirmation").hide();
});

//greetings
greetings(m);
function greetings(){
    username = document.getElementById('username').value;
    if(m >= 06 && m<=11){
        document.getElementById("greetings").innerHTML = '<h1>Morning,<br />' +username + '</h1>';
    }
    if(m >= 12 && m<=18){
        document.getElementById("greetings").innerHTML = '<h1>Afternoon,<br />' +username + '</h21';
    }
    if(m >= 19 && m<=23){
        document.getElementById("greetings").innerHTML = '<h1>Evening,<br />' +username + '</h1>';
    }
    if(m >= 00 && m<=05){
        document.getElementById("greetings").innerHTML = '<h1>Night,<br />' +username + '</h1>';
        
    }
}

//change background
change_back(m)
function change_back(){
    username = document.getElementById('username').value;
    if(m >= 00){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/malam.png)'
        },1000);
    }
    if(m >= 08 && m<12){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/pagi.png)'
        },4000);
    }
    if(m >= 12 && m<=15){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/siang.png)'
        },4000);
    }
    if(m >= 16 && m<=19){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/sore.png)'
        },1000);
    }
    if(m >= 18){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/malam.png)'
        },5000);
    }

}



//Algortm for gif

function gif_gender()
{
    if (z == 1)
    {
        document.getElementById('play_gif').src='asset/gif/boy/play.gif';
        document.getElementById('study_gif').src='asset/gif/boy/study.gif';
        document.getElementById('sleep_gif').src='asset/gif/boy/sleep.gif';
    }
    else if (z == 0)
    {
        document.getElementById('play_gif').src='asset/gif/girl/play.gif';
        document.getElementById('eat_gif').src='asset/gif/girl/eat.gif';
        document.getElementById('study_gif').src='asset/gif/girl/study.gif';
        document.getElementById('sleep_gif').src='asset/gif/girl/sleep.gif';
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


//linear gradation
function gradation(i){
   var text = "linear-gradient(0deg, rgb(0, 248, 95)" + i +"%, transparent 0)"
   return text;
}

function grad_color(i){
    var text = "linear-gradient(0deg, rgb(252, 29, 0)" + i +"%, transparent 0)"
    return text;
 }

//Algorithm for status bar
var width_makan = 50;
var width_tidur = 50;
var width_belajar = 1;
var width_bermain = 50;
var sem = 0;

$("#background_warning").hide();

function move() {
    var makan = document.getElementById("proggress_bar1");
    var makan2 = document.getElementById("bar_eat_fill");
    var tidur = document.getElementById("proggress_bar2");
    var bermain = document.getElementById("proggress_bar3");
    var belajar = document.getElementById("bar_study_fill");
    var id = setInterval(frame, 1000);
    makan.style.transition = 'all 1s';
    makan2.style.transition = 'all 1s';
    tidur.style.transition = 'all 1s';
    bermain.style.transition = 'all 1s';
    belajar.style.transition = 'all 1s';

    function frame() {
        if(width_makan >0){
            width_makan = width_makan - 0.3;
            makan.style.backgroundImage = gradation(width_makan);
            makan2.style.width = width_makan + "%";
            if(width_makan >70){
                document.getElementById("stat_img3").src = 'asset/stat/lambung1.png';
            }
            if(width_makan <= 70 && width_makan >30){
                document.getElementById("stat_img3").src = 'asset/stat/lambung2.png';
            }
            else if (width_makan <= 30) {
                document.getElementById("stat_img3").src = 'asset/stat/lambung3.png';
                makan.style.backgroundImage = grad_color(width_makan);
                $(document).ready(function($) {
                    $("#background_warning").show();
                    if (z == 1) {
                        $("#gif_warning").attr("src", "asset/gif/boy/hungry.gif");
                    }
                    else {
                        $("#gif_warning").attr("src", "asset/gif/girl/hungry.gif");
                    }
                    $("#what").text ("You are straving ...")
                    $("#lesgo").text("Let's Eat");
                    $("#lesgo").click(function() {
                        $("#background_warning").hide();
                        $('#makan_page').show();
                        $('#makan_background').show();
                    });
                });
            }
        }
        else{
            gameover();
            $("#background_warning").hide();
        }
        if(width_tidur >0){
            width_tidur = width_tidur - 0.3;
            tidur.style.backgroundImage = gradation(width_tidur);
            if(width_tidur >80){
                document.getElementById("stat_img2").src = 'asset/stat/sleep1.png';
            }
            if(width_tidur < 80 && width_tidur >60){
                document.getElementById("stat_img2").src = 'asset/stat/sleep2.png';
            }
            else if(width_tidur < 60 && width_tidur >40){
                document.getElementById("stat_img2").src = 'asset/stat/sleep3.png';
            }
            else if(width_tidur < 20){
                document.getElementById("stat_img2").src = 'asset/stat/sleep4.png';
                tidur.style.backgroundImage = grad_color(width_tidur);
                
                $(document).ready(function($) {
                    if (z == 1) {
                        $("#gif_warning").attr("src", "asset/gif/boy/sleepy.gif");
                    }
                    else {
                        $("#gif_warning").attr("src", "asset/gif/girl/sleepy.gif");
                    }
                    $("#what").text ("You are sleepy ...")
                    $("#lesgo").text("Let's Sleep!");
                    $("#lesgo").click(function() {
                        tambah_tidur();
                        $("#background_warning").hide();
                    });
                    $("#background_warning").show();
                }); 
            }
        }
        else {
            gameover();
            $("#background_warning").hide();
        }

        if(width_bermain >0){
            width_bermain = width_bermain - 0.3;
            bermain.style.backgroundImage = gradation(width_bermain);
            if(width_bermain >80){
                document.getElementById("stat_img1").src = 'asset/stat/fun_1.png';
            }
            if(width_bermain < 80 && width_bermain >60){
                document.getElementById("stat_img1").src = 'asset/stat/fun_2.png';
            }
            else if(width_bermain < 60 && width_bermain >40){
                document.getElementById("stat_img1").src = 'asset/stat/fun_3.png';
            }
            else if(width_bermain < 20){
                document.getElementById("stat_img1").src = 'asset/stat/fun_4.png';
                bermain.style.backgroundImage = grad_color(width_bermain);
                
                $(document).ready(function($) {
                    if (z == 1) {
                        $("#gif_warning").attr("src", "asset/gif/boy/bored.gif");
                    }
                    else {
                        $("#gif_warning").attr("src", "asset/gif/girl/bored.gif");
                    }
                    $("#what").text ("You are bored ...")
                    $("#lesgo").text("Let's Have Some Fun!");
                    $("#lesgo").click(function() {
                        $("#background_warning").hide();
                        tambah_main();
                        
                    });
                    $("#background_warning").show();
                }); 
            }
        }
        belajar.style.width = width_belajar + "%";
    }
}

//close warning pop-up & hide pas awal 
//$("#background_warning").hide(); -> kyknya ga perlu

$("#close_warning").click(function(){
    $("#background_warning").hide();
});

//fungsi tambah
function tambah_makan() {
    $("#background_warning").hide();
    $("#makan_background").show();
    $("#makan_page").show();
}

function tambah_tidur() {
    if ( $("#gif_col2").css('display') == 'none' || $("#gif_col2").css("visibility") == "hidden"){
        $("#background_warning").hide();
        $("#makan_background").hide();
        $("#sleep_gif").show();
        $("#gif_col2").show();
    }
    $(document).ready(function($) {
        setTimeout(function() {
        $("#sleep_gif").hide();
        $("#gif_col2").hide();
        }, 1500);
    });
    for(var i = 0; i < 20 ; i++){
    
        if(width_tidur > 100){
            return;
        }
        width_tidur += 5;
        if (width_bermain > 0) {
            width_bermain -= 0.2;
        }
    }
}

function tambah_main() {
    if ( $("#gif_col4").css('display') == 'none' || $("#gif_col4").css("visibility") == "hidden"){
        $("#background_warning").hide();
        $("#makan_background").hide();
        $("#gif_col4").show();
        $("#play_gif").show();
    }
    $(document).ready(function($) {
        setTimeout(function() {
        $("#gif_col4").hide();
        $("#play_gif").hide();
        }, 1500);
    });
    for(var i = 0; i < 20 ; i++){     
        if(width_bermain > 100){
            return;
        }
        width_bermain += 1;
        if (width_tidur > 0) {
            width_tidur -= 0.2;
        }
    }
}

var study = 0;
function tambah_belajar() {
    deadline = 0;
    study += 1;
    if ( $("#gif_col3").css('display') == 'none' || $("#gif_col3").css("visibility") == "hidden"){
        $("#background_warning").hide();
        $("#makan_background").hide();
        $("#gif_col3").show();
        $("#study_gif").show();
    }
    $(document).ready(function($) {
        setTimeout(function() {
            $("#study_gif").hide();
            $("#gif_col3").hide();
            
        }, 1500);

        if (study == 1) {
            sem = 1;
            if (z == 1) {
                $("#gif_congrats").attr("src", "asset/gif/boy/congrats.gif");
                }
            else {
                $("#gif_congrats").attr("src", "asset/gif/girl/congrats.gif");
            }
            $("#background_congrats").show();
            $("#congrats_name").text("Welcome to college, " + username );
            $("#naik_sem").html("<h4>You have started your 1st semester</h4>");
            
        }
    });

    if (width_makan > 0) {
        width_makan -= 0.2;
    }

    for(var i = 0; i < 20 ; i++){
        if(width_belajar > 100){
            width_belajar = 99;
            return;
        }

        if (sem > 9) {
            return;
        }

        if (width_belajar >= 99) {
            sem += 1;
            width_belajar = 0;
            $(document).ready(function($) {
                if (z == 1) {
                    $("#gif_congrats").attr("src", "asset/gif/boy/congrats.gif");
                }
                else {
                    $("#gif_congrats").attr("src", "asset/gif/girl/congrats.gif");
                }
                $("#background_congrats").show();
                $("#congrats_name").text("Congrats, " + username + " !!");
            });  
        };
        
        if (sem == 1) {
            width_belajar += 1.2;
        }
        else if (sem == 2) {
            width_belajar += 1;
            $("#naik_sem").html("<h4>You have reached the 2nd semester</h4>");
        }
        else if (sem == 3) {
            width_belajar += 0.9;
            $("#naik_sem").html("<h4>You have reached the 3rd semester</h4>");
        }
        else if (sem == 4) {
            width_belajar += 0.8;
            $("#naik_sem").html("<h4>You have reached the 4th semester</h4>");
        }
        else if (sem == 5) {
            width_belajar += 0.7;
            $("#naik_sem").html("<h4>You have reached the 5th semester</h4>");
        }
        else if (sem == 6) {
            width_belajar += 0.6;
            $("#naik_sem").html("<h4>You have reached the 6th semester</h4>");
        }
        else if (sem == 7) {
            width_belajar += 0.5;
            $("#naik_sem").html("<h4>You have reached the 7th semester</h4>");
        }
        else if (sem == 8) {
            width_belajar += 0.4;
            $("#naik_sem").html("<h4>You have reached the last semester</h4>");
        }

        else if (sem == 9) {
            width_belajar = 100;
            $("#naik_sem").html("<h4>You graduated !!</h4>");
        }
    }
}

// tombol tambah stat makan, dll
$("#tambahMakan").click(function(){
    tambah_makan();
});

$("#tambahTidur").click(function(){
    tambah_tidur();
});

$("#tambahBermain").click(function(){
    tambah_main();
});

$("#tambahBelajar").click(function(){
    tambah_belajar();
});

//congrats pop-up
$("#background_congrats").hide();

$("#close_congrats").click(function(){
    $("#background_congrats").hide();
});

stat_tooltip();
function stat_tooltip() {
    $("#proggress_bar1").attr("title", "Eat : " + parseInt(width_makan) + "%");
    $("#proggress_bar2").attr("title", "Sleep : " + parseInt(width_tidur) + "%");
    $("#proggress_bar3").attr("title", "Fun : " + parseInt(width_bermain) + "%");
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
    for(i = 0; i <5; i++){
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

$("#background_wardrobe").hide();

$("#open_wardrobe").click(function(){
    $("#background_wardrobe").show();
});

$("#close_wardrobe").click(function() {
    $("#background_wardrobe").hide();
});


$(".change_outfit").click(function(){
    $("#background_wardrobe").hide();

    var index = $(this).parent().index();
    document.getElementById('accessories').src = search_acc(index+1);
    document.getElementById('body').src = search_body(index+1);
    document.getElementById('hand-left').src = search_left(index+1);
    document.getElementById('hand-right').src = search_right(index+1);
    document.getElementById('foot').src = search_foot(index+1);
});

//achievements

function achievements() {
    $("#user-name").text("Your Gameplay")
    if (sem == 0) {
        $("#sem").text("You aren't in college yet");
    }
    else if (sem > 0) {
        $("#sem").text("Semester " + sem);
        $("#semester_title").text("Semester " + sem);
    }
    else if (sem > 8) {
        $("#sem").text("You have graduated from college");
    }
    $("#makan_status").text("Makan : " + parseInt(width_makan) + "%");
    $("#tidur_status").text("Tidur : " + parseInt(width_tidur) + "%");
    $("#bermain_status").text("Bermain : " + parseInt(width_bermain) + "%");
    $("#belajar_status").text("Belajar : " + parseInt(width_belajar) + "%");
}

$("#background_trophy").hide();

$("#open_trophy").click(function(){
    $("#background_trophy").show();
    achievements();
});

$("#close_trophy").click(function(){
    $("#background_trophy").hide();
}); $("#awards").show();


//pause menu
$("#pause_screen").hide();
$("#open_pause").click(function(){
    $("#pause_screen").show();
});
$("#close_pause").click(function(){
    $("#pause_screen").hide();
});



//eat menu (testing)
$('#close_makan').click(function(){
    $('#makan_background').hide();
    $("#makan_page").hide();
});


var makan1,makan2, makan3;
function change_makan_ava(){
    if(z == 1){
    makan1 =  document.getElementById('eat_char').src = 'asset/character/eat/boy/1.gif';
    makan2 =  document.getElementById('eat_char').src = 'asset/character/eat/boy/2.gif';   
    makan3 =  document.getElementById('eat_char').src = 'asset/character/eat/boy/3.gif'; 
    makan4 =  document.getElementById('eat_char').src = 'asset/character/eat/boy/4.gif';   
    }
    else{
    makan1 =  document.getElementById('eat_char').src = 'asset/character/eat/girl/1.gif';
    makan2 =  document.getElementById('eat_char').src = 'asset/character/eat/girl/2.gif';   
    makan3 =  document.getElementById('eat_char').src = 'asset/character/eat/girl/3.gif'; 
    makan4 =  document.getElementById('eat_char').src = 'asset/character/eat/girl/4.gif';
    }
}

$( function drag_drop() {
    $( ".drag" ).draggable({  
        helper: "clone",
        cursor: "move",
        appendTo: '#makan_background',
        drag: function(){
            document.getElementById('eat_char').src = makan2; 
        },
     });
    $("#drag").mouseup(function(){
        document.getElementById('eat_char').src = makan1;
    });
    $( "#drop" ).droppable(
        {
        drop :function()
        {            
            if(width_makan <90){
                document.getElementById('eat_char').src = makan3;
            }
            else{
                document.getElementById('eat_char').src = makan4;
            }
            
            $(document).ready(function($) {
                setTimeout(function() {
            document.getElementById('eat_char').src = makan1;
                }, 1500);
        });
            for(var i = 0; i < 20 ; i++){
                if(width_makan > 100){
                    return;
                }
                width_makan = width_makan +1;
                if (width_tidur > 0) {
                    width_tidur -= 0.2;
                }
            }

        },
        });
        });


 
        
        // mouse leaving the container stops dragging

