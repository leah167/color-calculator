const prompt = require('prompt-sync')();

let option = Number(prompt('Enter [1] for color constructing. Enter [2] for color deconstructing: '));



if (option === 1) {
    let color1 = (prompt('First color: '));
    let color2 = (prompt('Second color: '));
    // color construction code
    // if color1 is equal to blue and if color2 is equal to red
    // then print purple
    if ((color1 === "blue" && color2 === "red") || (color1 === "red" && color2 === "blue")) {
      console.log("purple");  
    } else if ((color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")) {
        console.log("orange");
    } else if ((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")) {
        console.log("green");
    } else console.log("error")

} else if (option === 2) {
    let color = (prompt('Color: '))

    if (color === "purple") {
       console.log("red + blue") 
    } else if (color === "orange") {
        console.log("red + yellow")
    } else if (color === "green") {
        console.log("blue + yellow")
    } else console.log("error")
    // color deconstruction code

}