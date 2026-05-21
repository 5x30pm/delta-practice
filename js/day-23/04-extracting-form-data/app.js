let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form Submitted");

    let user = document.querySelector('#user');
    let pass = document.querySelector('#pass');

    console.log("user = ", user.value);
    console.log("pass = ", pass.value);

    alert(`Hi ${user.value}, Your passwd is ${pass.value}.`)

});