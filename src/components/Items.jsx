import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner.jsx";
import PopUp from "./popUp.jsx";
import "./style/item.css";

const Items = ({ isHome = false }) => {


  const api = isHome ? "http://localhost:9000/items?_limit=2": "http://localhost:9000/items";




  const [Items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showMore, setShowMore] = useState({});



  useEffect(() => {
    const fetchItems = async () => {
      
      try {

        const res = await fetch(api);
        const data = await res.json();
        setItems(data);

      } catch (error) {
        console.log("error fetching data", error);
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

                  <button
                    id={`button${item.id}`}
                    onClick={() => {
                      setShowMore((prev) => ({
                        ...prev,
                        [item.id]: !prev[item.id],
                      }));
                    }}
                  >
                    Contact Us
                  </button>
                </div>
                {showMore[item.id] && (
                  <div>
                   <PopUp/>
                  </div>
                )}
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Items;
