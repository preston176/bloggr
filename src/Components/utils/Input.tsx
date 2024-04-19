import { Form } from "../Demo/Auth/SignUp";

interface props {
    type: string;
    title: string;
    form: Form;
    setForm: React.Dispatch<React.SetStateAction<Form>>;
}

const Input = ({ type, title, form, setForm }: props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [title]: e.target.value,
        });
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm capitalize">{title}</label>
            <input
                className="text-center border-b border-black outline-none"
                type={type}
                title={title}
                onChange={handleChange}
            />

        </div>
    )
}

export default Input