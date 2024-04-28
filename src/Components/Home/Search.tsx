import Modal from "../utils/Modal";
import { CiSearch } from "react-icons/ci";

interface Props {
    modal: boolean;
    setModal: (value: boolean) => void;
}

const Search = ({ modal = true, setModal }: Props) => {


    return (
        <>
            <div className="relative">
                <div className=" flex items-center gap-1 bg-gray-100 px-2 rounded-full z-10 w-full">
                    <span className="text-2xl text-gray-400">
                        <CiSearch />
                    </span>
                    <input
                        className="bg-transparent outline-none py-[0.7rem] text-sm w-full"
                        type="text"
                        placeholder="Search Bloggr"

                    />
                </div>
                <Modal modal={modal} setModal={setModal}> {/* Open modal only if 'modal' prop is true and input is focused */}
                    {/* Modal content */}
                    {
                        modal && <div className="flex"> {/* Visible on small screens */}
                            <input
                                className="bg-transparent outline-none py-[0.7rem] text-sm w-full"
                                type="text"
                                placeholder="Search Bloggr"
                                autoFocus={true} // Auto focus on the input field when modal is open
                                onBlur={() => setModal(false)}
                            />
                        </div>
                    }



                </Modal >
            </div >
        </>
    );
};

export default Search;
