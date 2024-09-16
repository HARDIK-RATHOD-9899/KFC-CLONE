import axios from "axios";
import {React,useState} from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import SingleItem from '../menu_components/SingleItem';
import { useDispatch } from "react-redux";
// import { addcart, addcartcount } from '../redux/action'
import styles from "../menu_components/item.module.css"
import Reccom from '../menu_components/Reccom'
import Beverages from '../menu_components/Beverages'
// const dispatch = useDispatch();
  // const [count, setCount] = useState(0);
import { useNavigate } from "react-router-dom";
import { addcart, addcartcount } from "../redux/action";

const SingleProduct = () => {
  const { id } = useParams();
  const [single, setsingle] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://mock-server-app-2-4ouf.onrender.com/chicken-bucket?id=${id}`)
      .then((res) => {
        setsingle(res.data);
      })
      .catch((err) => console.log("Error fetching product:", err)); // Error handling
  }, [id]);

  return (
    <>
      {single.map((el) => {
        const { Image, price, title, description } = el; // Destructure values here

        return (
          <div style={{ marginTop: "70px", marginBottom: "70px" }} key={id}>
            <div className={styles.singleupperbox}>
              <div className={styles.mainsinglebox}>
                <img src={Image} alt="food" />
                <h2>{title}</h2>
                <p className={styles.singledesc}>{description}</p>
                <p>Calories {Math.round(Math.random() * (2000 - 1000) + 1000)}</p>
                <h2>₹{price}</h2>

                <div className={styles.cartbutton}>
                  <h3>
                    {!count ? (
                      <p
                        className={styles.addto}
                        onClick={() => {
                          setCount(count + 1);
                          const cartItem = {
                            id,
                            Image,
                            price,
                            title,
                            description,
                            qty: count + 1,
                          };
                          axios.post(`https://mock-server-app-2-4ouf.onrender.com/cart/?id=${id}`, cartItem)
                            .then(() => dispatch(addcart(cartItem)))
                            .catch((err) => console.log("Add to cart error:", err)); // Error handling
                        }}
                      >
                        Add to cart
                      </p>
                    ) : (
                      <div>
                        <button
                          className={styles.minus}
                          onClick={() => {
                            if (count > 0) {
                              setCount(count - 1);
                              const updatedItem = {
                                id,
                                Image,
                                price,
                                title,
                                description,
                                qty: count - 1,
                              };
                              axios
                                .put(
                                  `https://mock-server-app-2-4ouf.onrender.com/cart/${id}`,
                                  updatedItem
                                )
                                .then(() => dispatch(addcartcount(updatedItem)))
                                .catch((err) =>
                                  console.log("Update cart error:", err)
                                ); // Error handling
                            }
                          }}
                        >
                          &#8211;
                        </button>
                        <span>{count}</span>
                        <button
                          className={styles.plus}
                          onClick={() => {
                            setCount(count + 1);
                            const updatedItem = {
                              id,
                              Image,
                              price,
                              title,
                              description,
                              qty: count + 1,
                            };
                            axios
                              .put(
                                `https://mock-server-app-2-4ouf.onrender.com/cart/${id}`,
                                updatedItem
                              )
                              .then(() => dispatch(addcartcount(updatedItem)))
                              .catch((err) =>
                                console.log("Update cart error:", err)
                              ); // Error handling
                          }}
                        >
                          &#43;
                        </button>
                      </div>
                    )}
                  </h3>
                  <Link to={`/cart`}>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                      alt="Go to cart"
                    />
                  </Link>
                </div>
                <h1 className={styles.pepsi}>You can enjoy this delicious dish with</h1>
                <Beverages />
              </div>
              <div>
                {/* <Reccom /> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleProduct;
