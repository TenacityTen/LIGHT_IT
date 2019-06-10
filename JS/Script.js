// --------------------------------------------Script.js--------------------------------------------

    // color rotation
    $('.BLOCK:even').css('background-color', '#ADD8E6');

   // close all
    function Close_all(){
        for (var j = 0; j < 10; j++){
            document.getElementById(`box${j}`).style.display = "none";
            document.getElementById(`Button${j}`).src = "img/plus.png";
        }
    }

    // Open BLOCK_BOX
    function openbox(box,i){
        display = document.getElementById(box).style.display;

        Close_all();

        // open box
        if(display == "none"){
            document.getElementById(box).style.display = "block";
            document.getElementById(`Button${i}`).src = "img/minus.png";
        }else{
            document.getElementById(box).style.display = "none";
            document.getElementById(`Button${i}`).src = "img/plus.png";
        }
    }

    // Search
    function Search(){
        var sear = document.getElementById("input").value;

        if(sear == '')innerAJAX('The+Beatles');

        sear.replace(/ /g,'+');
        innerAJAX(sear);
    }

    // get milSec in min:sec
    function getTime(milSec){
        var min = Math.floor(milSec/1000/60);

        var secInMil = milSec - min*1000*60;

        var sec = Math.round(secInMil/1000);

        if(sec<10) sec = '0' + sec;

        return min + ':' + sec;
    }