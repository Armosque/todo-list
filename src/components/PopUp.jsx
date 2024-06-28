
import {deleteTask} from '../helpers/deleteTask.js';
// eslint-disable-next-line react/prop-types, no-unused-vars
export const PopUp = ({idTask, tasks, setTasks}) => {
    console.log(tasks);
    const handleDelete =(e)=>{

        e.stopPropagation();
        setTasks(prevTasks => deleteTask(prevTasks, idTask));
    }
    return (
        <div 
        className='popup-delete bg-gray06 p-2 rounded absolute right-0 top-[25px] w-[100px] z-10'>
            <p
                onClick={handleDelete}>
                Delete task
            </p>
        </div>
    )
    
}
