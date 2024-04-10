import Input from "../../utils/Input"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { useState } from "react";
import { Form } from "./SignUp";

interface props{
    setSignReq: React.Dispatch<React.SetStateAction<string>>;

}

const SignIn = ({ setSignReq }: props) => {
    const [form, setForm] = useState<Form>({
        email: '',
        password: '',

    })

    return (
        <div className="size mt-[6rem] text-center">
            <h2 className="text-3xl">Sign In with E-Mail</h2>
            <p className="w-full sm:w-[25rem] mx-auto py-[3rem]">Enter your E-Mail address</p>
            <form className="flex flex-col gap-4">
                <Input form={form} setForm={setForm} type="email" title="email" />
                <Input form={form} setForm={setForm} type="password" title="password" />
                <button className="px-4 py-1 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto">Sign In</button>
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

export default SignIn
