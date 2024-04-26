import { RxActivityLog, RxAvatar } from "react-icons/rx"
import { Link } from "react-router-dom"
import Search from "./Search"
import { LiaEditSolid } from "react-icons/lia"
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import Modal from "../utils/Modal"
import { useState } from "react"
import UserModal from "./UserModal"

const Header = () => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <header className="border-b border-gray-200">
            <div className="size h-[60px] flex items-center justify-between px-16">
                <div className="flex items-center gap-3">
                    <Link to={"/"}>
                        <span className="text-5xl"><RxActivityLog /></span>
                    </Link>
                    <Search />
                </div>
                {/* right */}
                <div className="flex items-center gap-3 sm:gap-7">
                    <Link className="hidden md:flex items-center gap-1 text-gray-500" to={""}>  <span className="text-3xl"> <LiaEditSolid /></span>
                        <span className="text-sm mt-2">Start Writing</span>
                    </Link>
                    <span className="text-3xl text-gray-500 cursor-pointer">
                        <IoMdNotificationsOutline />
                    </span>
                    <div className="flex items-center relative">
                        <RxAvatar className="cursor-pointer w-[2.3rem] h-[2.3rem] object-cover" size={35} color="gray" />
                        <span className="text-gray-500 cursor-pointer">
                            <MdKeyboardArrowDown />
                        </span>
                        {/* modal */}
                        <Modal modal={modal} setModal={setModal} >
                            <div className="">
                                <UserModal setModal={setModal} />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header

