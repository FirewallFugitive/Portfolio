'use strict'

let tasks = [];
let button = document.getElementById("taskbtn")
let btn2 = document.getElementById("btn2")
button.addEventListener('click',function(){
    let task = document.getElementById("taskInput").value 
    tasks.push(task)
    let p = document.createElement("p")
    p.innerHTML = task
    document.getElementById("tasksDiv").appendChild(p)
})
btn2.addEventListener('click',function(){
    console.log(tasks)
})