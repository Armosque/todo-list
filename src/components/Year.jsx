import {getYearTasks} from '../helpers/getYearTasks'

// eslint-disable-next-line react/prop-types
export const Year = ({tasks}) => {

    const tasksYear = getYearTasks(tasks)
    console.log(tasksYear);
    return (
        <section className="p4">

        {
            tasksYear.map(task=>(
                <div 
                key={task.id}
                className='border border-black rounded bg-gray04 p-2 text-left mb-2 flex justify-between gap-2'>
            <div className='bg-gray05 p-1 rounded min-w-[78px] text-center h-fit'>
                <span className='text-xl'>{task.year}</span>    
                
            </div>
            <div className="flex flex-wrap gap-1 justify-end">

            {
                task.tasks.map(task=>(
                
                    <span 
                    key={task.id}
                    className='border border-black px-2 rounded bg-gray03 inline-block h-fit'>
                        {task.tasks}

                    </span>
                ))
            
        }
    
            </div>
        </div>

            
            ))
        
        }
        
    </section>
    )
}
