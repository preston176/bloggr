import { discover, discoverActions } from "../../demoData"

const Discover = () => {
    return (
        <div className="sticky top-[6rem]">
            <div className="border-b border-gray-400 pb-7">
                <h3 className="font-semibold">
                    Get to know what matters to you
                </h3>
                <div className="my-2 items-center gap-3 flex flex-wrap">
                    {
                        discover.map((item) => (
                            <button
                                key={crypto.randomUUID()}
                                className="bg-gray-200 py-2 px-3 text-sm rounded-full hover:bg-gray-100 transition-all duration-100 hover:text-black ease-in">{item}</button>
                        ))
                    }
                </div>
                <button className="p-2 text-blue-400 text-sm py-3 hover:text-black1 hover:text-white">View more topics</button>
            </div>
            <div className="flex items-center flex-wrap gap-3 leading-3 pt-8">
                {
                    discoverActions.map((action) => (
                        <button
                            key={crypto.randomUUID()}
                            className="bg-gray-200 py-2 px-3 text-sm rounded-full hover:bg-gray-100 transition-all duration-100 hover:text-black ease-in ">{action}</button>

                    ))
                }
            </div>
        </div>
    )
}

export default Discover