const noButton = document.getElementById('noBtn');
const yesButton = document.getElementById('yesBtn');
const image = document.querySelector('.ask');
const mainTxt = document.querySelector('.container h1');
const subTxt = document.querySelector('.container p');

const sadImageSrc = ["/image/angry.gif", "/image/sobs.webp","/image/sad.gif", "/image/cry.webp", "/image/doorPunch.webp"];
let count = 0;

//function to change sad image every 3 noBtn clicks
function changeSadImage() {
    image.src = sadImageSrc[count];
    count++;   
    if (count == 5) {
        count = 0;
    }
}
//function to move button
function moveButton() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
//enlarge yesBtn when noBtn is clicked
function enlargeYesButton() {
    const currentWidth = yesButton.offsetWidth;
    const currentHeight = yesButton.offsetHeight;
    yesButton.style.width = `${currentWidth * 1.5}px`;
    yesButton.style.height = `${currentHeight * 1.5}px`;
    yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton).fontSize) * 1.5}px`;
}
//shrink noBtn when clicked
function shrinkNoButton() {
    const currentWidth = noButton.offsetWidth;
    const currentHeight = noButton.offsetHeight;
    noButton.style.width = `${currentWidth * 0.9}px`;
    noButton.style.height = `${currentHeight * 0.9}px`;
    noButton.style.fontSize = `${parseFloat(window.getComputedStyle(noButton).fontSize) * 0.9}px`;  
}
//no button event listener
noButton.addEventListener('click', () => {
    moveButton();
    enlargeYesButton();
    shrinkNoButton();
    changeSadImage();
})
//yes button event listener
yesButton.addEventListener('click', () => {
    image.src = "/image/both.webp";
    mainTxt.textContent = "I LOVE YOU! MWAHHH!";
    subTxt.textContent = "Thank you Babuuuuuuu!";
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
})