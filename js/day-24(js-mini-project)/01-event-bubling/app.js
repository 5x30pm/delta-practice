let div = document.querySelector('div');
let ul = document.querySelector("ul");
let li = document.querySelector("li");

div.addEventListener("click", function (event) {
    console.log("Div was Clicked!");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Ul was clicked!");
});

li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Li Was clicked!");
});