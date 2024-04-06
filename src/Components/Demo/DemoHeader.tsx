import { Link } from "react-router-dom"
import { nav } from './../../demoData.ts';
import { useEffect, useState } from "react";
import Auth from "./Auth/Auth.tsx";


const DemoHeader = () => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsActive(true)
            } else {
                setIsActive(false)
            }

        }
        window.addEventListener('scroll', handleScroll)
    }, []);
    return (
        <div className={`border-b border-black sticky top-0 z-50 ${isActive ? "bg-white" : "bg-banner"} transition-all duration-600`} >
            <div className="w-[95%] md:w-[90%] mx-auto h-[70px] flex items-center justify-between">
                <Link to={'/'}>
                    <img
                        className="h-[2.5rem]"
                        src="https://i.pinimg.com/736x/af/09/41/af0941ba06185e9846af909ba9350baf.jpg" alt="site_logo" />
                </Link>
                <div className="flex items-center gap-5">
                    <div className="hidden text-sm sm:flex items-center gap-5">
                        {
                            nav.map((item: { path: string, title: string }, index: number) => (
                                <Link to={item.path} key={index}>{item.title}</Link>
                            ))

                        }
                    </div>
                    <div className="relative flex gap-x-5">
                        <button className="hidden text-sm sm:flex items-center gap-5">Log In</button>
                        <Auth modal={modal} setModal={setModal} />
                        <button onClick={() => setModal(true)} className="bg-black text-white rounded-full px-3 p-2 text-sm font-medium">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DemoHeader
