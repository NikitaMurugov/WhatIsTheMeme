const Button = ({ children, ...proops }) => {
    return (
        <>
            <div
                className="select-none transition-colors border-blue-900 border-[2px] bg-blue-400  rounded-lg p-3 text-blue-900
        text-center font-basic text-lg drop-shadow-sm hover:cursor-pointer hover:bg-blue-300 hover:border-blue-800 active:bg-blue-700"
                {...proops}>
                {children}
            </div>
        </>
    );
};

export default Button;
