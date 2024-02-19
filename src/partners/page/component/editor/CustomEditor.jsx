import React, { useEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function CustomEditor(props) {
    const quillRef = useRef(null);
    const {editorValue, onChangeEditorValue} = props;
    const formats = [
        "size", "color", "background", "bold", "italic",
        "underline", "strike", "blockquote", "list",
        "bullet", "indent", "link", "image",
    ];
    const toolbarOptions = [
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
    ];

    useEffect(() => {
        const handleImage = () => { 
            console.log("123");
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();
            input.onchange = async () => {
                const file = input.files[0];
                console.log(file);

                const range = getEditor().getSelection(true);
                console.log(range);
            }
        }

        if (quillRef.current) {
            const { getEditor } = quillRef.current;
            const toolbar = quillRef.current.getEditor().getModule("toolbar");
            toolbar.addHandler("image", handleImage);
          }
    }, []);

    return(
        <ReactQuill 
            style={{height: "350px", margin: "4px" }}
            ref={quillRef}
            value={editorValue}
            modules={{
                toolbar: {
                    container: toolbarOptions,
                }
            }}
            formats={formats}
            onChange={onChangeEditorValue}
        />
    );
}