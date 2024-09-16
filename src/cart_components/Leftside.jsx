import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getCart } from "../redux/action";
import { getdata } from "../utils/getdata";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cartproduct from './Cartproduct';
import styles from "./cart.module.css"
import axios from 'axios';
 import { addcartcount } from '../redux/action'

 const Leftside = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1); // Default to 1 if qty is undefined

  // Fetch data from API
  const fetchData = () => {
    fetch(`https://mock-server-app-2-4ouf.onrender.com/cart`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(); // Fetch cart data on component mount
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`https://mock-server-app-2-4ouf.onrender.com/cart/${id}`)
      .then(() => fetchData()) // Re-fetch cart after deletion
      .catch((err) => console.log("Delete error:", err));
  };

  return (
    <div>
      {data.map((el) => {
        const { id, Image, title, description, price, qty } = el;
        // const [count, setCount] = useState(qty || 1);
        let acprice = price ? Number(price.substring(1)) : 0;

        return (
          <div className={styles.cartproductmain} key={id}>
            <div className={styles.cartproductleft}>
              <img src={Image} alt="food" />
              <div>
                <h3>{title}</h3>
                <ul>
                  <li>{description}</li>
                </ul>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemove(id)}
                >
                  Remove
                </h3>
              </div>
            </div>
            <div className={styles.cartproductright}>
              <button
                disabled={count === 1}
                onClick={() => {
                  if (count > 1) {
                    const updatedItem = {
                      id,
                      Image,
                      price,
                      title,
                      description,
                      qty: count - 1,
                    };
                    axios
                      .put(`https://mock-server-app-2-4ouf.onrender.com/cart/${id}`, updatedItem)
                      .then(() => {
                        setCount(count - 1);
                        dispatch(addcartcount(updatedItem));
                      })
                      .catch((err) => console.log("Update cart error:", err));
                  }
                }}
              >
                &#8211;
              </button>
              <h4>{count}</h4>
              <button
                onClick={() => {
                  const updatedItem = {
                    id,
                    Image,
                    price,
                    title,
                    description,
                    qty: count + 1,
                  };
                  axios
                    .put(`https://mock-server-app-2-4ouf.onrender.com/cart/${id}`, updatedItem)
                    .then(() => {
                      setCount(count + 1);
                      dispatch(addcartcount(updatedItem));
                    })
                    .catch((err) => console.log("Update cart error:", err));
                }}
              >
                &#43;
              </button>
              <h3>{Math.round(acprice * count)}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Leftside;
