
width = true;

function openNav() {
  var lscreen=screen.width;
    if (width){
    document.getElementById("menu").style.width= "40%";
    document.getElementById("menu").style.opacity="0.9";
    document.getElementById("main").style.backgroundColor="rgba(0,0,0,0.9)";
    /*
    document.getElementById("main").style.marginLeft="51%";
    */
    }
    else {
      document.getElementById("menu").style.width="0";
      document.getElementById("main").style.backgroundColor="transparent";

      /*
      document.getElementById("main").style.marginLeft="0";
      */
    }
    width=!width;
}

function closeNav() {
    document.getElementById("menu").style.width= "0";
    document.getElementById("main").style.backgroundColor="transparent";

    /*
    document.getElementById("main").style.marginLeft="0";
    */
}

function charload() {
  document.getElementById("loader").style.opacity="1";
}
