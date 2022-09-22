let starts = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountains3');
let mountain4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let dynamic = document.querySelector(".dynamic");

window.onscroll = function(){
    let value = scrollY;
    starts.style.left = value +'px';
    moon.style.top = value * 4 +'px';
    mountain3.style.top = value * 2 +'px';
    mountain4.style.top = value * 1.5 +'px';
    river.style.top = value +'px';
    boat.style.top = value +'px';
    boat.style.left = value *3 +'px';
    dynamic.style.fontSize = value +'px';
    if(scrollY >= 67){
        dynamic.style.fontSize = 67 +'px';
        dynamic.style.position = 'fixed';
        if(scrollY >= 423){
            dynamic.style.display = 'none';
        }else{
            dynamic.style.display = 'block';
        }
        if(scrollY >= 113){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(to top,#200016,transparent)';
        }
    }
}