let inp = document.querySelector("input");

// for prevent form to default 
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
});


// code for change event 
inp.addEventListener("change", function (event) {
    console.log("change Recived!");
    console.log(`change is ${this.value}`);
});



//code for input event
inp.addEventListener("input",function(event){
    console.log("input Recived!");
    console.log(`Input is ${inp.value}`);
})
