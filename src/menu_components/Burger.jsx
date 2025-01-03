
import { addburger } from '../redux/action';
import { getdata } from "../utils/getdata"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';
const Burger = () => {
    const dispatch = useDispatch();
    const burger= useSelector((state)=>state.burger);
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getdata("https://mock-server-app-2-4ouf.onrender.com/burgers");
         dispatch(addburger(payload));
     }

  return (
  <div id="burger">
    <h1>BURGERS</h1>
   <div className={styles.itembox} >
    {burger.map((el)=>{
      return <Item {...el} key={el.id}  />
    })}
   </div>
  </div>
  )
}

export default Burger