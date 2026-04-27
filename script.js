const quotes = [
  "Baseball is ninety percent mental and the other half is physical. – Yogi Berra",
  "Every strike brings me closer to the next home run. – Babe Ruth",
  "Never let the fear of striking out keep you from playing the game. – Babe Ruth",
  "It ain’t over till it’s over. – Yogi Berra",
  "You can’t think and hit at the same time. – Yogi Berra",
  "Baseball was, is and always will be to me the best game in the world. – Babe Ruth",
  "There are only two seasons: winter and baseball. – Bill Veeck",
  "A baseball game is simply a nervous breakdown divided into nine innings. – Earl Wilson",
  "Hitting is timing. Pitching is upsetting timing. – Warren Spahn",
  "The way a team plays as a whole determines its success. – Babe Ruth",
  "Love is the most important thing in the world, but baseball is pretty good too. – Yogi Berra",
  "You owe it to yourself to be the best you can possibly be. – Pete Rose",
  "When you come to a fork in the road, take it. – Yogi Berra",
  "Baseball gives every American boy a chance to excel. – Ted Williams",
  "The hardest thing to do in baseball is to hit a round baseball with a round bat. – Ted Williams",
  "If you don’t know where you are going, you might wind up someplace else. – Yogi Berra",
  "Champions keep playing until they get it right. – Billie Jean King",
  "Good pitching will always stop good hitting. – Casey Stengel",
  "Slumps are like a soft bed. They’re easy to get into and hard to get out of. – Johnny Bench",
  "Baseball is like church. Many attend, few understand. – Leo Durocher"
];

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
}

const logos = [
  "images/acflora2.png",
  "images/airport2.png",
  "images/blythwood.png",
  "images/chapin2.png",
  "images/df.png",
  "images/gray.png",
  "images/IHS_Sting_Logo_2.png",
  "images/lexington2.png",
  "images/riverbluff2.png",
  "images/WKHS.webp",
  "images/bc.png",
  "images/gilbert.png"
];

let currentLogo = 0;

function changeLogo() {
  const img = document.getElementById("logoSlide");
  if (!img) return;

  img.style.opacity = 0;

  setTimeout(() => {
    currentLogo = (currentLogo + 1) % logos.length;
    img.src = logos[currentLogo];
    img.style.opacity = 1;
  }, 300);
}

setInterval(changeLogo, 5000);

function showConfirmation(event) {
  event.preventDefault(); // stops page from refreshing

  document.getElementById("confirmationMessage").style.display = "block";

  // Optional: clear the form after submit
  event.target.reset();
}