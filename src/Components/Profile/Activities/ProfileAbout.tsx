import { UserDetails } from "../../../Context/Context";

const ProfileAbout = ({ getUserData, setEditModal }: {
  getUserData: UserDetails | undefined;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className="w-full">
      <p className="text-2xl first-letter::uppercase">
        {getUserData?.bio || getUserData?.username + "No bio available"}
      </p>
      <div className="text-right">

        <button
          onClick={() => setEditModal(true)}
          className="border border-black py-2 px-5 rounded-full text-black mt-[3rem]">Edit</button>
      </div>
    </div>
  )
}

export default ProfileAbout