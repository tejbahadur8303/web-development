document.addEventListener("DOMContentLoaded", () => {
  let gameSeq = [];
  let userSeq = [];
  const btns = ["yellow", "red", "purple", "green"];

  let started = false;
  let level = 0;
  const h3 = document.querySelector("h3");

  document.addEventListener("keydown", () => {
    if (!started) {
      started = true;
      levelUp();
    }
  });

  function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
  }

  function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
  }

  function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    const randIdx = Math.floor(Math.random() * btns.length);
    const randColor = btns[randIdx];
    const randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
  }

  function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
      if (userSeq.length === gameSeq.length) {
        setTimeout(levelUp, 250);
      }
    } else {
      h3.innerHTML = `Game Over! Score: <b>${level}</b><br>Press any key to restart`;
      reset();
    }
  }

  function btnPress() {
    if (!started) return;

    const btn = this;
    userFlash(btn);

    const userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
  }

  function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
  }

  const allBtns = document.querySelectorAll(".btn");
  for (const btn of allBtns) {
    btn.addEventListener("click", btnPress);
  }
});
