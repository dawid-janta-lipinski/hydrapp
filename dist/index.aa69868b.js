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
    profession: "developer",
    introduceYourself: (firstName, age, profession)=>{
        console.log(`nazywam się ${firstName} i mam ${age} lat, chciałbym pracować jako ${profession}`);
    }
};
console.log(person.introduceYourself(person.firstNamename, person.age, person.profession));
const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener("click", ()=>{
    const nav = document.querySelector(".navigation--js");
    nav.classList.toggle("navigation--open");
});
const switchModes = document.querySelector(".switch");
switchModes.addEventListener("click", ()=>{
    const aside = document.querySelector(".aside");
    aside.classList.toggle("darkmode");
});
switchModes.addEventListener("click", ()=>{
    const aside = document.querySelector(".article");
    aside.classList.toggle("darkmode");
});

//# sourceMappingURL=index.aa69868b.js.map
