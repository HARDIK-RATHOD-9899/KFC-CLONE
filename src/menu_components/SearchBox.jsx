import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './item.module.css';

const SearchBox = () => {
  const [searchVal, setSearchVal] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [vegFilter, setVegFilter] = useState('All');
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    axios
      .get('https://mock-server-app-2-4ouf.onrender.com/chicken-bucket')
      .then((response) => {
        setItems(response.data);
        setFilteredItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Update filteredItems based on search, sorting, and filtering
  useEffect(() => {
    let updatedItems = [...items];

    // Apply search filter
    if (searchVal) {
      updatedItems = updatedItems.filter((item) =>
        item.title.toLowerCase().includes(searchVal.toLowerCase())
      );
    }

    // Apply vegetarian filter
    if (vegFilter !== 'All') {
      updatedItems = updatedItems.filter((item) =>
        vegFilter === 'Veg' ? item.veg : !item.veg
      );
    }

    // Apply sorting
    if (sortOrder === 'PriceLowToHigh') {
      updatedItems.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'PriceHighToLow') {
      updatedItems.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(updatedItems);
  }, [searchVal, sortOrder, vegFilter, items]);

  // Handle navigation to search page
  const handleSearch = (e) => {
    if (e.code === 'Enter') {
      localStorage.setItem('search', searchVal);
      navigate('/search');
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchbox}>
        <input
          type="text"
          value={searchVal}
          placeholder="Search Our Menu"
          onChange={(e) => setSearchVal(e.target.value)}
          onKeyUp={handleSearch}
        />
      </div>

      {/* Sorting, Filtering Controls */}
      <div className={styles.controls}>
        {/* Sorting */}
        <select onChange={(e) => setSortOrder(e.target.value)} className={styles.sortDropdown}>
          <option value="">Sort by</option>
          <option value="PriceLowToHigh">Price: Low to High</option>
          <option value="PriceHighToLow">Price: High to Low</option>
        </select>

        {/* Veg/Non-Veg Filter */}
        <select onChange={(e) => setVegFilter(e.target.value)} className={styles.filterDropdown}>
          <option value="All">All</option>
          <option value="Veg">Veg</option>
          <option value="NonVeg">Non-Veg</option>
        </select>
      </div>

      {/* Render Filtered and Sorted Items */}
      <div className={styles.itemContainer}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.itemBox}>
            <img src={item.Image} alt={item.title} className={styles.itemImage} />
            <h2>{item.title}</h2>
        <p><span style={{fontSize:"11px",background:"red",color:"red",borderRadius:"50%"}} >12</span> Non-veg Serves 2-3</p>

            <h5>{item.description}</h5>
            <h3>₹{item.price}</h3>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
