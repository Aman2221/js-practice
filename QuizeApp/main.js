$(".quize-form").on("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const correctAnswers = {
    "This is the FIRST question?": "Q1-O4",
    "This is the SECOND question?": "Q2-O2",
    "This is the THIRD question?": "Q3-O1",
    "This is the FOURTH question?": "Q4-O3",
  };

  const quizAnswers = {};
  formData.forEach((value, key) => {
    quizAnswers[key] = value; // Key = question name, Value = selected option
  });

  const results = document.createElement("ol");
  let score = 0;
  //CALCULATING RESULTS
  Object.keys(quizAnswers).map((question) => {
    if (quizAnswers[question] == correctAnswers[question]) {
      score++;
    }
  });

  Object.keys(quizAnswers).map((question) => {
    const results_li = document.createElement("li");
    results_li.innerHTML = `<span class="text-white">${question} : ${quizAnswers[question]} </span>`;
    results.appendChild(results_li);
  });

  document.querySelector(".form-div").appendChild(results);

  resetForm(e); //reset questions
});

window.addEventListener("load", () => {
  const questionair = [
    {
      question: "This is the FIRST question?",
      options: ["Q1-O1", "Q1-O2", "Q1-O3", "Q1-O4"],
    },
    {
      question: "This is the SECOND question?",
      options: ["Q2-O1", "Q2-O2", "Q2-O3", "Q2-O4"],
    },
    {
      question: "This is the THIRD question?",
      options: ["Q3-O1", "Q3-O2", "Q3-O3", "Q3-O4"],
    },
    {
      question: "This is the FOURTH question?",
      options: ["Q4-O1", "Q4-O2", "Q4-O3", "Q4-O4"],
    },
  ];

  questionair.forEach((item) => {
    const questionEle = document.createElement("li");
    const questionName = document.createElement("h1");
    questionName.className = "text-xl text-white mt-10";
    questionName.textContent = item.question;
    questionEle.append(questionName);

    item.options.forEach((opt) => {
      const optionsDiv = document.createElement("div");
      optionsDiv.innerHTML = `
      
        <input
            type="radio"
            required
            name="${item.question}"
            id=${opt}   
            value=${opt}
        />
        <label class="text-white text-lg" for="${opt}">
            ${opt}
        </label>
      `;

      questionEle.appendChild(optionsDiv);
    });

    document.querySelector(".qustions-list").appendChild(questionEle);
  });
});

const resetForm = (e) => {
  e.target.reset();
};
