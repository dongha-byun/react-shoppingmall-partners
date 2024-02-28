import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import FileService from "../../../js/file";
import { webUrl } from "../../../js/axios";

const CustomEditor = ({editorValue, onChangeEditorValue}) => {
    const quillRef = useRef();
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

    const uploadImage = async (file) => {
        let result = await FileService.saveTempFile(file);
        return webUrl + result.tempContentImageURI;
    }

    useEffect(() => {
        const handleImage = () => { 
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();
            input.onchange = async () => {
                const editor = quillRef.current.getEditor();
                const file = input.files[0];
                const range = editor.getSelection(true);
                try {
                    const url = await uploadImage(file); 
                    console.log(url);
                    
                    // 받아온 url을 이미지 태그에 삽입
                    editor.insertEmbed(range.index, "image", url);
                    
                    // 사용자 편의를 위해 커서 이미지 오른쪽으로 이동
                    editor.setSelection(range.index + 1);
                } catch (e) {
                    editor.deleteText(range.index, 1);
                }

            }
        }

        if (quillRef.current) {
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

export default CustomEditor;