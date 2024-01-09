// Setup

console.log("Creador: \n    Discord: FOKA Civil Engineer#7641 \n    Server: https://discord.gg/5r8HNREBzw");
console.error("¿Por qué estás en la consola?")

// KeyPress

const screen = document.getElementById('display')

addEventListener("keypress",(e)=>{
    if (e.key == "1"){
        screen.value += "1"
      }else if (e.key == "2"){
        screen.value += "2"
      }else if (e.key == "3"){
        screen.value += "3"
      }else if (e.key == "4"){
        screen.value += "4"
      }else if (e.key == "5"){
        screen.value += "5"
      }else if (e.key == "6"){
        screen.value += "6"
      }else if (e.key == "7"){
        screen.value += "7"
      }else if (e.key == "8"){
        screen.value += "8"
      }else if (e.key == "9"){
        screen.value += "9"
      }else if (e.key == "0"){
        screen.value += "0"
      }else if (e.key == "+"){
        screen.value += "+"
      }else if (e.key == "-"){
        screen.value += "-"
      }else if (e.key == "*"){
        screen.value += "*"
      }else if (e.key == "/"){
        screen.value += "/"
      }else if (e.key == "^"){
        screen.value += "*"
      }else if (e.key == "("){
        screen.value += "("
      }else if (e.key == ")"){
        screen.value += ")"
      }else if (e.key == "."){
        screen.value += "."
      }else if (e.key == "=" || e.key == "Enter"){
        screen.value = eval(document.getElementById('display').value);
      }else if (e.key.toLowerCase() == "c"){
        screen.value = ""
      }else if (e.key.toLowerCase() == "r"){
        screen.value += Math.random()
      }
})