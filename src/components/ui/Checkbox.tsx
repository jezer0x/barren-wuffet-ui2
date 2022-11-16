import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface ICheckbox {
    label: string;
}

const Checkbox = ({ label }: ICheckbox) => {
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <div className="flex items-center">
            <label htmlFor={label + '-checkbox'} className="flex items-center text-white cursor-pointer relative">
                <input onChange={() => setIsChecked((prev) => !prev)} 
                id={label + '-checkbox'} type="checkbox" 
                className="appearance-none w-[20px] h-[20px] text-white rounded-[5px]" 
                style={{ background: 'linear-gradient(47.02deg, #FF2F45 -31.87%, #FB9B20 97.44%)' }}/>
                <FaCheck className={`absolute text-white w-[15px] h-[15px] left-[2px] top-[3px] opacity-${isChecked ? '100': '0'}`}/>
            </label>
            <span className="font-ubuntu text-white font-normal ml-[15px] select-none">{label}</span>
        </div>
    );
  };

export default Checkbox;