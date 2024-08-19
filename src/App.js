// import React from 'react';
// import { useState } from 'react';
// import './App.css';
// import Home from './component/Home';
// import Dashboard from './component/Dashboard';

// function App() {

//   const [isSignIn,setIsSignIn] = useState(true);
//   const [showDashboard,setShowDashboard ] = useState(true);


//   const handleSignIn = ()=>{
//     setIsSignIn(true);
//   }

//   const handleLogout = ()=>{
//     setIsSignIn(false);
//   }

//   const handleShowDashboard = ()=>{
//     setShowDashboard(true);
//   }

//   const handleHideDashboard = ()=>{
//     setShowDashboard(false);
//   }

//   return (
//     <div className="App">
//       <main>

//       {showDashboard ? 
      
//       <Dashboard  
//       handleHideDashboard = {handleHideDashboard}
//       />: 
      
//       <Home 
//       handleSignIn = {handleSignIn}
//       isSignIn = {isSignIn}
//       handleLogout = {handleLogout}
//       handleShowDashboard = {handleShowDashboard}
//       />
//       }
//       </main>
      

//     </div>
//   );
// }

// export default App;



// CODE WITH REDUX
import React from 'react';
import './App.css';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import { useSelector } from 'react-redux';

function App() {
  const showDashboard = useSelector((state) => state.showDashboard);

  return (
    <div className="App">
      <main>
        {showDashboard ? <Dashboard /> : <Home />}
      </main>
    </div>
  );
}

export default App;

