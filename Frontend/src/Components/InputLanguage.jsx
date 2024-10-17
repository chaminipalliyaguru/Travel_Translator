import PropTypes from 'prop-types';


function InputLanguage({ setSpeechRecognitionLanguage }) {
    const options = [
        { label: "English", value: 'en-US' },
        { label: "Sinhala", value: 'si-LK' },
        { label: "Spanish", value: 'es-ES' },
        { label: "Arabic", value: 'ar-EG' },
        { label: "German", value: 'de-DE' },
        { label: "Russian", value: 'ru-RU' },
        { label: "Chinese", value: 'zh-CN' },
        { label: "Japanese", value: 'ja-JP' },
    ];

    function handleSelect(event) {
        const selectedValue = event.target.value;
        setSpeechRecognitionLanguage(selectedValue);  // Update parent with selected language
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="w-200 p-5 border rounded">
                <h3>Select your language</h3>
                <select 
                    className="form-select" 
                    onChange={handleSelect} 
                    style={{ width: '300px', height: '50px', backgroundColor: '#aef9fd', color: 'black' }}
                >
                    {options.map(option => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

// Adding prop-types for validation
InputLanguage.propTypes = {
    setSpeechRecognitionLanguage: PropTypes.func.isRequired, // Validate as a required function
};

export default InputLanguage;
