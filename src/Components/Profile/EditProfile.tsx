import { LiaTimesSolid } from 'react-icons/lia';
import Modal from './../utils/Modal';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { UserDetails } from '../../Context/Context';
import { toast } from 'react-toastify';
import ToastNotifier from '../Common/ToastNotifier';

const EditProfile = ({ editModal, setEditModal, getUserData }: {
    editModal: boolean;
    setEditModal: (value: boolean) => void;
    getUserData: UserDetails | undefined;
}) => {
    const imgRef = useRef<HTMLInputElement>(null)
    const openFile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault;
        imgRef?.current?.click()
    }
    const [imgUrl, setImgUrl] = useState<string>("")
    const [form, setForm] = useState<{ username: string, userImg: File | null, bio: string }>({
        username: "",
        userImg: null,
        bio: ""
    })

    // check if there is data in the database and set the form state
    useEffect(() => {
        const fetchUserData = () => {
            if (getUserData) {
                setForm({
                    username: getUserData.username,
                    userImg: null,
                    bio: getUserData.bio
                })
            } else {
                setForm({
                    username: "",
                    userImg: null,
                    bio: ""
                })

            }
        }
        fetchUserData()
    }, [getUserData]);

    // function to handle form submission

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form["username"] === "" || form["bio"] === "") {
            toast.error("Please fill all fields")
            return;
        }
        console.log(form)
    }

    return (
        <Modal modal={editModal} setModal={setEditModal}>
            <ToastNotifier />
            <form onSubmit={handleSubmit} className="center w-[95%] md:w-[45rem] bg-white mx-auto shadows my-[1rem] z-20 mb-[3rem] p-[2rem]">
                {/* head */}
                <div className="flex items-center justify-between">
                    <h2 className='font-bold text-xl'>Profile Info</h2>
                    <button className='text-xl' onClick={() => setEditModal(false)}><LiaTimesSolid /></button>
                </div>
                {/* body */}
                <section className='mt-6'>
                    <p className="pb-3 text-sm text-gray-500">Photo</p>
                    <div className="flex gap-[2rem]">
                        <div className="w-[5rem]">
                            <img className='min-h-[5rem] min-w-[5rem] object-cover border border-gray-400 rounded-full' src={imgUrl ? imgUrl : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"} alt="profile-image" />
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    e.preventDefault(); // Prevent default form submission behavior
                                    if (e.target.files && e.target.files.length > 0) {
                                        const file = e.target.files[0];
                                        const imgUrl = URL.createObjectURL(file);
                                        setImgUrl(imgUrl);
                                        setForm({ ...form, userImg: e.target.files[0] });
                                    }
                                }}
                                ref={imgRef}
                                type="file"

                                accept="image/jpg, image/png, image/jpeg"
                                hidden
                            />
                        </div>
                        <div>
                            <div className="flex gap-4 text-sm">
                                <button onClick={openFile} type='button' className='text-green-600'>Update</button>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setForm({
                                            ...form,
                                            userImg: null
                                        });
                                        setImgUrl("");
                                    }}
                                    className='text-red-600'
                                >
                                    Remove
                                </button>

                            </div>
                            <p className='w-full sm:w-[20rem] text-gray-500 text-sm pt-2'>Recommended: Square PNG, JPG or JPEG</p>
                        </div>
                    </div>
                </section>
                {/* prof edit form */}
                <section className='pt-[1rem] text-sm'>
                    <label className='pb-3 block' htmlFor="">Name</label>
                    <input
                        value={form.username}
                        onChange={(e) => setForm({
                            ...form,
                            username: e.target.value

                        })}
                        className='p-1 border-b border-black w-full outline-none' type="text" placeholder='Username ...' maxLength={50} />
                    <p className='text-sm text-gray-600 pt-2'>This will appear on your Profile page, as well as your byline, and in your responses. 10/50</p>
                    <label className='pb-3 block' htmlFor="">Bio</label>
                    <input
                        value={form.bio}
                        onChange={(e) => setForm({
                            ...form,
                            bio: e.target.value

                        })}
                        className='p-1 border-b border-black w-full outline-none' type="text" placeholder='Your Bio ...' maxLength={50} />
                    <p className='text-sm text-gray-600 pt-2'>This will appear on your Profile page and next to your stories. 42/160</p>
                </section>
                {/* footer */}
                <div className="flex items-center justify-end gap-4 pt-[2rem]">
                    <button onClick={() => {
                        setEditModal(false)
                    }} className='border border-green-600 py-2 px-5 rounded-full text-green-600' type='button'>Cancel</button>
                    <button className='border border-green-600 py-2 px-5 rounded-full bg-green-800 text-white' type='submit' >Save Changes</button>
                </div>
            </form>

        </Modal >
    )
}

export default EditProfile