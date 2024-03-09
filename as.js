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
