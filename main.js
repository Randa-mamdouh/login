let card = document.querySelector(".container-re");
let register = document.querySelector(".reg");
let login = document.querySelector(".log");
let sign = document.querySelector(".container")

register.addEventListener("click",()=>{
    card.classList.add("active")
   
})
register.addEventListener("click",()=>{
    sing.classList.remove("active")
})

login.addEventListener("click",()=>{
    sign.classList.add("back")
   
})
login.addEventListener("click",()=>{
    card.classList.remove("back")
})