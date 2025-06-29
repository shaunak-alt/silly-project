const messages = [
  "Reading your mind...",
  "Analyzing brain signals...",
  "Locating neural pathways...",
  "Decrypting mental encryption...",
  "Scanning subconscious layers...",
  "Running 938723923892 combinations...",
  "CALCULATING 6.37E+893127845151387513 POSSIBLE COMBINATIONS...",
  "Connecting telepathically via Bluetooth...",
  "Searching your deepest thoughts...",
  "Projecting neural frequencies...",
  "Mapping your imagination...",
  "Rewiring your synapses...",
  "Cracking mental firewalls...",
  "Synchronizing thoughts...",
  "Almost done decoding..."
];

function startReading() {
  const input = document.getElementById("userNumber");
  const number = input.value.trim();
  if (!number) {
    alert("Please enter a number!");
    return;
  }

  // Reset UI
  document.getElementById("result").classList.add("hidden");
  document.getElementById("loadingSection").classList.remove("hidden");
  document.getElementById("explosionGIF").classList.add("hidden");
  input.disabled = true;

  // Play ambient sound
  document.getElementById("ambientSound").currentTime = 0;
  document.getElementById("ambientSound").play();

  const bar = document.getElementById("loadingBar");
  const text = document.getElementById("loadingText");

  let progress = 0;
  let messageIndex = 0;

  const interval = setInterval(() => {
    progress += 1;
    bar.style.width = progress + "%";

    if (progress % 7 === 0 && messageIndex < messages.length) {
      text.innerText = messages[messageIndex++];
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        revealResult(number);
      }, 200); // small pause
    }
  }, 150); // 150ms × 100 = 15s
}

function revealResult(number) {
  // Stop ambient, play explosion
  const explosion = document.getElementById("explosionGIF");
  const boomSound = document.getElementById("boomSound");
  document.getElementById("ambientSound").pause();
  boomSound.play();

  // Reveal explosion and result together
  explosion.classList.remove("hidden");
  const result = document.getElementById("result");
  result.innerText = `You were thinking of the NUMBER ${number} 🤯💥`;
  result.classList.remove("hidden");

  // Enable input again
  document.getElementById("userNumber").disabled = false;
}
