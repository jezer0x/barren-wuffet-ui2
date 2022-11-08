interface ISubtab {
    title: string,
    isActive: boolean;
    setIsActive: VoidFunction;
}

const Subtab = ({ title, isActive, setIsActive }: ISubtab) => {
    return (
        <div className="mr-[8px] px-[12px] bg-black h-[29px] rounded-[7px]" onClick={() => setIsActive()}>
            <span className={`${isActive ? 'text-stab' : 'text-white'} text-[10px] font-ubuntu`}>
                { title }
            </span>
        </div>
    )
}

export default Subtab;