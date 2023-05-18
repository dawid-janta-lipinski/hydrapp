const name = "Dawid";
const age = 28;

console.log(`czesc jestem ${name} i mam ${age} lat`);

const emptyParagraph = document.querySelector(".paragraph__js");
emptyParagraph.innerHTML = "text added using Javascript";

function hello(name, age) {
  return `czesc jestem ${name} i mam ${age} lat`;
}

console.log(hello("Dawid", 21));

const person = {
  firstName: name,
  age: age,
  profession: 'developer',
  introduceYourself: (firstName, age, profession) => {
    
    console.log(
      `nazywam się ${firstName} i mam ${age} lat, chciałbym pracować jako ${profession}`
    );
  },
};

console.log(person.introduceYourself(person.firstNamename,person.age,person.profession))

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})

const switchModes = document.querySelector('.switch');

switchModes.addEventListener('click',()=>{
  if(isDark){
  document.documentElement.style.setProperty('--background-color', '#fefefe');
  document.documentElement.style.setProperty('--text-color','black');
  isDark = false;
} 
else {
  document.documentElement.style.setProperty('--background-color', '#222222');
  document.documentElement.style.setProperty('--text-color','rgb(165, 165, 165)');
  isDark = true;
}
})