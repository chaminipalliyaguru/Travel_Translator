import PropTypes from 'prop-types';


function TranslationLanguage({ setLanguage }) {
    const options = [
        { label: "English", value: 'en' },
        { label: "Spanish", value: 'es' },
        { label: "Arabic", value: 'ar' },
        { label: "German", value: 'de' },
        { label: "Russian", value: 'ru' },
        { label: "Chinese", value: 'zh-Hans' },
        { label: "Japanese", value: 'ja' },
        { label: "Tamil", value: 'ta' },
    ];

    function handleSelect(event) {
        const selectedValue = event.target.value;
        setLanguage(selectedValue);  // Update parent with selected translation language
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="w-50 p-3 border rounded">
                <h3>Select translation language</h3>
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
TranslationLanguage.propTypes = {
    setLanguage: PropTypes.func.isRequired, // Validate as a required function
};

export default TranslationLanguage;

