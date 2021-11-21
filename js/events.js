function greenButton() {
    document.body.style.backgroundColor = "green";
}

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = blueColour;

function blueColour() {
    document.body.style.backgroundColor = "blue";
}

const redButton = document.getElementById("make-red-button");
redButton.onclick = redColour;

function redColour() {
    document.body.style.backgroundColor = "red";
}
const coralButton = document.getElementById("make-coral-button");
coralButton.onclick = function () {
    document.body.style.backgroundColor = "coral";
}
const skyblueButton = document.getElementById("make-skyblue-button");
skyblueButton.addEventListener('click', skyblueColour);
function skyblueColour() {
    document.body.style.backgroundColor = 'skyblue';
}