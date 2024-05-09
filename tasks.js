// Get the storage button element
const storageButton = document.getElementById('storage');

// Add a click event listener to the storage button
storageButton.addEventListener('click', () => {
    // Retrieve the tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    // Check if there are tasks in local storage
    if (tasks && tasks.length > 0) {
        // Display the tasks
        tasks.forEach(task => {
            console.log(task); // Replace this with your own logic to display the tasks
        });
    } else {
        console.log('No tasks found in local storage');
    }
});