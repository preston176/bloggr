interface props {
    icon: JSX.Element;
    text: string;
}


const Button = ({ icon, text }: props) => {
    return (
        <div className='flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-150 hover:text-white hover:bg-black hover:border-none'>
            {icon} {text}
        </div>
    )
}

export default Button
