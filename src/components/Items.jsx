import  { useState, useEffect } from "react";
import Spinner from "../components/Spinner.jsx";

import {Link} from 'react-router-dom'

const Items = ({ isHome = false }) => {


  const api = "https://gradserver-y3h5.onrender.com/items?:limit=3"; // API endpoint to fetch items

console.log(api)
  const [Items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);



useEffect(() => {
  const fetchItems = async () => {
    try {
      const res = await fetch("https://gradserver-y3h5.onrender.com/items");
      const data = await res.json();
      setItems(isHome ? data.slice(0, 3) : data);
    } catch (error) {
      console.error("error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  fetchItems();
}, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Items.map((item) => {
            return (
              <>
                <div className="item" key={item.id}>
                  <img src={item.img} />

                  <div className="info">
                    <h2>{item.name}</h2>
                    <p>Price:{item.price}</p>
                    <p>Location: {item.adress}</p>
                    <p>{item.description}</p>
                  </div>
                  <Link to={"/item-details/"+item.id}>  
                  <button>
                    More Details
                  </button>
                  </Link>
                </div>
                
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Items;
