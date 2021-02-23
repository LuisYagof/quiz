const DATABASE = [
    {qu: "¿Cuál de estas películas la dirigió Jean-Luc Godard?",
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
    ok: 0}

]

const WRAPPERTIT = document.querySelector(".wrapperTitle");
const WRAPPERANS = document.querySelector(".wrapperAnsw");
let counter = 5;
let position = 0;

// ------------------------------------------------------SHUFFLE----------------------------------------

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
shuffle(DATABASE);

// ------------------------------------------------------GENERATE---------------------------------------

function printQuestion(question){
    let questionElements = [];
    let title = document.createElement("h2");
    let content = document.createTextNode(question.qu);
    title.appendChild(content);
    WRAPPERTIT.appendChild(title);
    questionElements.push(title)

    let arrayAns = [];
    for (let i = 0; i < question.an.length; i++) {
        arrayAns.push({
            pos: i,
            text: question.an[i]
        });
    }

    shuffle(arrayAns);
    for (let i = 0; i < arrayAns.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("id", i);
        input.setAttribute("value", i);
        input.setAttribute("name", "answer");
        input.setAttribute("type", "radio");
        WRAPPERANS.appendChild(input);
        questionElements.push(input);
        
        let label = document.createElement("label");
        let labelCont = document.createTextNode(arrayAns[i].text);
        label.setAttribute("for", i);
        label.appendChild(labelCont);

        label.addEventListener("click",() => {
            if (!label.classList.contains("clicked")) {
                evaluateAnswer(question.ok, questionElements, label, arrayAns[i].pos)
            }
            });

        WRAPPERANS.appendChild(label);
        questionElements.push(label);
    }
}

printQuestion(DATABASE[position]);

// ----------------------------------------------------------EVALUATE-------------------------------------

function evaluateAnswer(correctAnsw, nodes, answer, selected) {
    answer.classList.add("checked");
    answer.classList.add("clicked");
    
    setTimeout( function() {
        if (correctAnsw === selected) {
            answer.classList.remove("checked");
            answer.classList.add("right");
            position++;
            counter++;

            next(nodes);
            
        }else{
            answer.classList.remove("checked");
            answer.classList.add("wrong");
            counter= counter-1;
        }
    }, 500);
}

// ------------------------------------------------------NEXT QUESTION-----------------------------

function next(nodes) {
    setTimeout(() => remover(nodes), 1000);
    if (position < DATABASE.length) {
        setTimeout(() => printQuestion(DATABASE[position]), 1000);
    }else{
        setTimeout(() => count(counter), 1000);}
}

function remover(nodes){
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove();        
    }
}

// ------------------------------------------------------SCORE-------------------------------------

function count(counter) {
    if (counter > 6) {
        let farewell = document.createElement("h2");
        let farewellText = document.createTextNode(`Tu puntuación ha sido de ${counter} sobre 10. Nivel: final-boss de Filmin. Eres un máquina`);
        farewell.appendChild(farewellText);
        WRAPPERTIT.appendChild(farewell);
    } else if (counter < 2) {
        let farewell = document.createElement("h2");
        let farewellText = document.createTextNode(`Tu puntuación ha sido de ${counter} sobre 10. Nivel: sácate el abono de la filmoteca`);
        farewell.appendChild(farewellText);
        WRAPPERTIT.appendChild(farewell);

    } else {
        let farewell = document.createElement("h2");
        let farewellText = document.createTextNode(`Tu puntuación ha sido de ${counter} sobre 10. Nivel: gafapasta amateur`);
        farewell.appendChild(farewellText);
        WRAPPERTIT.appendChild(farewell);
    }    
}