# Portfolio
Portfolio web advanced
- Elementen selecteren:
```
let button = document.getElementById("taskbtn");
name: document.getElementById("taskInput").value,
categorie: document.querySelector("input[name='taskType']:checked").value,
duration: document.getElementById("hourInput").value + ":" +document.getElementById("minInput").value
let tasksDiv = document.getElementById("tasksDiv");
```
- Elementen manipuleren:
```
tasksCopy.forEach(task => {
        let p = document.createElement("p");
        p.innerHTML = `- ${task.name} Categorie: ${task.categorie} Duration ${task.duration}`;
        tasksDiv.appendChild(p);
});
```
- Event aan element koppelen
```
btn2.addEventListener('click', function(event) {
    event.preventDefault();
    totalDuration();
});
```
- Formulier valideren
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
- Gebruiken van een constante
```
(() => {
    const creater = "Lucas Moons";
    const footer = document.getElementById("footer");
    footer.innerHTML = `Portfolio van ${creater}`;
})();
```
- Gebruiken template literals
```
footer.innerHTML = `Portfolio van ${creater}`;
```
- Destructuring
```
let task = {
            name: document.getElementById("taskInput").value,
            categorie: document.querySelector("input[name='taskType']:checked").value,
            duration: document.getElementById("hourInput").value + ":" +document.getElementById("minInput").value
}
let {name,categorie,duration} = task;
```
- Spread and Rest operator
```
tasks = [...tasks, task];

let tasksCopy = [...tasks];
```
- Iteration over een array
```
tasks.forEach(task => {
            const { name, categorie, duration } = task;
            const taskInfo = `${name}, ${categorie}, ${duration}`;
            taskList.innerHTML += `<li>${taskInfo}</li>`;
});
```
- Arrow function
```
let Duration = (h,m) => {
    let result = (h*60)+m;
    return result;
}
```
- Callback function
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
- Promise, async, await, fetch
```
async function fetchRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIkey}&number=1`);
    const data = await response.json();
    return data.recipes;
}
```
- Consumer methods
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
- Self executing function
```
(() => {
    const creater = "Lucas Moons";
    const footer = document.getElementById("footer");
    footer.innerHTML = `Portfolio van ${creater}`;
})();
```
- JSON manipuleren en weergeven, gerbuik local storage
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
```
img {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

img.loaded {
    opacity: 1;
}
```
- Gebruik flexbox of CSS grid
```
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
}
```



