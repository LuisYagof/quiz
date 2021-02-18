const questions = [
    {qu: "¿Cuál de estas películas la dirigió  Jean-Luc Godard?",
    an: [ "Los cuatrocientos golpes", "Vivir su vida", "Cuento de primavera", "Noche y niebla"],
    correct: 1},

    {qu: "¿De qué famoso thriller es la pregunta '¿hablas conmigo?'?",
    an: [ "La conversación", "Chacal", "Taxi Driver", "El cabo del miedo"],
    correct: 2}

]

const WRAPPERTIT = document.querySelector(".wrapperTitle");
const WRAPPERANS = document.querySelector(".wrapperAnsw");

// const BOTON = document.querySelector(".btn");

// BOTON.addEventListener("click", function(){
//     let borrables = document.querySelectorAll(".quest");
//     for (let i = 0; i < borrables.length; i++) {
//         borrables[i].remove(); 
//     }
// });

// ------------------------------------------------------GENERATE

let position = 0;

function printQuestions(question){
    let title = document.createElement("h2");
    let content = document.createTextNode(question[position].qu);
    title.appendChild(content);
    WRAPPERTIT.appendChild(title);

    let arrayAns = question[position].an;
    for (let i = 0; i < arrayAns.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("id", i);
        input.setAttribute("value", i);
        input.setAttribute("name", "answer");
        input.setAttribute("type", "radio");
        WRAPPERANS.appendChild(input);

        let labels = document.createElement("label");
        let labelsCont = document.createTextNode(arrayAns[i]);
        labels.setAttribute("for", i);
        labels.appendChild(labelsCont);
        WRAPPERANS.appendChild(labels);

    }

}

printQuestions(questions);

// --------------------------------------------EVALUATE

function evaluateAnswer(question) {
    let respuesta
    
}