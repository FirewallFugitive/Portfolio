'use strict'

const creater = "Lucas Moons";
console.log(`${creater} = de creater van dit portfolio`);
let tasks = [];
let button = document.getElementById("taskbtn")
let name;
let categorie;
let duration;
btn2.addEventListener('click',function(){
    console.log(...tasks);
    totalDuration();
})
function validateForm() {
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
        tasks.push(task)
        let p = document.createElement("p")
        p.innerHTML = `- ${task.name} Categorie: ${task.categorie} Duration ${task.duration}`
        document.getElementById("tasksDiv").appendChild(p)
    }
  }

let Duration = (h,m) => {
    let result = (h*60)+m;
    return result;
}

function totalDuration(){
    let total;
    for(let i=0;i<tasks.length;i++){
        let time = tasks[i].duration; 
        const timeArray = time.split(":");
        total += Duration(parseInt(timeArray[0]),parseInt(timeArray[1]));
    }
    console.log(total);
}