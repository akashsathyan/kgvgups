
let questions = [
  {
    id: 1,
    question: "When is the World Environment Day celebrated ?",
    answer: "June 5",
    options: [
      "June 4",
      "June 5",
      "June 3",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Which Country is hosting the World Environment Day in 2021 ?",
    answer: "Pakistan",
    options: [
      "India",
      "Pakistan",
      "United Kingdom",
      "Nepal"
    ]
  },
  {
    id: 3,
    question: "When was the environment day first celebrated ?",
    answer: "1978",
    options: [
      "2006",
      "1978",
      "1973",
      "2020"
    ]
  },
  {
    id: 4,
    question: "In Which year india host the  World Environment Day  ?",
    answer: "2018",
    options: [
      "2018",
      "2019",
      "2011",
      "2017"
    ]
  },
  {
    id: 5,
    question: "Who is know as mother of india Environmental Science ?",
    answer: "Medha Patkar",
    options: [
      "Medha Patkar",
      "Sugathakumari",
      "Maneka Gandhi",
      "None of them"
    ]
  },
  {
    id: 6,
    question: "Who is kerala's first Environmental Activist ?",
    answer: "Prof. John C. Jacob",
    options: [
      "Dr. Swaminathan",
      "M. T. Vasudevan Nair",
      "Prof. John C. Jacob",
      "None of Above"
    ]
  },
  {
    id: 7,
    question: "When was the Environmental protection act was introduced ?",
    answer: "1986",
    options: [
      "1986",
      "1983",
      "1991",
      "1980"
    ]
  },
  {
    id: 8,
    question: "Which is the first environmental magazine in kerala ?",
    answer: "Maina",
    options: [
      "The Week",
      "Maina",
      "Eureka",
      "Poompatta"
    ]
  },
  {
    id: 9,
    question: "Which movement is known as ''Mother of environmental movement'' ? ",
    answer: "Chipko movement",
    options: [
      "Chipko movement",
      "Narmada thapthi movement",
      "Mangrove plantation",
      "None of above"
    ]
  },
  {
    id: 10,
    question: "Who is Known as the father of ''Modern Environment'' ?",
    answer: "Yujin P odd",
    options: [
      "R . Mishra",
      "Yujin P odd",
      "B.R Shetty",
      "None of Above"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul>
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
