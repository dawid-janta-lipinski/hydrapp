console.log("hello world");
const counter = document.querySelector('.counter__js');
const buttonAdd = document.querySelector('.add__js');
const buttonDelete = document.querySelector('.delete__js');

let currentGlassCounter = 0;

buttonAdd.addEventListener('click', () => {
    currentGlassCounter++;
    counter.innerHTML = currentGlassCounter;
});

buttonDelete.addEventListener('click', () => {
    currentGlassCounter--;
    if (currentGlassCounter < 0) {
        currentGlassCounter = 0;
    }
    counter.innerHTML = currentGlassCounter;
});
