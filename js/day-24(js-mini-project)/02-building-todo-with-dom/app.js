let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener("click", function (event) {
    let task = document.createElement('li');
    task.innerText = input.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delte');

    // add in main page
    ul.appendChild(task);
    task.appendChild(delBtn);

    //reset the value
    input.value = '';
});


// code for delete items 
let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns) {
    delBtn.addEventListener('click', function () {
        let par = this.parentElement;
        par.remove();
        console.log('Task Deleted');
    });
};

