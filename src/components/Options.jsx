
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import {PopUp} from "./PopUp"
// eslint-disable-next-line react/prop-types
export const Options = ({idTask, tasks, setTasks}) => {

    const [open, setOpen] = useState(false)
    const handleOption=()=>{

        setOpen(curent => !curent)
    }
    return (
        <span className="relative"
            onClick={handleOption}>
            <BsThreeDots />
            {open && <PopUp idTask={idTask} tasks={tasks} setTasks={setTasks}/>}
        </span>
    )
}
