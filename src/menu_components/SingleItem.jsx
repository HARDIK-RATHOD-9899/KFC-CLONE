// import axios from 'axios'
// import React from 'react'
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addcart, addcartcount } from '../redux/action'
// import styles from "./item.module.css"
// import Reccom from './Reccom'
// import Beverages from "./Beverages"
// import { useNavigate } from 'react-router-dom'

// const SingleItem = ({id, Image, price, title, description}) => {
//   const dispatch = useDispatch();
//   const [count, setCount] = useState(0);
//   const navigate = useNavigate();

//   // console.log(strMealThumb,image, title, desc, price); 

//   return (
//     <div className={styles.singleupperbox}>
//       <div className={styles.mainsinglebox}>
//         <img src={Image} alt="food" />
//         <h2>{title}</h2>
//         <p className={styles.singledesc}>{description}</p>
//         <p>Calories {Math.round(Math.random() * (2000 - 1000) + 1000)}</p>
//         <h2>{price}</h2>

//         <div className={styles.cartbutton}>
//           <h3>
//             {!count ? (
//               <p className={styles.addto}
//                 onClick={() => {
//                   setCount(count + 1);
//                   const el = { id:Image, price, title, description, qty: count + 1 };
//                   axios.post("https://mock-server-app-2-4ouf.onrender.com/cart", el)
//                     .then(() => dispatch(addcart(el)))
//                     .catch(err => console.log("Add to cart error:", err));  // Error handling
//                 }}>
//                 Add to cart
//               </p>
//             ) : (
//               <div>
//                 <button
//                   className={styles.minus}
//                   onClick={() => {
//                     if (count > 0) {
//                       setCount(count - 1);
//                       const el = { id: id, Image, price, title, description, qty: count - 1 };
//                       axios.put(`https://mock-server-app-2-4ouf.onrender.com/cart/${id}`, el)
//                         .then(() => dispatch(addcartcount(el)))
//                         .catch(err => console.log("Update cart error:", err));  // Error handling
//                     }
//                   }}>
//                   &#8211;
//                 </button>

//                 <span>{count}</span>

//                 <button
//                   className={styles.plus}
//                   onClick={() => {
//                     setCount(count + 1);
//                     const el = { id: id, Image, price, title, description, qty: count + 1 };
//                     axios.put(`https://mock-server-app-2-4ouf.onrender.com/cart/${id}`, el)
//                       .then(() => dispatch(addcartcount(el)))
//                       .catch(err => console.log("Update cart error:", err));  // Error handling
//                   }}>
//                   &#43;
//                 </button>
//               </div>
//             )}
//           </h3>
//           <img
//             style={{ cursor: "pointer" }}
//             onClick={() => navigate("/cart")}
//             src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
//             alt="Go to cart"
//           />
//         </div>
//         <h1 className={styles.pepsi}>You can enjoy this delicious dish with</h1>
//         {/* <Beverages /> */}
//       </div>
//       <div>
//         {/* <Reccom /> */}
//       </div>
//     </div>
//   );
// };

// export default SingleItem;

// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'

// const SingleItem = () => {
//   const {id} = useParams()
//   // console.log(id)
//   const dispatch = useDispatch()
//   const {data} = useSelector((s)=>s.SingleProduct)
//   console.log(data)
//   useEffect(()=>{
//      dispatch(FetchData)(id)
//     // FetchData(dispatch,id)
//   },[])
//   return (
//     <>
    
//     </>
//   )
// }

// export default SingleItem