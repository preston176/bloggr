import Modal from './../utils/Modal';

const EditProfile = ({ editModal, setEditModal }: {
    editModal: boolean,
    setEditModal: (value: boolean) => void
}) => {
    return (
        <Modal modal={editModal} setModal={setEditModal}>EditProfile</Modal>
    )
}

export default EditProfile