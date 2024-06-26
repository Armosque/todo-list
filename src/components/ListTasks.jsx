import {Task} from './Task'
import {getTaskDay} from "../helpers/getTaskDay"

// eslint-disable-next-line react/prop-types
export const ListTasks = ({dateM, tasks, setTasks}) => {

    const currentTasks = getTaskDay(dateM, tasks)
    return (
        <section className='max-w-[450px] m-auto pb-7 pt-1 px-4'>
        {currentTasks?.map((task) => (
            <Task key={task.id} 
            task={task} 
            tasks={tasks} 
            setTasks={setTasks}
            />
        
        ))}
        l

            

        </section>
    )
}
