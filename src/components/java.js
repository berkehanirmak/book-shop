const header =document.querySelector("header");
window.addEventListener("scrool",function(){
    header.classList.toggle("sticky",this.window.scroolY>0);
})