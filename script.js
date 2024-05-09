(()=>{
    const creater = "Lucas Moons";
    console.log(`${creater} = de creater van dit portfolio`);
})();

'use strict'
let tasks = [];
let button = document.getElementById("taskbtn")
let name;
let categorie;
let duration;

btn2.addEventListener('click', function(event) {
    event.preventDefault();
    totalDuration();
});


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
        tasks.push(task)
        saveTasksToLocalStorage();
        callback();
    }
  }

let Duration = (h,m) => {
    let result = (h*60)+m;
    return result;
}

function totalDuration(){
    let total = 0;
    tasks.forEach(task => {
        let time = task.duration; 
        const timeArray = time.split(":");
        total += Duration(parseInt(timeArray[0]), parseInt(timeArray[1]));
    });
    console.log(total + ' minuten');
}
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function showTasks() {
    let tasksDiv = document.getElementById("tasksDiv");
    tasksDiv.innerHTML = '';
    tasks.forEach(task => {
        let p = document.createElement("p");
        p.innerHTML = `- ${task.name} Categorie: ${task.categorie} Duration ${task.duration}`;
        tasksDiv.appendChild(p);
    });
}