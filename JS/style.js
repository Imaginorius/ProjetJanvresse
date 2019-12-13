
width = true;

function openNav() {
  var lscreen=screen.width;
    if (width){
    document.getElementById("menu").style.width= "40%";
    document.getElementById("menu").style.opacity="0.9";
    document.getElementById("main").style.backgroundColor="rgba(0,0,0,0.9)";
    
    document.getElementById("general").style.marginLeft="50px";

    /*
    document.getElementById("main").style.marginLeft="51%";
    */
    }
    else {
      document.getElementById("menu").style.width="0";

     
     
      document.getElementById("general").style.marginLeft="-150px";



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

let cache2 = document.getElementById("cache2");
let gen = document.getElementById("gen");

function cache(){
  if(getComputedStyle(gen).display != "none"){
      gen.style.display = "none";
  } else {
      gen.style.display = "block";
  }
  };
  cache2.onclick = cache;


function afficher () {
 //document.getElementById("cache").style.display = none;
 document.getElementById('gen').classList.add('perso-anim');
}




