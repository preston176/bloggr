import Modal from "../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia"

const Auth = () => {
    return (
        <Modal>
            <section className="z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadow">
                <button className="absolute top-8 right-8 text-2xl hover:opacity-50">
                    <LiaTimesSolid />
                </button>
            </section>
        </Modal>
    );
};

export default Auth;
