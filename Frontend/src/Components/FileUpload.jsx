import PropTypes from 'prop-types';
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
        )
        .then((response) => response.json())
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
            <h2><center>Upload your audio:</center></h2><br/>
            <form onSubmit={handleUpload}>
                <input type="file" name="file" onChange={handleFile} />
                <button type="submit" style={{ fontSize: "20px", padding: "5px 10px" }}>Upload</button>
            </form>
        </div>
    );
}

// Adding prop-types for props validation
FileUpload.propTypes = {
    speechRecognitionLanguage: PropTypes.string.isRequired,  // Validate as a required string
    language: PropTypes.string.isRequired,                  // Validate as a required string
    setRecognizedText: PropTypes.func.isRequired,           // Validate as a required function
    setTranslation: PropTypes.func.isRequired,              // Validate as a required function
};

export default FileUpload;
