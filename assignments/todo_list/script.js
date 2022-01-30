var input = document.querySelector('input');
var button_text = document.querySelector('button');
var todosDiv = document.querySelector('div.todos');
let count = 0;
button_text.addEventListener('click', function() {
    console.log(input.value);
    if (input.value) {
        var parag = document.createElement('p');
        parag.innerHTML = input.value;
        parag.setAttribute('key', count++);
        todosDiv.appendChild(parag);
        parag.addEventListener('click', function(e) {

            todosDiv.removeChild(e.target);
        })
        input.value = "";

    }
})