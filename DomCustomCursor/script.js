var main = document.querySelector("#main")
var cursr = document.querySelector('.cursor')

main.addEventListener('mousemove',function(details){
        cursr.style.left = details.x +"px"
        cursr.style.top = details.y +"px";
})