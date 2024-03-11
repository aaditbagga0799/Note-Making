const img = document.querySelector(".btn1");
const sidebar=document.querySelector(".sidebar")
const date=document.querySelector(".dateandtime")
const wish=document.querySelector(".wish")
const logo=document.querySelector(".logo")
const moon=document.querySelector(".moon")
const main = document.querySelector(".main")
const create= document.querySelector(".create")
const drop=document.querySelector(".dropdown")
const username=document.querySelector(".username")
const logout=document.querySelector("#log-out") 


username.textContent=localStorage.getItem("user")

logout.addEventListener("click",()=>{
    localStorage.clear();
})



img.addEventListener("click", () => {   
    main.classList.toggle("main-full")
    sidebar.classList.toggle("close")
});


create.addEventListener("click",(e)=>{
    e.preventDefault();
    drop.classList.toggle("drops").style.display="flex";
})

 function updateClock(){
    var now= new Date();
    var dname=now.getDay(),
        mo=now.getMonth(),
        dnum=now.getDate(),
        yr=now.getFullYear(),
        hou=now.getHours(),
        min=now.getMinutes(),
        sec=now.getSeconds(),
        pe="AM";
        
        if(hou==0){
          hou=12;
        }
        if(hou>12){
          hou=hou-12;
          pe="PM";
  
        }
        Number.prototype.pad=function(digits){
          for(var n= this.toString();n.length<digits;n= 0 + n);
          return n;
        }
        // let e=document.getElementsByClassName('datetime')
        
        var months=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
        var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var ids=["dayname","month","daynum","year","hour","minutes","seconds","period"]; 
        var values=[week[dname],months[mo],dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),pe]
        for(var i=0;i<ids.length;i++)
        document.getElementById(ids[i]).firstChild.nodeValue=values[i];
  }      
  function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
  }




moon.onclick=function(){
    document.body.classList.toggle("change")
    if(document.body.classList.contains("change")){
        moon.src="assets pro/moon.svg"
        logo.src="assets pro/taskopia-high-resolution-logo (2).png"
    } 
    else{
        moon.src="assets pro/sun.svg"
        logo.src="assets pro/taskopia-high-resolution-logo (1).png"
    }
}
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
