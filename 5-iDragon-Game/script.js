score = 0;
cross = true;

audioGameOver = new Audio("resources/gameover.mp3");
audio = new Audio("resources/music.mp3");
setTimeout(() => {
  audio.play();
}, 1000);

document.onkeydown = function (e) {
  console.log("Key Code Is : " + e.key);
  if (e.key === "ArrowUp" || e.key === " ") {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.key === "ArrowRight") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.key === "ArrowLeft") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);

  if (offsetX < 93 && offsetY < 52) {
    gameOver.innerHTML = "Game Over - Reload to Play Again";
    obstacle.classList.remove("obstacleAni");
    audioGameOver.play();
    setTimeout(() => {
      audioGameOver.pause();
      audio.pause();
    }, 1000);
  } else if (cross && offsetX < 145) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 10);

const updateScore = (score) => {
  scoreCount.innerHTML = `Your Score : ${score}`;
};
