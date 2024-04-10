import { FcGoogle } from "react-icons/fc";
import Button from "../../utils/AuthButton/Button";
import Modal from "../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia"
import { AiOutlineMail } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from '../../../firebase/firebase.ts';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface props {
    modal: boolean;
    setModal: (value: boolean) => void;
}

const Auth = ({ modal, setModal }: props) => {
    const [createUser, setCreateUser] = useState<boolean>(true);
    const [signReq, setSignReq] = useState<string>('');
    const navigate = useNavigate();

    const googleAuthentication = async () => {
        try {
            const createUser = await signInWithPopup(auth, provider)
            const newUser = createUser.user;

            const ref = doc(db, "users", newUser.uid);
            const userDoc = await getDoc(ref);

            // check if the user exists in the database
            if (!userDoc.exists()) {
                await setDoc(ref, {
                    userId: newUser.uid,
                    username: newUser.displayName,
                    email: newUser.email,
                    userImg: newUser.photoURL,
                    bio: "Hey there! I'm using Bloggr",
                });
                navigate('/') // navigate to the home page
                toast.success("User signed in successfully") // notify the user that the user has been signed in successfully
                setModal(false) // close the modal
            }
        } catch (error) {
            toast.error("An error occurred while signing in the user");
            console.error(error)
        }
    }

    return (
        <Modal modal={modal} setModal={setModal}>
            <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadow ${modal ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-700`}>
                <button onClick={() => setModal(false)} className="absolute top-8 right-8 text-2xl hover:opacity-50">
                    <LiaTimesSolid />
                </button>
                <div className="flex flex-col justify-center items-center gap-[3rem]">
                    {
                        signReq === '' ? (
                            <>
                                <h2 className="text-2xl pt-[5rem]">{createUser ? "Join Today" : "Welcome Back"}</h2>
                                <div className="flex flex-col gap-2 w-fit mx-auto">
                                    <Button
                                        click={googleAuthentication}
                                        icon={<FcGoogle className="text-xl" />} text={`${createUser ? "Sign Up" : "Continue"} With Google`} />
                                    <Button
                                        click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                                        icon={<MdFacebook className="text-xl" />} text={`${createUser ? "Sign Up" : "Continue"} With FaceBook`} />
                                    <Button
                                        click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                                        icon={<AiOutlineMail className="text-xl" />} text={`${createUser ? "Sign Up" : "Continue"} With E-Mail`} />
                                </div>
                                <p>
                                    {createUser ? "Already have an account?" : "Don't have an account"} <button onClick={() => setCreateUser(prevstate => !prevstate)} className="text-blue-500 cursor-pointer font-bold">{createUser ? "Log In" : "Sign Up"}</button>
                                </p>
                            </>
                        ) : signReq === "sign-in" ?
                            (
                                <SignIn setSignReq={setSignReq} />
                            )
                            : signReq === "sign-up" ?
                                (<SignUp setSignReq={setSignReq} />) : null}
                </div>
            </section>
        </Modal>
    );
};

export default Auth;
