import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        console.log(file)
    };
    return (
        <>
            <FileUploader
                handleChange={handleChange}
                name="file"
                //   label="drag here"
                types={fileTypes}

            />
            {/* <img src={file} alt="image here" /> */}
        </>
    )
}

export default DragDrop;