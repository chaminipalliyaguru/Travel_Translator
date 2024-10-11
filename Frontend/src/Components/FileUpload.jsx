// import { useState } from "react"

// function FileUpload(){
//     const [file, setfile] = useState()

//     function handleFile(event){
//         setfile(event.target.files[0])
//         // console.log(file);
//     }

//     function handleUpload(){
//         const formData = new formData()
//         formData.append('file',file)
//         fetch(
//             'url',
//             {
//                 method: "POST",
//                 body: formData
//             }
//         ).then((response)=> response.json())
//         .then(
//             (result)=>{
//                 console.log('success', result)
//             }
//         )
//         .catch(error=>{
//             console.error('Error:',error)
//         })
//     }

//     return (
//         <div>
//             <h2>Upload your audio:</h2><br/>
//             <form onSubmit={handleUpload}>
//                 <input type="file" name="file" onChange={handleFile}/>
//                 <button>Upload</button>
//             </form>
//         </div>
//     )
// }

// export default FileUpload



import { useState } from 'react';

function FileUpload({ speechRecognitionLanguage, language, setRecognizedText, setTranslation }) {
    const [file, setFile] = useState(null);

    function handleFile(event) {
        setFile(event.target.files[0]);
    }

    function handleUpload(event) {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('audioFile', file);
        formData.append('speechRecognitionLanguage', speechRecognitionLanguage);
        formData.append('language', language);

        fetch(
            'http://localhost:3000/api/translate',
            {
                method: "POST",
                body: formData
            }
        ).then((response) => response.json())
        .then((result) => {
            setRecognizedText(result.recognizedText);  // Update recognized text
            setTranslation(result.translation);        // Update translation
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <h2>Upload your audio:</h2><br/>
            <form onSubmit={handleUpload}>
                <input type="file" name="file" onChange={handleFile} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default FileUpload;
