function initTimerCount() {
  const timer = document.querySelector(".relogio");
  const init = document.querySelector(".iniciar");
  const pause = document.querySelector(".pausar");
  const restart = document.querySelector(".zerar");
  let seconds = 0;
  let count;

  function setTime(x) {
    let date = new Date(x * 1000);
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  function initTimer() {
    count = setInterval(function () {
      seconds++;
      timer.innerHTML = setTime(seconds);
    }, 1000);
  }

  init.addEventListener("click", function (event) {
    clearInterval(count);
    initTimer();
    timer.classList.remove("pausado");
  });

  pause.addEventListener("click", function (event) {
    clearInterval(count);
    timer.classList.add("pausado");
  });

  restart.addEventListener("click", function (event) {
    clearInterval(count);
    timer.innerHTML = "00:00:00";
    seconds = 0;
    timer.classList.remove("pausado");
  });
}

initTimerCount();
