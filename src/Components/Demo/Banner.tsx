
const Banner = () => {
    return (
        <div className="bg-banner border-b border-black md:px-[4rem] sm:px-6 lg:px-[3rem]">
            <div className="size py-[5rem] flex flex-col items-start gap-[1rem]">
                <h1 className="font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal">Get Notified</h1>
                <p className="w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7">Get to hear stories from other developers all around the globe.</p>
                <button className="btn bg-black1 rounded-full text-white text-[1.2rem] !px-6 mt-[2.5rem] !py-2 hover:cursor-pointer hover:text-black hover:bg-white transition-all duration-75 ease-in">Start Reading</button>
            </div>
        </div>
    )
}

export default Banner
