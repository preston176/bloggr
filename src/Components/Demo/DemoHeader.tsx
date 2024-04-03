import { Link } from "react-router-dom"
import { nav } from './../../demoData.ts';


const DemoHeader = () => {
    return (
        <div className="border-b border-black sticky top-0 z-50 bg-banner">
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
                        <button className="bg-black text-white rounded-full px-3 p-2 text-sm font-medium">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoHeader
