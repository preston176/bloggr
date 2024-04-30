import { useState } from "react";
import ProfileHome from "./Activities/ProfileHome";
import ProfileLists from "./Activities/ProfileLists";
import ProfileAbout from "./Activities/ProfileAbout";
import Modal from "../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import EditProfile from "./EditProfile";
import { discoverActions } from './../../demoData';
import { UserDetails, useBlogContext } from "../../Context/Context";
import { useParams } from "react-router-dom";



const Profile = () => {
    const { allUsers } = useBlogContext();
    const userId = useParams().userId as string;

    const activities = [
        {
            title: "Home",
            comp: ProfileHome,
        },
        {
            title: "Lists",
            comp: ProfileLists,
        },
        {
            title: "About",
            comp: ProfileAbout,
        },
    ];
    const [currentActive, setCurrentActive] = useState(activities[0]);
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const getUserData = allUsers.find((user: UserDetails) => user.id === userId);
    return (
        <section className="size flex gap-[4rem] relative px-20 sm:px-10">
            {/* users activities  */}
            <div className="mt-[9rem] flex-[2]">
                <div className="flex items-end gap-4">
                    <h2 className="text-3xl sm:text-5xl font-bold capitalize">
                        {getUserData?.username}
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm">
                        Followers(10)
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                        Followings(20)
                    </p>
                </div>
                <div className="flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]">
                    {activities.map((item, i) => (
                        <div
                            key={i}
                            className={`py-[0.5rem]
            ${item.title === currentActive.title
                                    ? "border-b border-gray-500"
                                    : ""
                                }
            `}>
                            <button onClick={() => setCurrentActive(item)}>
                                {item.title}
                            </button>
                        </div>
                    ))}
                </div>
                <currentActive.comp
                    getUserData={getUserData}
                    setEditModal={setEditModal}
                />
            </div>
            {/* button to open the side bar  */}
            <button
                onClick={() => setModal(true)}
                className="fixed top-[8rem] right-0 w-[2rem] h-[2rem] bg-black text-white
        grid place-items-center">
                <IoSettingsSharp />
            </button>
            {/* user details  */}
            <Modal modal={modal} setModal={setModal}>
                <div className={`flex-[1] border-l border-gray-300 p-[2rem] z-10 fixed right-0 bottom-0 top-0 w-[18rem]  bg-white ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"} transition-all duration-500`}>

                    {/* icons to close out modal  */}
                    <div className="pb-4 text-right">
                        <button
                            onClick={() => setModal(false)}
                            className="inline-block">
                            <LiaTimesSolid />
                        </button>
                    </div>
                    {/* profile details  */}
                    <div className="sticky top-7 flex flex-col justify-between">
                        <img
                            className="w-[3.5rem] h-[3.5rem] object-cover rounded-full"
                            src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"}
                            alt="profile-img"
                        />
                        <h2 className="py-2 font-bold capitalize">
                            Preston m
                        </h2>
                        <p className="text-gray-500 first-letter:uppercase text-sm">
                            i am a web dev
                        </p>

                        <button
                            onClick={() => setEditModal(true)}
                            className="text-green-700 pt-6 text-sm w-fit">
                            Edit Profile
                        </button>

                        {/* nav  */}
                        <div className="flex-[1] flex items-center flex-wrap gap-3 pt-8">
                            {discoverActions.map((action: string, index: number) => (
                                <button key={index} className="text-xs text-black1">
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal>

            <EditProfile
                getUserData={getUserData}
                editModal={editModal}
                setEditModal={setEditModal}
            />

        </section>
    );
};

export default Profile;
