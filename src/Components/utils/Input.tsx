
interface props {
    type: string;
    title: string;
}

const Input = ({ type, title }: props) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm capitalize">{title}</label>
            <input
                className="text-center border-b border-black outline-none"
                type={type}
                title={title}
            />
         
        </div>
    )
}

export default Input