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
import { updateItem } from '../store';


function Dashboard() {
  const dispatch = useDispatch();
  const showPopupState = useSelector((state) => state.showPopup);
  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.items);

  const [formData, setFormData] = useState({
    item: '',
    description: '',
    quantity: '',
    category: '',
  });

  const [editItemId, setEditItemId] = useState(null);

  // 
  useEffect(() => {
    if (user) {
      dispatch(fetchItems(user.id));
    }
  }, [user, dispatch]);

  // CHANGE IN VALUES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // HANDLES SUBMIT FOR EDITING
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItemId) {
      dispatch(updateItem(editItemId, formData, user.id));
    } else if (user) {
      dispatch(addItem(user.id, formData));
    }
    setFormData({
      item: '',
      description: '',
      quantity: '',
      category: '',
      userId: user.id
    });
    setEditItemId(null);
    dispatch(hidePopup());
  };

 // HANDLES EDIT
const handleEdit = (itemId, userId) => {
  const item = items.find((item) => item.id === itemId);
  if (item) {
    setFormData({
      item: item.item,
      description: item.description,
      quantity: item.quantity,
      category: item.category,
      userId: userId  // Ensures userId is included in the form data
    });
    setEditItemId(itemId);
    dispatch(showPopup());
  }
};


  // HANDLE DELETE
  const handleDelete = (itemId) => {
    // Handle delete functionality
    if (user) {
      dispatch(deleteItem(itemId));
    }
  };

  // HANDLES SHARE
  const handleShare = (itemId) => {
    const shareUrl = `${window.location.origin}/item/${itemId}`; // Construct the URL

    if (navigator.share) {
      // If the Web Share API is supported
      navigator.share({
        title: 'Check out this item!',
        url: shareUrl,
      })
      .then(() => console.log('Successfully shared'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback: Copy the URL to the clipboard
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Link copied to clipboard!');
      }).catch((error) => console.error('Error copying link:', error));
    }
    console.log('Share item with ID:', itemId);
  };


  // SEARCH
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* NAVIGATION */}
      <nav>
        <div onClick={() => dispatch(hideDashboard())} className="back">
          <FaAngleDown className="back-arrow" />
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search by Tag"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="search-box">
            <TbDeviceTabletSearch className="search-icon" />
          </div>
          <div className="sort">
         <p>A-Z</p>
          </div>

          <div className="sort">
            <p>Z-A</p>
          </div>
        </div>

      </nav>
      {/* NAVIGATION ENDS */}

      {/* MAIN */}
      <main>
        {items.length === 0 ? (
          <p>No items to display</p>
        ) : (
          <ul>
            <div className='Navigation'>
              <div className='item-header'><strong><h4>Item</h4></strong></div>
              <div className='item-header'><strong><h4>Description</h4></strong></div>
              <div className='item-header'><strong><h4>Quantity</h4></strong></div>
              <div className='item-header'>
                <strong><h4>Tag</h4></strong>
                </div>
              <div className='item-button-box'><strong><h4>Actions</h4></strong></div>
            </div>
            {filteredItems.map((item) => (
              <li key={item.id}>
                <div className="item-box">
                  <h3>{item.item}</h3>
                </div>
                
                <div className="item-box">
                  <p>{item.description}</p>
                </div>

                <div className="item-box">
                  <p>{item.quantity}</p>
                </div>

                <div className="item-box">
                  <p>{item.category}</p>
                </div>
                
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
                <label>Tag</label>
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
