// function App() {
  

//   return (
//    <>




//    </>
//   )
// }

// export default App


import { useState } from 'react';
import Header from './Components/Header';
import FileUpload from './Components/FileUpload';
import InputLanguage from './Components/InputLanguage';
import TranslationLanguage from './Components/TranslationLanguage';

function App() {
  
 
  return (
    <div>
    <Header />
    <FileUpload/> <br/>
    <InputLanguage/> <br/>
    <TranslationLanguage/> <br/>

    <h3>Your text: </h3>
    <h3>Translation:</h3>
    </div>
  );
}

export default App;