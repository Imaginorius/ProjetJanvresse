
width = true;

function openNav() {
  var lscreen=screen.width;
    if (width){
    document.getElementById("menu").style.width= "50%";
    document.getElementById("menu").style.opacity="0.9";
    document.body.style.backgroundColor="rgba(0,0,0,0.4)";
    document.getElementById("general").style.marginLeft="50px";

    /*
    document.getElementById("main").style.marginLeft="51%";
    */
    }
    else {
      document.getElementById("menu").style.width="0";
      document.body.style.backgroundColor="white";
      document.getElementById("general").style.marginLeft="-150px";


      /*
      document.getElementById("main").style.marginLeft="0";
      */
    }
    width=!width;
}

function closeNav() {
    document.getElementById("menu").style.width= "0";
    document.getElementById("main").style.marginLeft="0";
}

function bouge () {
 // var elem = document.getElementById("drift");
 // document.getElementById("general").style.marginLeft="50px";
}



