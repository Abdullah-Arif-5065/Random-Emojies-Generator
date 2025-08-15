let btn = document.querySelector(".emojie");
let txt = document.getElementById("i");

let emojiMap = {
    "😑": "Neutral face",
    "😊": "Happy vibes",
    "🤣": "Laughing hard",
    "😁": "Big smile",
    "😒": "Unimpressed",
    "😞": "Sadi-sadi",
    "🤡": "You are a clown",
    "💩": "Poop [ali raza khan]",
    "🦛": "Hippo-p0-p0 time",
    "🪳": "Cockroach spotted",
    "🪠": "Lets clean [ali raza khan]",
    "♿": "please dont poop too much",
    "🚼": "Baby on board",
    "🎃": "Pumpkin season",
    "🐂": "Yamraj ka bhaisa (Mota)"
};

let emojis = Object.keys(emojiMap);

btn.addEventListener("mouseover", () => {
    let randm = emojis[Math.floor(Math.random() * emojis.length)];
    btn.innerHTML = randm;
    txt.textContent = emojiMap[randm] || ""; 
});
