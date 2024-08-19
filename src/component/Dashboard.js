// import React from "react";
// import { useState } from "react";
// import './Dashboard.css';
// import { FaAngleDown } from "react-icons/fa6";
// import { TbDeviceTabletSearch } from "react-icons/tb";


// function Dashboard({isSignIn, handleHideDashboard}){

//     const [showPopup, setShowPopup] = useState(false);

//     // HANDLE SHOWING POPUP
//     const handleShowPopup = ()=>{
//         setShowPopup(true)
//     }

//     // HANDLE HIDING POPUP
//     const handleHidePopup = ()=>{
//         setShowPopup(false)
//     }


//     return(

//         <div className="">
//             <div className="dashboard">

//                 {/* NAVIGATION */}
//                 <nav>
//                     <div onClick={handleHideDashboard} className="back">
//                         <FaAngleDown className='back-arrow'/>
//                     </div>

//                     <div className="search">
//                         <input type="text"
//                         placeholder="Search by keyword"
//                         ></input>
//                         <div className="search-box">
//                             <TbDeviceTabletSearch className="search-icon"/>
//                         </div>

//                     </div>

//                     <div className="cart">

//                     </div>
//                 </nav>
//                 {/* ENDS */}

//                 {/* MAIN */}
//                 <main>

//                 </main>
//                 {/* ENDS */}

//                 {/* FOOTER */}
//                 <footer>
//                     <button onClick={handleShowPopup}><span>+</span></button>
//                 </footer>
//                 {/* ENDS */}


//                 {/* ITEM FORM POPUP */}
//                 {showPopup && (

//                     <div className="add-form">
//                         <div className="popup-content">
//                             <h2>Add Item</h2>
//                             <form>
//                                 <div className="item">
//                                     <label>Item</label>
//                                     <input type="text" 
//                                     ></input>
//                                 </div>

//                                 <div className="description">
//                                     <label>Description</label>
//                                     <input type="text" 
//                                     ></input>
//                                 </div>

//                                 <div className="quantity">
//                                     <label>Quantity</label>
//                                     <input type="number" 
//                                     ></input>
//                                 </div>

//                                 <div className="category">
//                                     <label>Category</label>
//                                     <input type="text"
//                                     ></input>
//                                 </div>

//                                 <div className="form-button">
//                                     <button style={{background: 'green', border: '2px solid green'}}>Save</button>
//                                     <button onClick={handleHidePopup} style={{background: 'red', border: '2px solid red'}}>Delete</button>
//                                 </div>
//                             </form>
//                             <button onClick={handleHidePopup} className="close">
//                             +
//                             </button>
//                         </div>

//                     </div>

//                 )}
//                 {/* ENDS */}
//             </div>
            

//         </div>
//     )
// }

// export default Dashboard;



// CODE WITH REDUX
import React from 'react';
import './Dashboard.css';
import { FaAngleDown } from 'react-icons/fa6';
import { TbDeviceTabletSearch } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { hideDashboard, showPopup, hidePopup } from '../store';

function Dashboard() {
  const dispatch = useDispatch();
  const showPopupState = useSelector((state) => state.showPopup);

  return (
    <div className="">
      <div className="dashboard">


        {/* NAVIGATION */}
        <nav>
          <div onClick={() => dispatch(hideDashboard())} className="back">
            <FaAngleDown className="back-arrow" />
          </div>

          <div className="search">
            <input type="text" placeholder="Search by keyword" />
            <div className="search-box">
              <TbDeviceTabletSearch className="search-icon" />
            </div>
          </div>

          <div className="cart"></div>
        </nav>
        {/*NAVIGATION ENDS */}


        {/* MAIN */}
        <main>
          {/* I WILL DISPLAY MY ITEMS HERE */}
        </main>
        {/*MAIN ENDS */}

        {/* FOOTER */}
        <footer>
          <button onClick={() => dispatch(showPopup())}>
            <span>+</span>
          </button>
        </footer>
        {/*FOOTER ENDS */}

        {/* ITEM FORM POPUP */}
        {showPopupState && (
          <div className="add-form">
            <div className="popup-content">
              <h2>Add Item</h2>
              <form>
                <div className="item">
                  <label>Item</label>
                  <input type="text"></input>
                </div>

                <div className="description">
                  <label>Description</label>
                  <input type="text"></input>
                </div>

                <div className="quantity">
                  <label>Quantity</label>
                  <input type="number"></input>
                </div>

                <div className="category">
                  <label>Category</label>
                  <input type="text"></input>
                </div>

                <div className="form-button">
                  <button
                    style={{ background: 'green', border: '2px solid green' }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => dispatch(hidePopup())}
                    style={{ background: 'red', border: '2px solid red' }}
                  >
                    Delete
                  </button>
                </div>
              </form>
              <button onClick={() => dispatch(hidePopup())} className="close">
                +
              </button>
            </div>
          </div>
        )}
        {/*FORM ENDS */}
      </div>
    </div>
  );
}

export default Dashboard;
