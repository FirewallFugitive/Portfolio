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
