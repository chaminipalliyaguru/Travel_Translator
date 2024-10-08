


// import { useState } from 'react';
// import Header from './Components/Header';
// import FileUpload from './Components/FileUpload';
// import InputLanguage from './Components/InputLanguage';
// import TranslationLanguage from './Components/TranslationLanguage';
// import Main from './Components/Main';

// function App() {
  
 
//   return (
//     <div>
//     <Header />
//     <Main/>
//     <FileUpload/> <br/>
//     <InputLanguage/> <br/>
//     <TranslationLanguage/> <br/>

//     <h3>Your text: </h3>
//     <h3>Translation:</h3>
//     </div>
//   );
// }

// export default App;

import videoBg from '../src/assets/videoBg.mp4'
import TranslationLanguage from '../src/Components/TranslationLanguage'
import InputLanguage from './Components/InputLanguage'
import FileUpload from './Components/FileUpload'
import Header from './Components/Header'

const Main = () => {
  return (
   
    <div className='main'>
       <Header/>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <FileUpload/> <br/><br/>
            <InputLanguage/><br/><br/>
            <TranslationLanguage/><br/><br/>
            
            <h3>Your text: </h3><br/>
           <h3>Translation:</h3>
        </div>
    </div>
  )
}

export default Main