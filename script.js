const date = new Date("October 6, 2026 18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = date - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("countdownMessage").textContent =
      "IT'S OUR DATE DAY! 🥹💗🐱";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateCountdown();
setInterval(updateCountdown, 1000);

const music = document.getElementById("music");
const playButton = document.getElementById("playButton");
const disc = document.querySelector(".disc");

playButton.addEventListener("click", function () {
  if (music.paused) {
    music
      .play()
      .then(function () {
        playButton.textContent = "❚❚";
        disc.classList.add("playing");
      })
      .catch(function () {
        alert(
          "Please make sure music.mp3 is in the same folder as index.html.",
        );
      });
  } else {
    music.pause();
    playButton.textContent = "▶";
    disc.classList.remove("playing");
  }
});

music.addEventListener("ended", function () {
  playButton.textContent = "▶";
  disc.classList.remove("playing");
});

function showVerse(number) {
  const verseBox = document.getElementById("verseBox");

  const verses = {
    1: `
            <strong>Jeremiah 29:11 💗</strong>
            <br><br>
            “For I know the plans I have for you,” declares the Lord.
            <br><br>
            Whatever happens, I hope our little date becomes
            one of those memories that makes you smile.
        `,

    2: `
            <strong>1 Corinthians 13:4 🌸</strong>
            <br><br>
            “Love is patient, love is kind.”
            <br><br>
            So I'll take my time, enjoy every moment,
            and simply be happy that I get to spend time with you.
        `,

    3: `
            <strong>Psalm 118:24 ☀️</strong>
            <br><br>
            “This is the day the Lord has made;
            let us rejoice and be glad in it.”
            <br><br>
            And Tuesday is definitely going to be a happy day for me.
        `,

    4: `
            <strong>Proverbs 3:5-6 🐱</strong>
            <br><br>
            “Trust in the Lord with all your heart.”
            <br><br>
            I'm thankful for every little step that brought us
            to this moment.
        `,
  };

  verseBox.innerHTML = verses[number];
  verseBox.style.animation = "none";

  setTimeout(function () {
    verseBox.style.animation = "appear 0.5s ease";
  }, 10);
}

function showReason(number) {
  const reasonBox = document.getElementById("reasonBox");

  const reasons = {
    1: "Because I get to finally spend some real time with you. 🥹",

    2: "Because I want to see your smile in person, not just through a screen. 💗",

    3: "Because I'm curious how many times I'll get shy during our date. 😭",

    4: "Because you're someone I genuinely want to know better. 🐱",

    5: "Because even a simple day can become special when you're with the right person. ✨",

    6: "Because... you said YES. That's already enough reason for me to smile. 😭💗",
  };

  reasonBox.textContent = reasons[number];
  reasonBox.style.animation = "none";

  setTimeout(function () {
    reasonBox.style.animation = "appear 0.5s ease";
  }, 10);
}

function answerYes() {
  const answer = document.getElementById("answerMessage");

  answer.innerHTML = `
        🥹💗🐱
        <br><br>
        You just made me the happiest cat in the world. 😭
        <br><br>
        Thank you, Julie.
        <br><br>
        I'll take my time, I'll be genuine with you,
        and I'll do my best to make you feel appreciated.
        <br><br>
        <strong>Let's start this little journey. 💗</strong>
    `;

  createHearts();

  setTimeout(function () {
    answer.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 100);
}

function answerThink() {
  const answer = document.getElementById("answerMessage");

  answer.innerHTML = `
        🐱💗
        <br><br>
        That's okay. Take all the time you need.
        <br><br>
        I don't want you to feel pressured.
        I just wanted you to know how I honestly feel.
        <br><br>
        Whatever you decide, I'll respect it. 🌸
    `;
}

function openSurprise() {
  const surprise = document.getElementById("surprise");

  surprise.classList.toggle("show");

  if (surprise.classList.contains("show")) {
    createHearts();

    setTimeout(function () {
      surprise.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }
}

function createPaw() {
  const pawContainer = document.querySelector(".paw-container");

  if (!pawContainer) {
    return;
  }

  const paw = document.createElement("div");

  paw.classList.add("paw");

  const symbols = ["🐾", "💗", "🐱", "♡", "✨"];

  paw.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  paw.style.left = Math.random() * 100 + "vw";
  paw.style.animationDuration = 4 + Math.random() * 4 + "s";

  pawContainer.appendChild(paw);

  setTimeout(function () {
    paw.remove();
  }, 8000);
}

setInterval(createPaw, 800);

function createHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(function () {
      const heart = document.createElement("div");

      heart.textContent = Math.random() > 0.5 ? "💗" : "🐾";

      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "-30px";
      heart.style.fontSize = "25px";
      heart.style.zIndex = "9999";
      heart.style.pointerEvents = "none";
      heart.style.transition = "4s ease";

      document.body.appendChild(heart);

      setTimeout(function () {
        heart.style.transform = "translateY(-100vh) rotate(360deg)";
        heart.style.opacity = "0";
      }, 50);

      setTimeout(function () {
        heart.remove();
      }, 4500);
    }, i * 100);
  }
}
