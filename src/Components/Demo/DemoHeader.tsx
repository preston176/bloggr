import { Link } from "react-router-dom"
import { nav } from './../../demoData.ts';


const DemoHeader = () => {
    return (
        <div className="border-b border-black sticky top-0 z-50">
            <div className="w-[95%] md:w-[90%] mx-auto h-[70px] flex items-center justify-between">
                <Link to={'/'}>
                    <img
                        className="h-[2.5rem]"
                        src="https://i.pinimg.com/736x/af/09/41/af0941ba06185e9846af909ba9350baf.jpg" alt="site_logo" />
                </Link>
                <div className="">
                    <div className="">
                        {
                            nav.map((item: { path: string, title: string }, index: number) => (
                                <Link to={item.path} key={index} className="mx-2">{item.title}</Link>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoHeader
