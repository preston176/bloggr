import { useState } from "react"
import ReactQuill from "react-quill"
import Preview from "./Preview"
const Write = () => {
    const [description, setDescription] = useState<string>("")
    return (
        <section
            className="w-[90%] md:w-[90%] lg:w-[60%] mx-auto py-[3rem]"
        >
            <input type="text" placeholder="Title" className="text-4xl outline-none w-full" />

            <ReactQuill
                theme="bubble"
                value={description}
                onChange={setDescription}
                className="write my-5"
                placeholder="Describe Your Story ..."
            />
            <div className="">
                <Preview />
            </div>
        </section>
    )
}

export default Write