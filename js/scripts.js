const questions = [
    {qu: "¿Cuál de estas películas la dirigió  Jean-Luc Godard?",
    an: [ "Los cuatrocientos golpes", "Vivir su vida", "Cuento de primavera", "Noche y niebla"],
    ok: 1},

    {qu: "¿En qué thriller setentero aparece un monólogo con la pregunta '¿hablas conmigo?'?",
    an: [ "La conversación", "Chacal", "Taxi Driver", "El cabo del miedo"],
    ok: 2},

    {qu: "¿Cuál de estas producciones de Haneke es más antigua?",
    an: [ "La pianista", "Funny Games", "Código desconocido", "El séptimo continente"],
    ok: 3},

    {qu: "¿Cuál de estas películas la protagoniza Klaus Kinski?",
    an: [ "Stroszek", "Fitzcarraldo", "Alicia en las ciudades", "El matrimonio de Maria Braun"],
    ok: 1},

    {qu: "¿En cuál de las siguientes películas aparece una cartera con la inscripción 'BAD MOTHERFUCKER'?",
    an: [ "Pulp Fiction", "El gran Lebowski", "Jackie Brown", "Sospechosos habituales"],
    ok: 2}

]

const WRAPPERTIT = document.querySelector(".wrapperTitle");
const WRAPPERANS = document.querySelector(".wrapperAnsw");


// ----------------------------------------------- REMOVE FUNCTION
// const BOTON = document.querySelector(".btn");

// BOTON.addEventListener("click", function(){
//     let borrables = document.querySelectorAll(".quest");
//     for (let i = 0; i < borrables.length; i++) {
//         borrables[i].remove(); 
//     }
// });

// ------------------------------------------------------GENERATE

let position = 0;

function printQuestion(question){
    let arrayQuestEl = [];
    let title = document.createElement("h2");
    let content = document.createTextNode(question.qu);
    title.appendChild(content);
    WRAPPERTIT.appendChild(title);
    arrayQuestEl.push(title)

    let arrayAns = question.an;
    for (let i = 0; i < arrayAns.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("id", i);
        input.setAttribute("value", i);
        input.setAttribute("name", "answer");
        input.setAttribute("type", "radio");
        WRAPPERANS.appendChild(input);
        arrayQuestEl.push(input);
        
        let label = document.createElement("label");
        let labelCont = document.createTextNode(arrayAns[i]);
        label.setAttribute("for", i);
        label.appendChild(labelCont);
        label.addEventListener("click",() => evaluateAnswer(question.ok, i, label, arrayQuestEl));
        WRAPPERANS.appendChild(label);
        arrayQuestEl.push(label);
    }
}

printQuestion(questions[position]);

// ----------------------------------------------------------EVALUATE

// let answers = document.querySelectorAll("input");

function evaluateAnswer(correctAnsw, answer, label, arrayQuestEl) {
    if (correctAnsw === answer) {
        // answer.classList.add("right")
        position++;
        setTimeout(function(){ remover(arrayQuestEl) }, 1500);
        if (position < questions.length)
        setTimeout(function(){ printQuestion(questions[position]) }, 1500);

    }else{
        answer.innerText("wrong")
    }
}

function remover(arrayQuestEl){
    for (let i = 0; i < arrayQuestEl.length; i++) {
        arrayQuestEl[i].remove();        
    }
}
