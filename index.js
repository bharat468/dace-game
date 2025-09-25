let wrapper = document.querySelector("#wrapper")

let main = document.querySelector("#main")

let Play = document.querySelector(".Play")

let Reset = document.querySelector(".Reset")

Play.addEventListener("click", () => {
    wrapper.remove()
    main.style.display = "block"
})

let score = document.querySelector("#score")
let one = document.querySelectorAll(".one")
let alert = document.querySelector(".alert")
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
        console.log(newarrey);
    })
})

imagebox.addEventListener("click", () => {

    if(newarrey === ""){
        alert.style.display = "block";
        return;

    }

    let random = Math.floor(Math.random() * 6) + 1
    console.log(random);
    imagebox.innerHTML = `<img src="${image[random - 1]}" alt="">`

          
        if (newarrey === random) {
           score.innerHTML = Number(score.innerHTML) + 35;
        }
        else {
           score.innerHTML = Number(score.innerHTML) - 5;
    }
})


Reset.addEventListener("click", ()=>{
    score.innerHTML = 0;
    alert.style.display = "none"
})








