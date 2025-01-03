import React from 'react'
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import { addbeverages } from '../redux/action';
import { getdata } from '../utils/getdata';
import styles from "./item.module.css"
import Item from './Item';

const Beverages = () => {
 const dispatch = useDispatch();
 const beverage= useSelector((state)=>state.beverages); 
useEffect(()=>{
    fetchData();
},[])

 const fetchData= async()=>{
    let payload= await getdata("https://mock-server-app-2-4ouf.onrender.com/beverages");
     dispatch(addbeverages(payload));
 }

  return (
  <div id="beverage" >
    <h1>BEVERAGES</h1>
   <div className={styles.itembox} >
    {beverage.map((el)=>{
      return <Item {...el} key={el.id}  />
    })}
   </div>
  </div>
  )
}

export default Beverages