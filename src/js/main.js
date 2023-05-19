console.log("hello world");
const counter = document.querySelector('.counter__js');
const buttonAdd = document.querySelector('.add__js');
const buttonDelete = document.querySelector('.delete__js');
const key = new Date().toLocaleString().slice(0, 10);
let currentGlassCounter = 0;


const localStorageValue = localStorage.getItem(key);

if (localStorageValue){
    currentGlassCounter = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}

counter.innerHTML = currentGlassCounter;


buttonAdd.addEventListener('click', () => {
    currentGlassCounter++;
    counter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
});

buttonDelete.addEventListener('click', () => {
    currentGlassCounter--;
    if (currentGlassCounter < 0) {
        currentGlassCounter = 0;
    }
    counter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
});

