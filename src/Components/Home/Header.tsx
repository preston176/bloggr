import { RxActivityLog } from "react-icons/rx"
import { Link } from "react-router-dom"
import Search from "./Search"

const Header = () => {
    return (
        <header className="border-b border-gray-200">
            <div className="size h-[60px] flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link to={"/"}>
                        <span className="text-5xl"><RxActivityLog /></span>
                    </Link>
                    <Search />
                </div>
            </div>
        </header>
    )
}

export default Header
