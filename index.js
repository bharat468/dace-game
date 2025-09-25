let wrapper = document.querySelector("#wrapper")

let main = document.querySelector("#main")

let Play = document.querySelector(".Play")

let Reset = document.querySelector(".Reset")

let hide = document.querySelector(".hide-Rules")

let show = document.querySelector(".Show-Rules")

let hidebox = document.querySelector(".hidebox")


Play.addEventListener("click", () => {
    wrapper.remove()
    main.style.display = "block"
})

let score = document.querySelector("#score")
let one = document.querySelectorAll(".one")
let alertbox = document.querySelector(".alert")
let imagebox = document.querySelector(".imagebox")

let image = [
    "./image/dice_1.png",
    "./image/dice_2.png",
    "./image/dice_3.png",
    "./image/dice_4.png",
    "./image/dice_5.png",
    "./image/dice_6.png",

]

let diceimage = document.querySelector(".diceimage")
if (diceimage){
    diceimage.src = image[0]
}

let newarrey = ""

one.forEach((num) => {
    num.addEventListener("click", () => {
         newarrey = num.innerHTML
         alertbox.style.display = "none"    
        console.log(newarrey);
    })
})

imagebox.addEventListener("click", () => {


    if(newarrey === ""){
        alertbox.style.display = "block";
        return;

    }
    else{

    let random = Math.floor(Math.random() * 6) + 1
    imagebox.innerHTML = `<img src="${image[random - 1]}" alt="">`

          
        if (Number(newarrey) === random) {
           score.innerHTML = Number(score.innerHTML) + 10;
        }
        else {
           score.innerHTML = Number(score.innerHTML) - 5;
    }

}
newarrey=""
})


Reset.addEventListener("click", ()=>{
    score.innerHTML = 0;
    diceimage.src = image[0]
    newarrey = ""
    alertbox.style.display = "none"
})


show.addEventListener("click", ()=>{
    show.style.display = "none"
    hide.style.display = "block"
    hidebox.style.display = "block"


})

hide.addEventListener("click", ()=>{
    hidebox.style.display = "none"
    hide.style.display = "none"
    show.style.display = "block"

    
})









