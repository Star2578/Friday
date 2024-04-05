var footer = document.getElementsByTagName("footer")[0];
var tab = document.getElementById("tab");

const responsiveUpdate = ()=>{
    let width = window.innerWidth;
    if(width < 640){ 
        footer.style.display="block";
        tab.style.display="none";
    }
    else{
        footer.style.display="none";
        tab.style.display="block";
    }
}

window.onresize = function (){
    responsiveUpdate();
}
responsiveUpdate();