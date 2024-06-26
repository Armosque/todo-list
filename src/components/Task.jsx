import { BsThreeDots } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export const Task = ({task}) => {
    console.log(task);
    return (
        <div  className="flex justify-between gap-4 items-center my-4">
                <span className="cursor-pointer">
                    <input type ='checkbox' className="checkbox"/>
                </span>
                <p className="grow text-left">New {task.tasks}</p>
                <span className="cursor-pointer">
                    <BsThreeDots />
                </span>
            </div>
    )
}
