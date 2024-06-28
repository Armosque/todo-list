/* eslint-disable react/prop-types */
import {Options} from './Options'
import {taskDone} from '../helpers/taskDone'

// eslint-disable-next-line react/prop-types
export const Task = ({item,tasks, setTasks}) => {

    console.log(item.id);
    
    const handleTaskDone = () => {
        // eslint-disable-next-line react/prop-types
        setTasks(taskDone(item.id, tasks))
    };
    return (
        <div  className="flex justify-between gap-4 items-center my-4">
        <span className="cursor-pointer">
            <input 
                type ='checkbox' 
                className="checkbox"
                onClick={handleTaskDone}
                defaultChecked={item.done}
                />
        </span>
        <p className="grow text-left">{item.tasks}</p>
        <span className="cursor-pointer">
            <Options idTask={item.id} tasks={tasks} setTasks={setTasks}/>
        </span>
    </div>
    )
}
