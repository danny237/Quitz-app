let questions = [
    new Question("HTML stands for?", ["Hypertext Markup Language", "Hypertext Make Language", "Hyper Markup Language", "Hyper Make Language"], 0),
    new Question("HTML is programming Language", ["Yes", "No", "both", "None of them"], 1),
    new Question("Which is not object oriended programming language?", ["Java", "python", "C++", "C"], 3),
    new Question("Python doesn't support backend?", ["True", "False", "Maybe", "partially"], 1),
    new Question("Django is a: ", ["Web framework based on python", "Web framework based on java", "library based on python", "None of them"], 0)
]

function Question(question, options, answer) {
    this.question = question;
    this.options = options
    this.answer = answer
}

var i = 0

function init() {
    let container = document.getElementsByClassName('container')[0];

    let question = document.createElement("div");
    question.setAttribute("id", "question");

    let h1 = document.createElement("h1");
    h1.textContent = i+1 + " ";
    h1.innerHTML += questions[i].question;
    
    question.appendChild(h1);

    container.appendChild(question);
    // console.log(questions[0])
    for(let j=0; j<4; j++){

        let container = document.getElementsByClassName("container")[0];
        let answer_holder = document.createElement("div");
        answer_holder.setAttribute("class", "answer-holder")

        let answers = document.createElement("div");
        answers.onclick = showmeindex
        answers.setAttribute("class", "answers");
        

        let p1 = document.createElement("p");
        p1.setAttribute("class", "choice");
        p1.textContent = j+1;
        let p2 = document.createElement("p");
        p2.setAttribute("class", "choice-answer");
        p2.setAttribute("id", "choice-"+ i +"-" + j)
        p2.textContent = questions[i].options[j]
        answers.appendChild(p1)
        answers.appendChild(p2)

        answer_holder.appendChild(answers)
        
        container.appendChild(answer_holder);

        function showmeindex(event){
            let index = event.target.id.split("-")
            let ques = index[1]
            let ans = index[2]
            console.log(ques, ans)
            console.log("answer", questions[i].answer)
            if (ans==questions[i].answer){
                console.log("congratue")
                let correct = document.getElementsByClassName("answers")[ans];
                correct.style.background = "#87CEEB"
            }else{
                console.log("wrong answer!")
                let wrong = document.getElementsByClassName("answers")[ans];
                wrong.style.background = "#DC143C"
            }
        }

        

    }

    let button = document.createElement("button");
    
    button.setAttribute("class", "btn")
    button.textContent = "Next"
    container.appendChild(button)
    
    button.onclick = nextquestion
    
    function nextquestion(e){
        container.innerHTML = ""
        console.log(e)
        i++;
        init()
    }
}

init()




