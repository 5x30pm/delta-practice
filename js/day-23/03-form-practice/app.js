let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("The form is Submitted.");
    console.log("The form is Submitted.");
});