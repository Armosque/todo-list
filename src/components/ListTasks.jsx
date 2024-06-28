import {Task} from './Task'
import {getTaskDay} from '../helpers/getTaskDay'

// eslint-disable-next-line react/prop-types
export const ListTasks = ({dateM, tasks, setTasks}) => {

    const taskDay = getTaskDay(dateM, tasks)
    
    
    return (
        
        <section className='max-w-[450px] m-auto pb-7 pt-1 px-4'>
        {
            taskDay.map(item => (
                console.log(item),
                <Task 
                    key={item.id}
                    item={item}
                    tasks={tasks}
                    setTasks={setTasks}
                    />
                
            ))
            
        }
            
            
        </section>
    )
    
}
