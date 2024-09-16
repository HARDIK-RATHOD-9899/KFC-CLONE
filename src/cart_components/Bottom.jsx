import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "../menu_components/Item";
import styles from "./cart.module.css";
const Bottom = () => {
  let [recom, setrecom] = useState([]);
  useEffect(() => {
    axios
      .get("https://mock-server-app-2-4ouf.onrender.com/chicken-bucket")
      .then(({ data }) => {
        setrecom(data);
      });
  }, []);

  return (
    <>
      <h2>Top Recommended Meals</h2>
      <div className={styles.toprecom}>
        {recom.map((el, index) => {
          return <Item key={index} {...el} />;
        })}
      </div>
    </>
  );
};

export default Bottom;
