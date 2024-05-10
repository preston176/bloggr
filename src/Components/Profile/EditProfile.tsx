import { LiaTimesSolid } from 'react-icons/lia';
import Modal from './../utils/Modal';
import { useEffect, useRef, useState } from 'react';
import { UserDetails } from '../../Context/Context';
import { toast } from 'react-toastify';
import { db, storage } from './../../firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import Loading from '../Loading/Loading';

const EditProfile = ({ editModal, setEditModal, getUserData, setModal }: {
    editModal: boolean;
    setEditModal: (value: boolean) => void;
    getUserData: UserDetails | undefined;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
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
    const [loading, setLoading] = useState<boolean>(false);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (form.username === "" || form.bio === "") {
                toast.error("Please fill all fields");
                return;
            }

            setLoading(true);
            // Check if userImg is not null before uploading
            if (form.userImg) {
                // Upload image to storage
                const storageRef = ref(storage, `image/${form.userImg.name}`);
                await uploadBytes(storageRef, form.userImg);

                // Get image download URL
                const imageUrl = await getDownloadURL(storageRef);

                // Update user data in the database with image URL
                const docRef = doc(db, "users", getUserData?.userId || "");
                await updateDoc(docRef, {
                    username: form.username,
                    bio: form.bio,
                    userImg: imgUrl ? imageUrl : form.userImg,
                });
            } else {
                // Update user data in the database without image URL
                const docRef = doc(db, "users", getUserData?.userId || "");
                await updateDoc(docRef, {
                    username: form.username,
                    bio: form.bio,
                });
            }

            setLoading(false);
            setEditModal(false);
            setModal(false)
            toast.success("Profile updated successfully");
        } catch (error) {
            console.error("Error updating profile: ", error);
            toast.error("An error occurred while updating your profile");
            setModal(false);
        }
    };



    return (
        <Modal modal={editModal} setModal={setEditModal}>

            {loading ? <Loading /> : <form onSubmit={handleSubmit} className="center w-[95%] md:w-[45rem] bg-white mx-auto shadows my-[1rem] z-20 mb-[3rem] p-[2rem]">
                {/* head */}
                <div className="flex items-center justify-between">
                    <h2 className='font-bold text-xl'>Profile Info</h2>
                    <button type='button' className='text-xl' onClick={() => setEditModal(false)}><LiaTimesSolid /></button>
                </div>
                {/* body */}
                <section className='mt-6'>
                    <p className="pb-3 text-sm text-gray-500">Photo</p>
                    <div className="flex gap-[2rem]">
                        <div className="w-[5rem]">
                            <img
                                className='min-h-[5rem] min-w-[5rem] object-cover border border-gray-400 rounded-full'
                                src={getUserData ? getUserData?.userImg : form.userImg ? URL.createObjectURL(form.userImg) : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"}
                                alt="profile-image"
                            />


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
                    <p className='text-sm text-gray-600 pt-2'>This will appear on your Profile page, as well as your byline, and in your responses. {form.username.length}/50</p>
                    <label className='pb-3 block' htmlFor="">Bio</label>
                    <input
                        value={form.bio}
                        onChange={(e) => setForm({
                            ...form,
                            bio: e.target.value

                        })}
                        className='p-1 border-b border-black w-full outline-none' type="text" placeholder='Your Bio ...' maxLength={50} />
                    <p className='text-sm text-gray-600 pt-2'>This will appear on your Profile page and next to your stories. {form.bio.length}/160</p>
                </section>
                {/* footer */}
                <div className="flex items-center justify-end gap-4 pt-[2rem]">
                    <button onClick={() => {
                        setEditModal(false)
                    }} className='border border-green-600 py-2 px-5 rounded-full text-green-600' type='button'>Cancel</button>
                    <button className='border border-green-600 py-2 px-5 rounded-full bg-green-800 text-white' type='submit' >Save Changes</button>
                </div>
            </form>}

        </Modal >
    )
}

export default EditProfile
