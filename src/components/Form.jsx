import { CiTextAlignCenter } from "react-icons/ci";
import { useState } from 'react';

// eslint-disable-next-line react/prop-types, no-unused-vars
export const Form = ({dateM, tasks, setTasks}) => {

    const [valInput, setValInput]= useState('');
    //const idRef = useRef(0)
    const generateId = () => {
        const currentId = parseInt(localStorage.getItem('taskId'), 10) || 0;
        const newId = currentId + 1;
        localStorage.setItem('taskId', newId);
        return newId;
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        //idRef.current++;

        const newTask = {
            //id: idRef.current,
            id: generateId(),
            date: dateM,
            tasks: valInput,
            done: false
        }
        
        console.log("tarea creada");
    
        setTasks(prevTasks => [...prevTasks, newTask]);
    
        setValInput('');
    }       
    
    return (
        <section className="max-w-[450px] m-auto my-3 px-4">
            <div className="border border-black rounded bg-gray04 flex items-center p-2">
                <span className="mr-2 text-gray02">
                    <CiTextAlignCenter />
                </span>
                <form className="w-full"
                    onSubmit={handlerSubmit}>
                    <input 
                        className='w-full bg-transparent outline-none' 
                        type="text" 
                        value={valInput}
                        placeholder="Add a task..."
                        onChange={(e) => setValInput(e.target.value)} />
                </form>
                
            </div>
        </section>
    )
}
