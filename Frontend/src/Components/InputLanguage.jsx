// import { useState } from "react";

// function InputLanguage(){
//     const [ value, setValue ] = useState('')
//     const options = [
//         {label: "English", value: 'en-US'},
//         {label: "Sinhala", value: 'si-LK'},
//         {label: "Spanish", value: 'es-ES'},
//         {label:"Arabic", value: 'ar-EG'},
//         {label: "German", value: 'de-DE'},
//         {label: "Russian", value: 'ru-RU'},
//         {label: "Chinese", value: 'zh-CN'},
//         {label: "Japanese", value: 'ja-JP'},
//     ]
//     function handleSelect(event){
//         setValue(event.target.value)
//     }

//     return(
//         <div className="d-flex justify-content-center mt-5">
//             <div className="w-200 p-5 border rounded">
//                 <h4>Select your language</h4>
//                 <select className="form-select" onChange={handleSelect}>
//                     {options.map(option =>(
//                         <option value={option.value}>{option.label}</option>
//                     ))}

//                 </select>
//                     <p>{value}</p>
//             </div>

//         </div>
//     )
// }
// export default InputLanguage

import { useState } from "react";

function InputLanguage(){
    const [value, setValue] = useState('');
    const options = [
        {label: "English", value: 'en-US'},
        {label: "Sinhala", value: 'si-LK'},
        {label: "Spanish", value: 'es-ES'},
        {label:"Arabic", value: 'ar-EG'},
        {label: "German", value: 'de-DE'},
        {label: "Russian", value: 'ru-RU'},
        {label: "Chinese", value: 'zh-CN'},
        {label: "Japanese", value: 'ja-JP'},
    ];

    function handleSelect(event){
        setValue(event.target.value);
    }

    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="w-200 p-5 border rounded">
                <h3>Select your language</h3>
                <select 
                    className="form-select" 
                    onChange={handleSelect} 
                    style={{ width: '300px', height: '50px',backgroundColor: '#aef9fd', color: 'black'}}
                >
                    {options.map(option => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                </select>
                <p>{value}</p>
            </div>
        </div>
    );
}

export default InputLanguage;