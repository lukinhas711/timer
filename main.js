function initTimerCount() {
  const timer = document.querySelector(".relogio");
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

  document.addEventListener("click", function (e) {
    const element = e.target;

    if (element.classList.contains("iniciar")) {
      clearInterval(count);
      initTimer();
      timer.classList.remove("pausado");
    }

    if (element.classList.contains("pausar")) {
      clearInterval(count);
      timer.classList.add("pausado");
    }

    if (element.classList.contains("zerar")) {
      clearInterval(count);
      timer.innerHTML = "00:00:00";
      seconds = 0;
      timer.classList.remove("pausado");
    }
  });
}

initTimerCount();
