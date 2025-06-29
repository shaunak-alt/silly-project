function showTab(tab) {
  document.getElementById("numberTab").classList.add("hidden");
  document.getElementById("heightTab").classList.add("hidden");
  document.getElementById(tab + "Tab").classList.remove("hidden");
}

// ----- Number Guessing -----

const numberMessages = [
  "Reading your mind...",
  "Analyzing brain signals...",
  "Locating neural pathways...",
  "Decrypting mental encryption...",
  "Scanning subconscious layers...",
  "Running 938723923892 combinations...",
  "CALCULATING 6.37E+893127845151387513...",
  "Almost done decoding..."
];

function startReadingNumber() {
  const num = document.getElementById("userNumber").value.trim();
  if (!num) return alert("Enter a number!");

  document.getElementById("numberResult").classList.add("hidden");
  document.getElementById("numberLoading").classList.remove("hidden");
  document.getElementById("explosionGIF").classList.add("hidden");
  document.getElementById("userNumber").disabled = true;

  document.getElementById("ambientSound").play();

  let progress = 0;
  let i = 0;

  const interval = setInterval(() => {
    progress += 1;
    document.getElementById("numberBar").style.width = progress + "%";

    if (progress % 7 === 0 && i < numberMessages.length) {
      document.getElementById("numberText").innerText = numberMessages[i++];
    }

    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById("ambientSound").pause();
      document.getElementById("boomSound").play();
      document.getElementById("explosionGIF").classList.remove("hidden");
      document.getElementById("numberLoading").classList.add("hidden");
      document.getElementById("numberResult").innerText = `You were thinking of the number ${num} 🤯💥`;
      document.getElementById("numberResult").classList.remove("hidden");
      document.getElementById("userNumber").disabled = false;
    }
  }, 150);
}

// ----- Height Guesser -----

const heightMessages = [
  "Analyzing proportions...",
  "Measuring pixel-by-pixel...",
  "Running height-to-shoe-size correlation...",
  "Looking at posture history...",
  "Consulting the Height Gods ⛰️",
  "Comparing with worldwide height chart 📊",
  "Estimating based on vibes...",
  "Almost done roasting..."
];

function startReadingHeight() {
  const feet = document.getElementById("feet").value.trim();
  const inches = document.getElementById("inches").value.trim();

  if (feet === "" || inches === "") return alert("Enter both feet and inches!");

  document.getElementById("heightResult").classList.add("hidden");
  document.getElementById("heightLoading").classList.remove("hidden");
  document.getElementById("catGIF").classList.add("hidden");
  document.getElementById("feet").disabled = true;
  document.getElementById("inches").disabled = true;

  document.getElementById("ambientSound").play();

  const heightMessages = [
    "Analyzing proportions...",
    "Measuring shoe lift level...",
    "Checking if you qualify as pocket-sized...",
    "Running roast algorithm v2.0...",
    "Consulting short king database 👑",
    "Looking up height-to-confidence ratio...",
    "Estimating based on vibes...",
    "Finalizing judgment..."
  ];

  let progress = 0;
  let i = 0;

  const interval = setInterval(() => {
    progress += 1;
    document.getElementById("heightBar").style.width = progress + "%";

    if (progress % 7 === 0 && i < heightMessages.length) {
      document.getElementById("heightText").innerText = heightMessages[i++];
    }

    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById("ambientSound").pause();
      document.getElementById("catGIF").classList.remove("hidden");
      document.getElementById("heightLoading").classList.add("hidden");

      const totalInches = parseInt(feet) * 12 + parseInt(inches);
      const resultText = `You're ${feet} feet ${inches} inches... wow, almost tall enough to reach the top shelf 😹💀`;
      const roasts = [
        `Certified short king energy 👑😂`,
        `You're built like a fun-size Snickers 💀`,
        `Tall? That's adorable 😹`,
        `Kinda tall... for a 10-year-old 😏`,
        `Bro's closer to the ground than my WiFi router 📶`
      ];
      const roast = roasts[Math.floor(Math.random() * roasts.length)];

      document.getElementById("heightResult").innerText = `${resultText}\n${roast}`;
      document.getElementById("heightResult").classList.remove("hidden");

      document.getElementById("feet").disabled = false;
      document.getElementById("inches").disabled = false;
    }
  }, 150);
}