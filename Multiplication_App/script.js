const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById("question");

const form = document.getElementById("form");

const input = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));
let scores = document.getElementById("score");

if(!score){
    score = 0;
}

scores.innerText=`score:${score}`;

question.innerText = `what is ${num1} multiply by ${num2}?`;

const crtAns = num1 * num2;

const win  = document.getElementById("win");

form.addEventListener("submit", () => {
    const userAns = Number.parseInt(input.value);
    if (userAns === crtAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
})

if(score === 10){
    alert(`you are the winner`);
}

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}



localStorage.clear()




