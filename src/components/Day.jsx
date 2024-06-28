
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {getNameDay} from "../helpers/getNameDay.js"
import {getDate} from "../helpers/getDate.js"

// eslint-disable-next-line react/prop-types
export const Day = ({dateM, setDateM}) => {
    
    const addDays =()=>{
        let addDate = new Date(dateM);
        addDate.setDate(addDate.getDate() + 1);
        return addDate
    }
    const restDays = ()=>{
        let restDays = new Date(dateM);
        restDays.setDate(restDays.getDate() - 1);
        return restDays
    }

    const handleLeft = () => {
        
        setDateM(restDays(dateM))
    }
    const handleRight = () => {
        
        setDateM(addDays(dateM))
        
    }
    return (
        <section className='flex justify-center items-center gap-8 my-20 [&>p]:text-gray02'>
            <p className='cursor-pointer'
                onClick={handleLeft}>
                <FaAngleLeft  size={20}/>
            </p>
            <div className="w-[150px]">
                <h4 className="text-xl md:text-3xl font-medium">{getNameDay(dateM)}</h4>
                <p className="text-gray02"> {getDate(dateM)}</p>
            </div>
            <p className='cursor-pointer'
                onClick={handleRight}>
                <FaAngleRight size={20}/>
            </p>
        </section>
    )
}
