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



// // CODE WITH REDUX
// import React, { useEffect, useState } from 'react';
// import './Dashboard.css';
// import { FaAngleDown } from 'react-icons/fa6';
// import { CiEdit } from "react-icons/ci";
// import { MdOutlineAutoDelete } from "react-icons/md";
// import { TbDeviceTabletSearch } from 'react-icons/tb';
// import { TbLocationShare } from "react-icons/tb";
// import { useDispatch, useSelector } from 'react-redux';
// import { hideDashboard, showPopup, hidePopup, addItem, fetchItems } from '../store';

// function Dashboard() {
//   const dispatch = useDispatch();
//   const showPopupState = useSelector((state) => state.showPopup);
//   const user = useSelector((state) => state.user);
//   const items = useSelector((state) => state.items);

//   const [formData, setFormData] = useState({
//     item: '',
//     description: '',
//     quantity: '',
//     category: ''
//   });

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchItems());
//     }
//   }, [user, dispatch]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addItem(formData));
//     setFormData({
//       item: '',
//       description: '',
//       quantity: '',
//       category: ''
//     });
//     dispatch(hidePopup());
//   };

//   return (
//     <div className="">
//       <div className="dashboard">
//         {/* NAVIGATION */}
//         <nav>
//           <div onClick={() => dispatch(hideDashboard())} className="back">
//             <FaAngleDown className="back-arrow" />
//           </div>

//           <div className="search">
//             <input type="text" placeholder="Search by keyword" />
//             <div className="search-box">
//               <TbDeviceTabletSearch className="search-icon" />
//             </div>
//           </div>

//           <div className="cart"></div>
//         </nav>
//         {/* NAVIGATION ENDS */}

//         {/* MAIN */}
//         <main>
//           {items.length === 0 ? (
//             <p>No items to display</p>
//           ) : (
//             <ul>
//               {items.map((item) => (
//                 <li key={item.id}>
//                   <p>1</p>
//                   <h3>Quantity: {item.item}</h3>
//                   <p>Quantity: {item.description}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Category: {item.category}</p>
//                   <div className='item-button'>
//                     <button><CiEdit style={{color: 'blue'}}/></button>
//                     <button><MdOutlineAutoDelete style={{color: 'red'}}/></button>
//                     <button><TbLocationShare style={{color: 'green'}}/></button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </main>
//         {/* MAIN ENDS */}

//         {/* FOOTER */}
//         <footer>
//           <button onClick={() => dispatch(showPopup())}>
//             <span>+</span>
//           </button>
//         </footer>
//         {/* FOOTER ENDS */}

//         {/* ITEM FORM POPUP */}
//         {showPopupState && (
//           <div className="add-form">
//             <div className="popup-content">
//               <h2>Add Item</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="item">
//                   <label>Item</label>
//                   <input
//                     type="text"
//                     name="item"
//                     value={formData.item}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="description">
//                   <label>Description</label>
//                   <input
//                     type="text"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="quantity">
//                   <label>Quantity</label>
//                   <input
//                     type="number"
//                     name="quantity"
//                     value={formData.quantity}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="category">
//                   <label>Category</label>
//                   <input
//                     type="text"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-button">
//                   <button
//                     type="submit"
//                     style={{ background: 'green', border: '2px solid green' }}
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => dispatch(hidePopup())}
//                     style={{ background: 'red', border: '2px solid red' }}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//               <button onClick={() => dispatch(hidePopup())} className="close">
//                 +
//               </button>
//             </div>
//           </div>
//         )}
//         {/* FORM ENDS */}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { FaAngleDown } from 'react-icons/fa6';
import { CiEdit } from 'react-icons/ci';
import { MdOutlineAutoDelete } from 'react-icons/md';
import { TbDeviceTabletSearch, TbLocationShare } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { hideDashboard, showPopup, hidePopup, addItem, fetchItems, deleteItem } from '../store';

function Dashboard() {
  const dispatch = useDispatch();
  const showPopupState = useSelector((state) => state.showPopup);
  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.items);

  const [formData, setFormData] = useState({
    item: '',
    description: '',
    quantity: '',
    category: ''
  });

  useEffect(() => {
    if (user) {
      dispatch(fetchItems(user.id));
    }
  }, [user, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(addItem(user.id, formData));
    }
    setFormData({
      item: '',
      description: '',
      quantity: '',
      category: ''
    });
    dispatch(hidePopup());
  };

  const handleEdit = (itemId) => {
    // Handle edit functionality here
    console.log('Edit item with ID:', itemId);
  };

  const handleDelete = (itemId) => {
    // Handle delete functionality
    if (user) {
      dispatch(deleteItem(itemId));
    }
  };

  const handleShare = (itemId) => {
    // Handle share functionality here
    console.log('Share item with ID:', itemId);
  };

  return (
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
      {/* NAVIGATION ENDS */}

      {/* MAIN */}
      <main>
        {items.length === 0 ? (
          <p>No items to display</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <h3>{item.item}</h3>
                <p><strong><span>Description</span></strong>: {item.description}</p>
                <p><strong><span>Quantity</span></strong>: {item.quantity}</p>
                <p><strong><span>Tag</span> </strong>: {item.category}</p>
                <div className="item-button">
                  <button onClick={() => handleEdit(item.id)}><CiEdit style={{ color: 'blue' }} /></button>
                  <button onClick={() => handleDelete(item.id)}><MdOutlineAutoDelete style={{ color: 'red' }} /></button>
                  <button onClick={() => handleShare(item.id)}><TbLocationShare style={{ color: 'green' }} /></button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
      {/* MAIN ENDS */}

      {/* FOOTER */}
      <footer>
        <button onClick={() => dispatch(showPopup())}>
          <span>+</span>
        </button>
      </footer>
      {/* FOOTER ENDS */}

      {/* ITEM FORM POPUP */}
      {showPopupState && (
        <div className="add-form">
          <div className="popup-content">
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
              <div className="item">
                <label>Item</label>
                <input
                  type="text"
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                />
              </div>

              <div className="description">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="quantity">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className="category">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>

              <div className="form-button">
                <button
                  type="submit"
                  style={{ background: 'green', border: '2px solid green' }}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(hidePopup())}
                  style={{ background: 'red', border: '2px solid red' }}
                >
                  Cancel
                </button>
              </div>
            </form>
            <button onClick={() => dispatch(hidePopup())} className="close">
              +
            </button>
          </div>
        </div>
      )}
      {/* FORM ENDS */}
    </div>
  );
}

export default Dashboard;
