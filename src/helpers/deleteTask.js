

export const deleteTask = (tasks, id) => {
    console.log(tasks);
    return tasks.filter(task => task.id !== id)
}
