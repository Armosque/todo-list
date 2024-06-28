

export const taskDone = (id, tasks) => {
    
    if (!Array.isArray(tasks)) {
        return tasks; // Si tasks no es un array, retornar como está
    }

    const newTasks = tasks.map(item => {
        const idTask = item.id;
        let task = { ...item }; // Usar spread operator para copiar el objeto
        if (id === idTask) {
            task.done = !item.done; // Invertir el estado done
        }
        return task;
    });

    return newTasks;
}
