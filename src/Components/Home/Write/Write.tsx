import { useState } from "react"
import ReactQuill from "react-quill"
import Preview from "./Preview"
import { useBlogContext } from "../../../Context/Context";
const Write = () => {
    const [description, setDescription] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const { publish, setPublish } = useBlogContext();
    return (
        <section
            className="w-[90%] md:w-[90%] lg:w-[60%] mx-auto py-[3rem]"
        >
            <input type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                value={title}
                placeholder="Title" className="text-4xl outline-none w-full" />

            <ReactQuill
                theme="bubble"
                value={description}
                onChange={setDescription}
                className="write my-5"
                placeholder="Describe Your Story ..."
            />
            <div className={`${publish ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300`}>
                <Preview setPublish={setPublish}
                    description={description}
                    title={title} />
            </div>
        </section >
    )
}

export default Write
