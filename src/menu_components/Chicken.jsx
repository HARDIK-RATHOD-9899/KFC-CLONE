import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addchicken } from '../redux/action';
import { getdata } from "../utils/getdata";
import Item from './Item';
import styles from "./item.module.css";

const Chicken = () => {
  const dispatch = useDispatch();
  const chicken = useSelector((state) => state.chicken);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let payload = await getdata("https://mock-server-app-2-4ouf.onrender.com/chicken-bucket");
    dispatch(addchicken(payload));
  };

  return (
    <div id="chicken" className={styles.chickenSection}>
      <h1>CHICKEN BUCKETS</h1>
      <div className={styles.itembox}>
        {chicken.map((el) => {
          return <Item {...el} key={el.id} />;
        })}
      </div>
    </div>
  );
};

export default Chicken;
