# Portfolio
## Uitleg
- Event aan element koppelen

Event click gekoppeld aan btn2 zodat de totalDuration wordt berekend.
```
btn2.addEventListener('click', function(event) {
    event.preventDefault();
    totalDuration();
});
```
- Formulier valideren, callback, element selecteren, spread operator, destructuring

Om het formulier te valideren, heb ik een callback-functie genaamd validateForm gemaakt, die wordt opgeroepen bij onsubmit en showTasks als methode meekrijgt voor de callback. Elementen selecteren word gedaan voor de info van de task te kunnen gaan ophalen (naam, categorie en duration).Spread operator word gebruikt om task toe te voegen aan array met andere taks. 
Destructuring heb ik gebruik voor de values van naam, categorie en duration in het object task.
```
<form id="taskForm" onsubmit="validateForm(showTasks); return false">
```
```
function validateForm(callback) {
    let x = document.forms["taskForm"]["taskInput"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else{
        let task = {
            name: document.getElementById("taskInput").value,
            categorie: document.querySelector("input[name='taskType']:checked").value,
            duration: document.getElementById("hourInput").value + ":" +document.getElementById("minInput").value
        }
        let {name,categorie,duration} = task;
        tasks = [...tasks, task];
        saveTasksToLocalStorage();
        callback();
    }
}
```
- Rest operator, iteration over een array, arrow function

De rest operator word gebruikt voor het aanmaken van een copy van tasks.
Als iteration over een array heb ik gerbuik gemaakt van een for each waarbij voor elke task in tasksCopy een p element wordt aangemaakt met de info van deze task. Bij de iteration wordt ook gebruik gemaakt van een arrow function.
```
function showTasks() {
    let tasksDiv = document.getElementById("tasksDiv");
    tasksDiv.innerHTML = '';
    let tasksCopy = [...tasks];
    tasksCopy.forEach(task => {
        let p = document.createElement("p");
        p.innerHTML = `- ${task.name} Categorie: ${task.categorie} Duration ${task.duration}`;
        tasksDiv.appendChild(p);
    });
}
```
- Promise, async, await, fetch

Ik heb gebruik gemaakt van een async functie fetchRecipes wat ervoor zorgt dat ik ook een promise terug krijg. Await gebruikte ik om te wachten op de fetch en dan nog eens bij data omdat de werkelijke data nog niet in de response zit.
```
async function fetchRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIkey}&number=1`);
    const data = await response.json();
    return data.recipes;
}
```
- Consumer methods

In fetchRecipes heb ik de consumer methods .then en .catch gebruikt.
```
fetchRecipes()
        .then(recipes => {
            recipes.forEach(recipe => {
                let p = document.createElement("p")
                p.innerHTML = `${recipe.title}`
                let img = document.createElement("img")
                img.onload = function() {
                    img.classList.add("loaded");
                };
                img.src = recipe.image;
                document.getElementById("recipe").appendChild(p)
                document.getElementById("recipe").appendChild(img)
            });
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
        });
```
- Self executing function, template literal, gebruik constante, manipuleren element

Hier heb ik gebruik gemaakt van een self executing function om op elke pagina mijn footer aan te passen. Hierbij heb ik ook gebruik gemaakt van een constante en template literals om deze constante te gebruiken in de string voor mijn footer.
```
(() => {
    const creater = "Lucas Moons";
    const footer = document.getElementById("footer");
    footer.innerHTML = `Portfolio van ${creater}`;
})();
```
- JSON manipuleren en weergeven, gerbuik local storage

In de functie saveTaskToLocalStorage worden de tasks in de local storage opgeslagen als JSON (waardoor er dus ook aan JSON manipulatie wordt gedaan. Vervolgens worden deze tasks terug uit local storage gehaald en weergegeven wanneer er op de knop storageButton wordt geklikt.
```
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const storageButton = document.getElementById('storage');

storageButton.addEventListener('click', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskList = document.getElementById('taskList');

    if (tasks && tasks.length > 0) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const { name, categorie, duration } = task;
            const taskInfo = `${name}, ${categorie}, ${duration}`;
            taskList.innerHTML += `<li>${taskInfo}</li>`;
        });
    } else {
        console.log('No tasks found in local storage');
    }
});
```
- Basis CSS animatie

Als basis CSS animatie heb ik ervoor gezorgd dat de afbeelding langzaam aan tevoorschijn komt in plaats van dat het er direct staat.
```
img {
    max-height: 350px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

img.loaded {
    opacity: 1;
}
```
- Gebruik flexbox of CSS grid

Ik heb gebruik gemaakt op onder andere mijn form zodat de verschillende items hierin onder elkaar komen (column).
```
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
}
```
## Resources
https://www.w3schools.com/js/js_validation.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
https://www.w3schools.com/Js/js_arrow_function.asp
https://www.w3schools.com/js/js_callback.asp
https://www.w3schools.com/JS/js_array_iteration.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
https://www.w3schools.com/jsref/prop_win_localstorage.asp
https://www.w3schools.com/js/js_json.asp
https://www.w3schools.com/js/js_async.asp
https://www.geeksforgeeks.org/what-is-the-purpose-of-self-executing-function-in-javascript/
https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/


