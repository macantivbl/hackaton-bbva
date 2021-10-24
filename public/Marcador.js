var caja = document.getElementsByClassName("box");

function removerClase(animacion) {
  var element = document.getElementById("animacion");

  caja.classList.remove("animacion");
}

function agregarClase(animacion) {
  var element = document.getElementById("animacion");

  caja.classList.add("animacion");
}
/*
const estadoBtn = cambioDeNivel;

function activarAnimacion1()
{
    validarAnimacion1(estadoBtn);
}

function validarAnimacion1(band)
{
    if(band) {removerClase("bounce-7")}
    else    {agregarClase("bounce-7")}
    return
}*/

    


const cambioDeNivel = ()=>
{
    document.getElementById("anim1").style.background = "#D4EDFC";
    document.getElementById("anim2").style.background = "#5BBEFF";
    document.getElementById("anim3").style.background = "#49A5E6";
    document.getElementById("anim4").style.background = "#1973B8";
    document.getElementById("anim5").style.background = "#1464A5";
    document.getElementById("anim6").style.background = "#043263";

     document.getElementById("barraProg").style.background = "#5BBEFF";
     document.getElementById("barraProg2").style.background = "#5BBEFF";
     document.getElementById("barraProg3").style.background = "#5BBEFF";

    changePhoto(0);

    document.getElementById("med3").style.visibility = "visible";
    document.getElementById("med4").style.visibility = "visible";
    document.getElementById("med5").style.visibility = "visible";
    document.getElementById("med6").style.visibility = "visible";
   
    agregarClase("bounce-8");
    setTimeout(agregarClase("bounce-8"),800);
}

const cambioDeNivel2 = ()=>
{
    document.getElementById("anim1").style.background = "#b2e6e9";
    document.getElementById("anim2").style.background = "#2dcccd";
    document.getElementById("anim3").style.background = "#21c1c2 ";
    document.getElementById("anim4").style.background = "#00B0B9";
    document.getElementById("anim5").style.background = "#02a5a5";
    document.getElementById("anim6").style.background = "#028484";

    document.getElementById("barraProg").style.background = "#2dcccd";
    document.getElementById("barraProg2").style.background = "#2dcccd";
    document.getElementById("barraProg3").style.background = "#2dcccd";

    changePhoto(1);
    document.getElementById("med3").style.visibility = "visible";
    document.getElementById("med4").style.visibility = "visible";
    document.getElementById("med5").style.visibility = "visible";
    document.getElementById("med6").style.visibility = "visible";
}

const cambioDeNivel3 = ()=>
{

    document.getElementById("anim1").style.background = "#FDE7D8";
    document.getElementById("anim2").style.background = "#FAB27F";
    document.getElementById("anim3").style.background = "#F7893B ";
    document.getElementById("anim4").style.background = "#D8732C";
    document.getElementById("anim5").style.background = "#d56414";
    document.getElementById("anim6").style.background = "#C65302";

    document.getElementById("barraProg").style.background = "#F7893B";
     document.getElementById("barraProg2").style.background = "#F7893B";
     document.getElementById("barraProg3").style.background = "#F7893B";

    changePhoto(2);

    document.getElementById("med3").style.visibility = "hidden";
    document.getElementById("med4").style.visibility = "hidden";
    document.getElementById("med5").style.visibility = "hidden";
    document.getElementById("med6").style.visibility = "hidden";
}

