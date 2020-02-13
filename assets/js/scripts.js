window.onload = function(){            
    document.getElementsByTagName("main")[0].style.width = document.documentElement.offsetWidth - document.getElementById("menu").clientWidth+"px";
};
window.onresize = function(){
    document.getElementsByTagName("main")[0].style.width = document.documentElement.offsetWidth - document.getElementById("menu").clientWidth+"px";
}

