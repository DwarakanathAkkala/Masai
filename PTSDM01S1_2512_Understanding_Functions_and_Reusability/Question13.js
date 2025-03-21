let tasks = ["Complete Assignments", "Attend Sessions", "Practice DSA", "Exercise", "Read books"];

// Remove the first task from the list 
for (let i = 0; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
}

tasks.length -= 1; // Remove the last duplicate element 

tasks.length += 2; // Increase array size for the new tasks
for (let i = tasks.length - 1; i >= 2; i--) {
    tasks[i] = tasks[i - 2]; // Move all the elements in the array to right with two available slots
}

// Add two new high-priority tasks to the beginning of the list.
tasks[0] = "Prepare for Hukumu Interview";
tasks[1] = "Check email for any Masai Updates";

// Replace the last task in the list with a new task
tasks[tasks.length - 1] = "Revise the previous Sprint topics";

// Log the updated task list after all operations
for (i = 0; i < tasks.length; i++) {
    console.log(i + ". " + tasks[i]);
}