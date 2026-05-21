let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    // random color genrate 
    let randomColor = randColorGen();
    console.log("Random Color Genrated");

    // change heading Value 
    let heading = document.querySelector('h1');
    heading.innerText = randomColor;

    // change background color of div 
    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;

}
);

// function for genrating random color 
function randColorGen (){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}