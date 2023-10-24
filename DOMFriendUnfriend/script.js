var change = document.querySelector("h5");

var addfr = document.querySelector(".add");
var check = 0;

addfr.addEventListener("click",()=>{
    if(check==0){
        change.innerHTML = "Friends";
        change.style.color ="green";
        addfr.innerHTML = "Remove Friend";
        addfr.style.backgroundColor = "red"
        check = 1;
    }
    else{
        change.innerHTML = "Stranger"
        addfr.innerHTML = "Add Friend"
        change.style.color = "red";
        addfr.style.backgroundColor = "green"
        check = 0;
    }

})

