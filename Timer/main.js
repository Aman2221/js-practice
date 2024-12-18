$(".timer-form").on("submit", (e) => {
  e.preventDefault();
  const time = document.querySelector("#time").value;
  const date = document.querySelector("#date").value;

  const getDateTime = new Date(`${date}T${time}`);

  const timer = setInterval(() => {
    const timeDifference = getDateTime - new Date();

    if (timeDifference <= 0) {
      clearInterval(timer);
      countdownDisplay.textContent = "Time's up!";
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelector(".timer").classList.remove("hidden");

    document.querySelector(".secondsHolder").textContent = seconds;
    document.querySelector(".minutesHolder").textContent = minutes;
    document.querySelector(".hoursHolder").textContent = hours;
    document.querySelector(".daysHolder").textContent = days;
  }, 1000);
});
