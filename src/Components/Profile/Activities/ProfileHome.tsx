import { UserDetails } from "../../../Context/Context";

const ProfileHome = ({ getUserData, setEditModal }: {
    getUserData: UserDetails | undefined;
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div>
            ProfileHome
        </div>
    )
}

export default ProfileHome
