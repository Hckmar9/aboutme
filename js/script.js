const card = document.querySelector('#card');
const cardHeader = card.querySelector('header');
let clicked = false;
let startTop = card.offsetTop;
let startLeft = card.offsetLeft;
let offsetX, offsetY;

cardHeader.addEventListener('mousedown', (e) => {
    clicked = true;
    offsetX = e.clientX - card.offsetLeft;
    offsetY = e.clientY - card.offsetTop;
});

document.addEventListener('mouseup'), () => {
    clicked = false;
}

document.addEventListener('mousemove', (e) => {
    if (!clicked) return;
    const {clientX - clientY} = e;
    card.style.left = `${clientX - offsetX}px`;
    card.style.top = `${clientY - offsetY}px`;   
});