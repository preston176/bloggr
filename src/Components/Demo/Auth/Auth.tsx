import { FcGoogle } from "react-icons/fc";
import Button from "../../utils/AuthButton/Button";
import Modal from "../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia"
import { AiOutlineMail } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
    const [createUser, setCreateUser] = useState<boolean>(false);
    const [signReq, setSignReq] = useState<string>('');
    return (
        <Modal>
            <section className="z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadow">
                <button className="absolute top-8 right-8 text-2xl hover:opacity-50">
                    <LiaTimesSolid />
                </button>
                <div className="flex flex-col justify-center items-center gap-[3rem]">
                    {
                        signReq === '' ? (
                            <>
                                <h2 className="text-2xl pt-[5rem]">{createUser ? "Join Today" : "Welcome Back"}</h2>
                                <div className="flex flex-col gap-2 w-fit mx-auto">
                                    <Button
                                        click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                                        icon={<FcGoogle className="text-xl" />} text={`${createUser ? "Sign Up" : "Continue"} With Google`} />
                                    <Button
                                        click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                                        icon={<MdFacebook className="text-xl" />} text={`${createUser ? "Sign Up" : "Continue"} With FaceBook`} />
                                    <Button
                                        click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                                        icon={<AiOutlineMail className="text-xl" />} text={`${createUser ? "Sign Up" : "Continue"} With E-Mail`} />
                                </div>
                                <p>
                                    {createUser ? "Don't have an account ?" : "Already have an account?"} <button onClick={() => setCreateUser(prevstate => !prevstate)} className="text-blue-500 cursor-pointer font-bold">{createUser ? "Sign Up" : "Log In"}</button>
                                </p>
                            </>
                        ) : signReq === "sign-in" ?
                            (
                                <SignIn />
                            )
                            : signReq === "sign-up" ?
                                (<SignUp />) : null}
                </div>
            </section>
        </Modal>
    );
};

export default Auth;
