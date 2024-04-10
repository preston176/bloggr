import { useState } from "react";
import Input from "../../utils/Input"
import { MdKeyboardArrowLeft } from "react-icons/md"

interface props {
    setSignReq: React.Dispatch<React.SetStateAction<string>>;
}


export interface Form {
    username?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

const SignUp = ({ setSignReq }: props) => {
    const [form, setForm] = useState<Form>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''

    })

    const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <div className="size mt-[6rem] text-center">
            <h2 className="text-3xl">Sign Up with E-Mail</h2>
            <p className="w-full sm:w-[25rem] mx-auto py-[3rem]">Enter your E-Mail address</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input form={form} setForm={setForm} type="username" title="username" />
                <Input form={form} setForm={setForm} type="email" title="email" />
                <Input form={form} setForm={setForm} type="password" title="password" />
                <Input form={form} setForm={setForm} type="confirmPassword" title="Re-Enter Password" />
                <button
                    onClick={() => handleSubmit}
                    className="px-4 py-1 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto">Sign Up</button>
            </form>
            <button
                onClick={() => setSignReq('')}
                className="flex m-auto items-center py-4 text-sm">
                <MdKeyboardArrowLeft />
                Go Back
            </button>
        </div>
    )
}

export default SignUp
