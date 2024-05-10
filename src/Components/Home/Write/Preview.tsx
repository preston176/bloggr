import { LiaTimesSolid } from "react-icons/lia"
import { useRef, useState } from "react";
import ReactQuill from 'react-quill';

const Preview = () => {
    const imageRef = useRef<HTMLInputElement>(null)
    const [imageUrl, setImageUrl] = useState<string>('')
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
                        <div style={
                            {
                                backgroundImage: `url(${imageUrl})`
                            }
                        } onClick={() => handleClick} className="w-full h-[200px] object-cover bg-gray-100 my-3 grid place-items-center cursor-pointer bg-cover bg-no-repeat">
                            {
                                !imageUrl && "Add Image"
                            }
                        </div>
                        <input onChange={e => {
                            if (e.target.files && e.target.files.length > 0) {
                                const file = e.target.files[0]
                                setImageUrl(URL.createObjectURL(file))
                            }
                        }
                        } ref={imageRef} type="file" hidden />
                        <input type="text"
                            placeholder="Title"
                            className="outline-none w-full border-b border-gray-300 py-2" />
                        <ReactQuill
                            theme="bubble"
                            placeholder="Describe Your Story ..."
                            className="py-3 border-b border-gray-300"
                        />
                        <p className="text-gray-500 pt-4 text-sm">
                            <span className="font-bold">
                                Note:</span> Changing this section will affect how your story appears in public
                        </p>
                    </div>
                    <div className="flex-[1] flex flex-col gap-4 mb-5 md:mb-0">
                        <h3 className="text-2xl">Publishing to: Preston M</h3>
                    </div>
                </div>
            </div></section>
    )
}

export default Preview


