//for all page

//background audio

var audio = new Audio('asset/Audio/Backsound/Sapphire Lotus.mp3');
audio.loop = true;

//rgb function
function rgb(r, g, b, o){
    return "rgb("+r+","+g+","+b+","+o+")";
}

//Page 1

//credit list

$("#background_credit").hide();

$("#open_credit").click(function(){
    $("#background_credit").show();
});
$("#close_credit").click(function(){
    $("#background_credit").hide();
});


//setting
$("#background_setting").hide();

$("#open_setting").click(function(){
    $("#background_setting").show();
});
$("#close_setting").click(function(){
    $("#background_setting").hide();
});

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
    animate=setTimeout(clock,1000); //nanti balikin jadi 1000
};

window.onload=init;

//greetings
greetings(m);
function greetings(){
    username = document.getElementById('username').value;
    if(m >= 06 && m<=11){
        document.getElementById("greetings").innerHTML = '<h1>Morning, ' +username + '</h1>';
    }
    if(m >= 12 && m<=18){
        document.getElementById("greetings").innerHTML = '<h1>Afternoon, ' +username + '</h21';
    }
    if(m >= 19 && m<=23){
        document.getElementById("greetings").innerHTML = '<h1>Evening, ' +username + '</h1>';
    }
    if(m >= 00 && m<=05){
        document.getElementById("greetings").innerHTML = '<h1>Night, ' +username + '</h1>';
        
    }
}

//change background
change_back(m)
function change_back(){
    username = document.getElementById('username').value;
    if(m >= 00){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/malam.png)'
        },5000);
    }
    if(m >= 08 && m<=11){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/pagi.png)'
        },5000);
    }
    if(m >= 12 && m<=15){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/siang.png)'
        },5000);
    }
    if(m >= 16 && m<=19){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/sore.png)'
        },5000);
    }
    if(m >= 18){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/malam.png)'
        },5000);
    }

}



//Algortm for gif
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
var sem = 1;

$("#background_warning").hide();

function move() {
    var makan = document.getElementById("proggress_bar1");
    var tidur = document.getElementById("proggress_bar2");
    var bermain = document.getElementById("proggress_bar3");
    var belajar = document.getElementById("proggress_bar4");
    var id = setInterval(frame, 1000);
    makan.style.transition = 'all 1s';
    tidur.style.transition = 'all 1s';
    bermain.style.transition = 'all 1s';
    belajar.style.transition = 'all 1s';

    function frame() {
        if(width_makan >0){
            width_makan = width_makan - 0.8;
            makan.style.backgroundImage = gradation(width_makan);
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
                    $("#gif_warning").attr("src", "asset/gif/boy/hungry.gif");
                    $("#what").text ("You are straving ...")
                    $("#lesgo").text("Let's Eat");
                    $("#lesgo").click(function() {
                        tambah_makan();
                        $("#background_warning").hide();
                    });
                    $("#background_warning").show();
                }); 
                
            }
        }
        /*else{
            $("#gameover_screen").show();
        }*/
        if(width_tidur >0){
            width_tidur = width_tidur - 0.8;
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
                $(document).ready(function($) { //gifnya kea numpuk sama makan :(
                    $("#gif_warning").attr("src", "asset/gif/boy/sleepy.gif");
                    $("#what").text ("You are sleepy ...")
                    $("#lesgo").text("Let's Sleep");
                    $("#lesgo").click(function() {
                        tambah_tidur();
                        $("#background_warning").hide();
                    });
                    $("#background_warning").show();
                }); 
            }
        }

        if(width_bermain >0){
            width_bermain = width_bermain - 0.8;
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
                /*
               alert disini
                */
            }
        }
        if(width_belajar >0){
            belajar.style.width = width_belajar + "%";
        }
    }
}

//close warning pop-up and hide pas awal 
//$("#background_warning").hide(); -> kyknya ga perlu

$("#close_warning").click(function(){
    $("#background_warning").hide();
});

//fungsi tambah
function tambah_makan() {
    $("#gif_col").show();
    $("#eat_gif").show();
    $(document).ready(function($) {
        setTimeout(function() {
        $("#gif_col").hide();
        $("#eat_gif").hide();
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
}

function tambah_tidur() {
    $("#gif_col").show();
    $("#sleep_gif").show();
    $(document).ready(function($) {
        setTimeout(function() {
        $("#gif_col").hide();
        $("#sleep_gif").hide();
        }, 1500);
    });
    for(var i = 0; i < 20 ; i++){
    
        if(width_tidur > 100){
            return;
        }
        width_tidur += 1;
        if (width_bermain > 0) {
            width_bermain -= 0.2;
        }
    }
}

function tambah_main() {
    $("#gif_col").show();
    $("#play_gif").show();
    $(document).ready(function($) {
        setTimeout(function() {
        $("#gif_col").hide();
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

function tambah_belajar() {
    $("#gif_col").show();
    $("#study_gif").show();
    $(document).ready(function($) {
        setTimeout(function() {
            $("#study_gif").hide();
            $("#gif_col").hide();
        }, 1500);
    });

    if (width_makan > 0) {
        width_makan -= 0.2;
    }

    for(var i = 0; i < 20 ; i++){
        if(width_belajar > 100){
            width_belajar = 99;
            return;
        }

        if (width_belajar >= 99) {
            sem += 1;
            width_belajar = 0;
            $(document).ready(function($) {
                $("#background_congrats").show();
            });  
        };
        
        if (sem == 1) {
            width_belajar += 1.2;
        }
        else if (sem == 2) {
            width_belajar += 1;
            $("#naik_sem").html("<h4>Kamu naik ke semester 2</h4>");
        }
        else if (sem == 3) {
            width_belajar += 0.6;
            $("#naik_sem").html("<h4>Kamu naik ke semester 3</h4>");
        }
        else if (sem == 4) {
            width_belajar += 0.4;
            $("#naik_sem").html("<h4>Kamu naik ke semester 4</h4>");
        }
        else if (sem == 5) {
            width_belajar += 0.2;
            $("#naik_sem").html("<h4>Kamu naik ke semester 5</h4>");
        }
        else if (sem == 6) {
            width_belajar += 0.1;
            $("#naik_sem").html("<h4>Kamu naik ke semester 6</h4>");
        }
        else if (sem == 7) {
            width_belajar += 0.08;
            $("#naik_sem").html("<h4>Kamu naik ke semester 7</h4>");
        }
        else if (sem == 8) {
            width_belajar += 0.06;
            $("#naik_sem").html("<h4>Kamu naik ke semester 8</h4>");
        }
        else if (sem == 9) {
            width_belajar = 100;
            $("#naik_sem").html("<h4>Kamu lulus !!</h4>");
        }
    }
    
    /* setelah beberapa saat ga belajar akan ada alert tp blm jalan :)
    $("background_warning").delay(20).show(); //nanti pendekin waktunya buat test
    $("#what").text ("You need to study -_-")
    $("#lesgo").text("Let's Study");
    $("#lesgo").click(function() {
        tambah_belajar();
        $("#background_warning").hide();
    });
    */
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

username = $("#username").val();
$("#congrats_name").text("Congrats, " + username + "!!");


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

//$("#background_wardrobe").hide();

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

$("#user-name").text("Hello, " + username);
$("#sem").text("Semester " + sem);
$("#makan_status").text("Makan : " + width_makan);
$("#tidur_status").text("Tidur : " + width_tidur);
$("#bermain_status").text("Bermain : " + width_bermain);
$("#belajar_status").text("Belajar : " + width_belajar);

$("#background_trophy").hide();

$("#open_trophy").click(function(){
    $("#background_trophy").show();
});

$("#close_trophy").click(function(){
    $("#background_trophy").hide();
}); $("#awards").show();
