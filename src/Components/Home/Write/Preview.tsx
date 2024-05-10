import { LiaTimesSolid } from "react-icons/lia"
import { useRef } from "react";

const Preview = () => {
    const imageRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        imageRef?.current?.click()
    }

    return (
        <section
            className="absolute inset-0 bg-white z-30"
        ><div className="size my-[2rem]"><span className="absolute right-[1rem] md:right-5[rem] top-[3rem] text-2xl cursor-pointer">
            <LiaTimesSolid />
        </span>
                <div className="mt-[8rem] flex flex-col md:flex-row gap-10">
                    <div className="flex-[1]">
                        <h3>Story Preview</h3>
                        <div onClick={() => handleClick} className="w-full h-[200px] object-cover bg-gray-100 my-3 grid place-items-center cursor-pointer bg-cover bg-no-repeat">
                            Add Image
                        </div>
                        <input ref={imageRef} type="file" hidden />
                    </div>
                    <div className="flex-[1]"></div>
                </div>
            </div></section>
    )
}

export default Preview