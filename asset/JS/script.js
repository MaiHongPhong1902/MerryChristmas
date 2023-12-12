document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector(".snow-container");

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 1.25;
    const pauseWhenNotActive = true;
    const maxSnowflakes = 200;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
        const size = Math.random() * 5 + 1;
        const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
        const viewportHeight = window.innerHeight;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
        snowflake.style.top = `-${size}px`;

        const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = "linear";
        snowflake.style.animationName =
            Math.random() < 0.5 ? "fall" : "diagonal-fall";

        setTimeout(() => {
            if (parseInt(snowflake.style.top, 10) < viewportHeight) {
                resetSnowflake(snowflake);
            } else {
                snowflake.remove(); // Remove when it goes off the bottom edge
            }
        }, animationDuration * 1000);
    }

    function createSnowflake() {
        if (snowflakes.length < maxSnowflakes) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflakes.push(snowflake);
            snowContainer.appendChild(snowflake);
            resetSnowflake(snowflake);
        }
    }

    function generateSnowflakes() {
        const numberOfParticles =
            Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
            particlesPerThousandPixels;
        const interval = 5000 / numberOfParticles;

        clearInterval(snowflakeInterval);
        snowflakeInterval = setInterval(() => {
            if (isTabActive && snowflakes.length < maxSnowflakes) {
                requestAnimationFrame(createSnowflake);
            }
        }, interval);
    }

    function handleVisibilityChange() {
        if (!pauseWhenNotActive) return;

        isTabActive = !document.hidden;
        if (isTabActive) {
            generateSnowflakes();
        } else {
            clearInterval(snowflakeInterval);
        }
    }

    generateSnowflakes();

    window.addEventListener("resize", () => {
        clearInterval(snowflakeInterval);
        setTimeout(generateSnowflakes, 1000);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
});
// volume
document.addEventListener("click", function() {

    var audio = document.querySelector("audio");
  
    if(audio) {
      audio.play(); 
    }
  
  });
// đổi trang
document.addEventListener("DOMContentLoaded", function() {
    var gift = document.getElementById("gift");
    var after = document.getElementById("after");

    gift.addEventListener("click", function() {
        toggleElements(gift, after);
    });
});

function toggleElements(gift, after) {
    if (gift.style.display !== "none") {
        gift.style.opacity = "0";
        setTimeout(function() {
            gift.style.display = "none";
            after.style.display = "block";
            setTimeout(function() {
                fadeIn(after);
            }, 100); // Hiển thị dần after sau 100ms
        }, 1000); // Hiển thị after sau 1 giây
    }
}

function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            element.classList.add("open-gift");
        }
    }, 100);
}

// text under

 // Chờ 3 giây, sau đó ẩn "Merry Christmas" và hiển thị "Best wishes"
 setTimeout(function() {
    var wishingElement = document.getElementById('wishing');
    wishingElement.style.opacity = 1; // Hiển thị "Best wishes"
  }, 12000); // 3000 milliseconds = 3 giây