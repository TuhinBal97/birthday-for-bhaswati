// ===============================
// TERMINAL MESSAGE
// ===============================

const terminalText = `
Initializing Birthday Protocol...

Loading Love Database...

████░░░░░░░░░ 20%

Connecting To Heart Server...

████████░░░░ 50%

Authenticating...

████████████░ 90%

ACCESS GRANTED ✔

Searching...

✔ Name Found

Bhaswati ❤️

Compiling Beautiful Memories...

✔ First Smile

✔ First Conversation

✔ First Laugh

✔ Endless Love

Preparing Birthday Celebration...

Loading Happiness...

Loading Surprises...

Everything Ready ✔

Happy Birthday, Bhaswati ❤️
`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (i < terminalText.length) {

        typing.innerHTML += terminalText.charAt(i);

        i++;

        setTimeout(typeWriter, 30);

    } else {

        setTimeout(showBirthday, 1500);

    }

}

typeWriter();

// ===============================
// SHOW MAIN PAGE
// ===============================

function showBirthday() {

    document.getElementById("terminal").style.display = "none";

    document.getElementById("birthday").classList.remove("hidden");

    startCelebration();

}

// ===============================
// SURPRISE BUTTON
// ===============================

document.getElementById("surpriseBtn").addEventListener("click", function () {

    document.getElementById("surprise").classList.remove("hidden");

    // Scroll to surprise smoothly
    document.getElementById("surprise").scrollIntoView({
        behavior: "smooth"
    });

    // Play music
    const music = document.getElementById("bgMusic");

    music.volume = 0.6;

    music.play().catch(error => {
        console.log("Autoplay blocked:", error);
    });

    // More confetti
    burstConfetti();

});

// ===============================
// END BUTTON
// ===============================

document.getElementById("endBtn").addEventListener("click", function () {

    const music = document.getElementById("bgMusic");

    music.pause();

    music.currentTime = 0;

    confetti.reset();

    alert("❤️ Thank you for celebrating! Happy Birthday once again, Bhaswati! ❤️");

    document.getElementById("surprise").classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// INITIAL CONFETTI
// ===============================

function startCelebration() {

    confetti({
        particleCount: 150,
        spread: 160,
        origin: {
            y: 0.6
        }
    });

}

// ===============================
// BIG CONFETTI SHOW
// ===============================

function burstConfetti() {

    const duration = 5000;

    const animationEnd = Date.now() + duration;

    const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 70,
        zIndex: 9999
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {

        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {

            clearInterval(interval);

            return;

        }

        const particleCount = 40 * (timeLeft / duration);

        confetti(Object.assign({}, defaults, {

            particleCount,

            origin: {
                x: randomInRange(0.1, 0.3),
                y: Math.random() - 0.2
            }

        }));

        confetti(Object.assign({}, defaults, {

            particleCount,

            origin: {
                x: randomInRange(0.7, 0.9),
                y: Math.random() - 0.2
            }

        }));

    }, 250);

}