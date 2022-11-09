import { useState } from "react";

interface IPaymentField {
    title: string;
    icon?: string;
}

export default function PaymentField(props: IPaymentField) {
    const [value, setValue] = useState('')

    return (
        <div className={`flex flex-col`}>
            <span className="font-ubuntu font-normal text-[10px] text-dtext">
                {props.title}
            </span>
            <div className="h-[47px] border-[1px] border-[#575771] rounded-[10px] flex items-center justify-between pl-[15px] pr-[9px]">
                <input type="text" className="bg-transparent outline-none font-ubuntu text-[14px] text-white w-10/12" 
                    onChange={(e) => setValue(e.target.value)}/>
                <div className="flex flex-col h-full pb-[2px] items-center justify-end">
                    {
                        props.icon && <img src={require(`../../img/icons/${props.icon}`)} className="pb-[4px]" alt="icon" />
                    }
                    <span className="font-ubuntu font-normal text-[10px] text-dtext">MAX</span>
                </div>
            </div>
        </div>
    )
}