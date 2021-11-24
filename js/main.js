// TODO header appear when body translate-y
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        document.getElementById('main').style.paddingTop ="20px";
        document.getElementById('navbar').style.display ="none";
        document.getElementById('navbar').style.position ="fixed";
        setTimeout(function(){ 
        document.getElementById('navbar').style.display =""; ; }, 3000);
    }
    else{
        document.getElementById('main').style.paddingTop ="";
        document.getElementById('navbar').style.display ="";
        document.getElementById('navbar').style.position ="";
    }
}