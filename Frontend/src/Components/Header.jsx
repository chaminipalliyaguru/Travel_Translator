// import { useState } from 'react'


// function Header() {
  

//   return (
//     <div>
//       <nav className='bg-sky-500'>
//         <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-10'>
//           <div className='flex items-center justify-between h-14'>
//             <div className='flex items-center'>
//               <div className='flex-shrink-0'>
//                 <div className='text-white'>
//                   <h3 className ="text-3xl font-bold">OnlineEdu</h3>
//                   <img src='../assets/Logo.png'></img>
//                 </div>
//               </div>
                
//             </div>
            
//           </div>
//           <div className='md:hidden flex items-center'>
            
          

//           </div>

//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header

// import { useState } from 'react';
// import Logo from '../assets/Logo.ico'; // Import the logo image

// function Header() {
//   return (
//     <div>
//       <nav className="bg-gray-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
//           <div className="grid grid-cols-3 items-center h-14">
//             {/* Left section with brand name */}
//             {/* <div className="col-span-2">
//               <h3 className="text-3xl font-bold text-black">OnlineEdu</h3>
//             </div> */}

//             {/* Right section with smaller logo */}
//             <div className="col-span-1 text-right">
//               <img
//                 src={Logo} 
//                 alt="Logo"
//                 className="h-0 w-1 inline-block" // Small logo size
//               />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;

// import { useState } from 'react';
// import Logo from '../assets/Logo.ico'; // Ensure the correct path to the logo

// function Header() {
//   return (
//     <div>
//       {/* Set inline background color temporarily to test */}
//       <nav style={{ backgroundColor: 'yellow' }}>
//         <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-10 ml-64">
//           <div className="grid grid-cols-3 items-center h-14">
//             {/* Left section with brand name */}
            

//             {/* Right section with logo */}
//             <div className="col-span-1 text-right">
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 className="h-8 w-8 inline-block" // Small logo size
//               />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;


import { useState } from 'react';
import Logo from '../assets/Logo.ico'; // Ensure the correct path to your logo

function Header() {
  return (
    <div>
      <nav className='bg-blue'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-3 items-center h-12'> {/* Reduced height */}
            {/* Left section with brand name */}
            

            {/* Right section with logo */}
            <div className='col-span-1 text-right'>
              <img
                src={Logo}
                alt="Logo"
                className="h-6 w-6 inline-block" // Adjust size of the logo
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

