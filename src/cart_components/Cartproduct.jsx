// // import React from 'react'
// import { useState } from 'react'
// import styles from "./cart.module.css"
// // import axios from "axios"
// // import { useDispatch, useSelector } from 'react-redux'
// // import { addcartcount } from '../redux/action'
// // import { useEffect } from 'react'
// // import { useParams } from 'react-router-dom'

// const Cartproduct = ({description,Image,price,qty,title, fetchData}) => {

// // const dispatch= useDispatch();
// // const  [data,setdata]=useState([])
// // const [count,setCount]= useState(qty);
// // let acprice=price.substring(1)
// // const {id} = useParams()

// // acprice=Number(acprice);

// const handleRemove = () =>{
//   axios.delete(`https://mock-server-app-2-4ouf.onrender.com/cart/${id}`)
//   fetchData();
//   // console.log("Deleted")
  
// }
// // console.log(id);

//   return (
//     <>
//     {/* {data.map((el)=>{ */}

   
//     {/* <div className={styles.cartproductmain} >
//         <div className={styles.cartproductleft}>
//             <img src={el.Image} alt="food" />
//             <div>
//                 <h3>{el.title}</h3>
//                 <ul>
//                     <li>{el.description}</li>
//                 </ul>
//                 <h3
//                 style={{cursor:'pointer'}}
//                 onClick={handleRemove}
//                 >Remove</h3>
//             </div>
//         </div>
//         <div className={styles.cartproductright} >
            
//                 <button disabled={qty==1||count==1}
//                 onClick={()=>{
//                   const el={
//                     id:id,Image,price,title,description,qty:count-1
//                   }
//                   axios.put(`https://mock-server-app-2-4ouf.onrender.com/cart/${id}`,el)
//                   .then(({data})=>{
//                     dispatch(addcartcount(el));
//                     setCount(count-1);
                    
//                   })
//                 }
//                 }
//                 >&#8211;</button>
//                 <h4>{count}</h4>
//                 <button
//                 onClick={()=>{
                  
                  
//                 const el={
//                 id:id,Image,price,title,description,qty:count+1
//                 }
//                 axios.put(`https://mock-server-app-2-4ouf.onrender.com/cart/${id}`,el)
//                .then(({data})=>{
//                 setCount(count+1)
//                 dispatch(addcartcount(el));
//                 })
//                 }}
                
//                 >&#43;</button>
//                 <h3>{Math.round(acprice*count)}</h3>
            
//         </div>
//     </div>  */}
//     {/* })} */}
//     </>
//   )
// }

// export default Cartproduct