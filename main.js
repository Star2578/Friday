var footer = document.getElementsByTagName("footer")[0];

window.onresize = function (){
    let width = window.innerWidth;
    if(width < 640){ footer.style.display="block"}
    else{ footer.style.display="none"}
}