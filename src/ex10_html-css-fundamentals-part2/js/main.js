//document.getElementById("").classList.add("active")
//document.getElementById("").classList.remove("active")
var home = document.getElementById("home"),
 what = document.getElementById("what"),
 weDo = document.getElementById("weDo"),
 our = document.getElementById("our"),
 exce = document.getElementById("exce"),
 cont = document.getElementById("cont");
home.classList.add("active");
home.onclick = function(){
    home.classList.add("active");
    what.classList.remove("active");
    weDo.classList.remove("active");
    our.classList.remove("active");
    exce.classList.remove("active");
    cont.classList.remove("active");
};
what.onclick = function(){
    home.classList.remove("active");
    what.classList.add("active");
    weDo.classList.remove("active");
    our.classList.remove("active");
    exce.classList.remove("active");
    cont.classList.remove("active");
};
weDo.onclick = function(){
    home.classList.remove("active");
    what.classList.remove("active");
    weDo.classList.add("active");
    our.classList.remove("active");
    exce.classList.remove("active");
    cont.classList.remove("active");
};
our.onclick = function(){
    home.classList.remove("active");
    what.classList.remove("active");
    weDo.classList.remove("active");
    our.classList.add("active");
    exce.classList.remove("active");
    cont.classList.remove("active");
};
exce.onclick = function(){
    home.classList.remove("active");
    what.classList.remove("active");
    weDo.classList.remove("active");
    our.classList.remove("active");
    exce.classList.add("active");
    cont.classList.remove("active");
};
cont.onclick = function(){
    home.classList.remove("active");
    what.classList.remove("active");
    weDo.classList.remove("active");
    our.classList.remove("active");
    exce.classList.remove("active");
    cont.classList.add("active");
};