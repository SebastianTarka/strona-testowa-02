const burger = document.querySelector(".hamburger-menu");
burger.addEventListener('click', () =>{
    burger.classList.toggle("open")
});
const submit = document.querySelector('.submit');
submit.addEventListener('click', () =>{
    window.alert('Sent!');
})