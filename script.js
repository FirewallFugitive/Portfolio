'use strict'

const creater = "Lucas Moons";
console.log(`${creater} = de creater van dit portfolio`);
let tasks = [];
let button = document.getElementById("taskbtn")
let btn2 = document.getElementById("btn2")
let name;
let categorie;
button.addEventListener('click',function(){
    let task = {
        name: document.getElementById("taskInput").value,
        categorie: document.getElementById("catInput").value
    }
    let {name,categorie} = task;
    tasks.push(task)
    let p = document.createElement("p")
    p.innerHTML = `- ${task.name} Categorie: ${task.categorie}`
    document.getElementById("tasksDiv").appendChild(p)
})
btn2.addEventListener('click',function(){
    console.log(tasks)
})

