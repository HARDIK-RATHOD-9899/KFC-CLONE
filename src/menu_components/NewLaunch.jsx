import { addlaunch } from '../redux/action';
import { getdata } from "../utils/getdata"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';

const NewLaunch = () => {
    const dispatch = useDispatch();
    const launch= useSelector((state)=>state.launch);
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getdata("https://mock-server-app-2-4ouf.onrender.com/new-launch");
         dispatch(addlaunch(payload));
     }

  return (
    <div id="launch" >
      <h1>NEW LAUNCH</h1>
     <div className={styles.itembox} >
      {launch.map((el)=>{
        return <Item {...el} key={el.id}  />
      })}
     </div>
    </div>
  )
}

export default NewLaunch