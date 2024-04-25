import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import default styles

const ToastNotifier: React.FC = () => {
    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
        </div>
    );
};

export default ToastNotifier;
