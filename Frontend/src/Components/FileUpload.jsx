import { useState } from "react"

function FileUpload(){
    const [file, setfile] = useState()

    function handleFile(event){
        setfile(event.target.files[0])
        // console.log(file);
    }

    function handleUpload(){
        const formData = new formData()
        formData.append('file',file)
        fetch(
            'url',
            {
                method: "POST",
                body: formData
            }
        ).then((response)=> response.json())
        .then(
            (result)=>{
                console.log('success', result)
            }
        )
        .catch(error=>{
            console.error('Error:',error)
        })
    }

    return (
        <div>
            <h2>Upload your audio:</h2>
            <form onSubmit={handleUpload}>
                <input type="file" name="file" onChange={handleFile}/>
                <button>Upload</button>
            </form>
        </div>
    )
}

export default FileUpload