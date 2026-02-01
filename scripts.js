// 1. Starting points 
let hunger = 100;
let happiness = 100;
let energy = 100;
let mood = "Happy"; 

// 2. Grabbing the elements from HTML
const hungerText = document.getElementById('hunger-level');
const happinessText = document.getElementById('happiness-level');
const energyText = document.getElementById('energy-level');
const moodText = document.getElementById('mood');
const petDiv = document.getElementById('pet');

// 3. The Timer
setInterval(function() {
    hunger = hunger - 5;
    happiness = happiness - 5;
    energy = energy - 5;

    if (hunger < 0) { hunger = 0; }
    if (happiness < 0) { happiness = 0; }
    if (energy < 0) { energy = 0; }

    updateScreen();
}, 2000);

// 4. The Update Function
function updateScreen() {
    // Show numbers on screen
    hungerText.innerText = hunger;
    happinessText.innerText = happiness;
    energyText.innerText = energy;
    moodText.innerText = mood;

    // Change mood and pet appearance
    if (hunger < 30) {
        mood = "Starving";
        petDiv.style.backgroundColor = "red";
        petDiv.style.backgroundImage = "url('sad.png')"; // Or 'hungry.png' if you have it
    } 
    else if (energy < 30) {
        mood = "Exhausted";
        petDiv.style.backgroundColor = "blue";
        petDiv.style.backgroundImage = "url('sleepy.png')";
    } 
    else if (happiness < 30) {
        mood = "Depressed";
        petDiv.style.backgroundColor = "purple";
        petDiv.style.backgroundImage = "url('sad.png')";
    } 
    else if (hunger < 60 || energy < 60 || happiness < 60) {
        mood = "Okay";
        petDiv.style.backgroundColor = "gold";
        petDiv.style.backgroundImage = "url('happy.png')"; // Or an 'average' duck
    } 
    else {
        mood = "Great!";
        petDiv.style.backgroundColor = "gold";
        petDiv.style.backgroundImage = "url('happy.png')";
    }

    localStorage.setItem('savedHunger', hunger);
    localStorage.setItem('savedHappiness', happiness);
    localStorage.setItem('savedEnergy', energy);
}

// 6. Buttons
function feedPet() {
    hunger = hunger + 20;
    if (hunger > 100) { hunger = 100; }
    updateScreen();
}

function playWithPet() {
    happiness = happiness + 20;
    if (happiness > 100) { happiness = 100; }
    updateScreen();
}

function restPet() {
    energy = energy + 25;
    if (energy > 100) { energy = 100; }
    updateScreen();
}

document.getElementById('feed-btn').onclick = feedPet;
document.getElementById('play-btn').onclick = playWithPet;
document.getElementById('sleep-btn').onclick = restPet;

// Run once to start
updateScreen();