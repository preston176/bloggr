import { useState } from "react"
import ProfileAbout from "./Activities/ProfileAbout"
import ProfileHome from "./Activities/ProfileHome"
import ProfileLists from "./Activities/ProfileLists"
import Modal from "../utils/Modal"
import { LiaTimesSolid } from "react-icons/lia"
import { RxAvatar } from 'react-icons/rx';
import { discoverActions } from "../../demoData"
import { IoSettingsSharp } from "react-icons/io5"

const Profile = () => {
    const activities = [
        {
            title: "Home",
            component: ProfileHome,
        },
        {
            title: "Lists",
            component: ProfileLists,
        },
        {
            title: "About",
            component: ProfileAbout
        },
    ]

    const [currentActivity, setCurrentActivity] = useState<{ title: string, component: () => JSX.Element }>(activities[0])
    const [modal, setModal] = useState<boolean>(false);

    return (
        <section className="size flex gap-[4rem] relative">
            {/* user activities */}
            <div className="mt-[9rem] flex-[2]">
                <div className="flex items-end gap-4">
                    <h2 className="capitalize font-bold sm:text5xl text-3xl">Preston M</h2>
                    <p className="text-gray-500 text-xs sm:text-sm">
                        Followers(10)
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                        Following(12)
                    </p>
                </div>
                <div className="flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]">
                    {
                        activities.map((activity, index) => (
                            <div className={`py-[0.5rem] ${activity.title === currentActivity.title ? "border-b border-gray-500" : ""} transition-all duration-300`}
                                key={index}>
                                <button onClick={() => setCurrentActivity(activity)}>{activity.title}</button>
                            </div>
                        ))
                    }
                </div>
                <currentActivity.component />
                {/* open sidebar btn */}
                <button
                    // toggle open sidebar
                    onClick={() => setModal(true)}
                    className="fixed top-[8rem] right-0 w-[2rem] h-[2rem] bg-black text-white grid place-items-center md:hidden">
                    <IoSettingsSharp />
                </button>
            </div>
            <Modal modal={modal} setModal={setModal}>
                <div className={`flex-[1] border-l border-gray-300 p-[2rem] z-10 fixed right-0 bottom-0 top-0 w-[18rem] bg-white md:relative
                ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"} transition-all duration-500
                `}>
                    {/* Close icon */}
                    <div className="pb-4 text-right">
                        <button
                            onClick={() => setModal(false)}
                            className="inline-block md:hidden">
                            <LiaTimesSolid />
                        </button>
                    </div>
                    {/* profile details */}
                    <div className="sticky top-7 flex flex-col justify-between">
                        <RxAvatar
                            className="w-[3.5rem] h-[3.5rem] object-cover rounded-full" />
                        <h2 className="py-2 font-bold capitalize">Preston M</h2>
                        <p className="text-gray-500 first-letter:uppercase text-sm">I am a web dev</p>
                        <button className="text-green-700 pt-6 text-sm w-fit">Edit Profile Details</button>
                        {/* navigation */}
                        <div className="flex-[1] flex items-center flex-wrap gap-3 pt-8">
                            {
                                discoverActions.map((action, index) => (
                                    <button key={index} className="text-xs text-black1">{action}</button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default Profile
