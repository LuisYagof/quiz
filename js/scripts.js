const DATABASE = [
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


// ------------------------------------------------------GENERATE---------------------------------------


// la variable posición va a servir para indicar en qué objeto del array DATABASE nos encontramos. Y cambiar de pregunta 
let position = 0;

function printQuestion(question){
    // array "universal" en el que voy metiendo todos los elementos html generados, para poder borrarlos al acertar pregunta
    let questionElements = [];
    // genero la pregunta y le planto como texto el string del DATABASE. la pincho en mi subwrapper
    let title = document.createElement("h2");
    let content = document.createTextNode(question.qu);
    title.appendChild(content);
    WRAPPERTIT.appendChild(title);
    // meto lo generado en el array creado arriba
    questionElements.push(title)

    // creo un array en el que recojo las respuestas de la DATABASE
    let arrayAns = question.an;

    // recorro el array para generar los input+labels con sus valores correspondientes
    for (let i = 0; i < arrayAns.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("id", i);
        input.setAttribute("value", i);
        input.setAttribute("name", "answer");
        input.setAttribute("type", "radio");
        WRAPPERANS.appendChild(input);
        // meto lo generado en el array PREVIO***. Esto es para poder aplicar remove llegado el momento y que coja tanto título de pregunta como inputs+labels
        questionElements.push(input);
        
        // lo mismo con los labels
        let label = document.createElement("label");
        let labelCont = document.createTextNode(arrayAns[i]);
        label.setAttribute("for", i);
        label.appendChild(labelCont);
        // una vez creados los labels, les añado un callback para que, al clicarlos, se dispare la función de evaluar. Recojo como parámetros: valor de la respuesta correcta, index del array de RESPUESTAS, array "universal"
        label.addEventListener("click",() => evaluateAnswer(question.ok, i, questionElements, label));
        WRAPPERANS.appendChild(label);
        // de nuevo meto todo en el array "universal"
        questionElements.push(label);
    }
}

// disparo la función
printQuestion(DATABASE[position]);

// ----------------------------------------------------------EVALUATE-------------------------------------

// let answers = document.querySelectorAll("input");

function evaluateAnswer(correctAnsw, answer, questionElements, label) {
    label.classList.add("checked");
    setTimeout( function() {
        if (correctAnsw === answer) {
            label.classList.remove("checked");
            label.classList.add("right");
            position++;
            setTimeout(function(){ remover(questionElements) }, 1200);
            if (position < DATABASE.length)
                setTimeout(function(){ printQuestion(DATABASE[position]) }, 1200);

        }else{
            label.classList.remove("checked");
            label.classList.add("wrong");
        }
    }, 500);
}

function remover(questionElements){
    for (let i = 0; i < questionElements.length; i++) {
        questionElements[i].remove();        
    }
}