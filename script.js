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
