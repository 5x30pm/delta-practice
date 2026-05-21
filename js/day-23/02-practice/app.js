let input = document.querySelector('input');

// for keydown property
// input.addEventListener("keydown", function (event) {
//     console.log('Key-pressed');
// });


// for key up property 
// input.addEventListener("keyup", function (event) {
//     console.log('Key is released');
// });


// for code and key 
input.addEventListener("keydown", function (event) {
    console.log('key = ', event.key);
    console.log("code = ", event.code);
    console.log('Key-pressed');
});
