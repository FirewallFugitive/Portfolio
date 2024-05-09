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