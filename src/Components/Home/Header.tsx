import { RxActivityLog } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import Modal from "../utils/Modal";
import { useState } from "react";
import UserModal from "./UserModal";
import { CiSearch } from "react-icons/ci";
import { UserDetails, useBlogContext } from "../../Context/Context";
import Loading from "../Loading/Loading";

const Header = () => {
    const { allUsers, userLoading, currentUser, setPublish } = useBlogContext();
    const [modal, setModal] = useState<boolean>(false);
    const [searchModal, setSearchModal] = useState<boolean>(false);
    const { pathname } = useLocation();

    // Fetch current user data
    const getUserData = allUsers.find((user: UserDetails) => user.id === currentUser?.uid);

    return (
        <header className="border-b border-gray-200">
            {userLoading && <Loading />}
            <div className="size h-[60px] flex items-center justify-between px-16">
                <div className="flex items-center gap-3">
                    <Link to={"/"}>
                        <span className="text-5xl"><RxActivityLog /></span>
                    </Link>
                    <div className="hidden sm:flex">
                        <Search modal={searchModal} setModal={setSearchModal} />
                    </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-7">
                    <span className="flex sm:hidden text-3xl text-gray-300 cursor-pointer" onClick={() => setSearchModal(true)}>
                        <CiSearch size={35} />
                    </span>
                    {pathname === "/write" ? (
                        <button onClick={() => setPublish(true)} className="btn !bg-green-700 !py-1 !text-white !rounded-full">
                            Publish
                        </button>
                    ) : (
                        <Link className="hidden md:flex items-center gap-1 text-gray-500" to={"/write"}>
                            <span className="text-3xl"><LiaEditSolid /></span>
                            <span className="text-sm mt-2">Start Writing</span>
                        </Link>
                    )}
                    <span className="text-3xl text-gray-500 cursor-pointer">
                        <IoMdNotificationsOutline />
                    </span>
                    <div className="flex items-center relative">
                        <img
                            src={getUserData?.userImg || "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"}
                            onClick={() => setModal(true)}
                            className="cursor-pointer w-[2.3rem] h-[2.3rem] object-cover"
                            alt="Profile"
                        />
                        <span className="text-gray-500 cursor-pointer" onClick={() => setModal(true)}>
                            <MdKeyboardArrowDown />
                        </span>
                        <Modal modal={modal} setModal={setModal}>
                            <div className={`${modal ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-500`}>
                                <UserModal setModal={setModal} />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
