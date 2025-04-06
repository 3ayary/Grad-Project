import "../components/style/itemDetails.css";
import { useParams } from "react-router-dom";
import itemsapi from "../data/ItemsData.json"; // Import the JSON data
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner.jsx"; // Import Spinner component for loading

const ItemDetails = () => {
  const { id } = useParams(); // Get the item ID from URL params
  const api = itemsapi.items; // Access the items array from JSON

  const [item, setItem] = useState(null); // State to store the selected item
  const [loading, setLoading] = useState(true); // Loading state for spinner


    const [showBookingForm, setShowBookingForm] = useState(false);
  
    const handleBookNowClick = () => {
      setShowBookingForm(!showBookingForm); // Toggle the booking form visibility
    };
  
  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        // Find the item in the array where the ID matches the URL param ID
        const selectedItem = api.find((item) => item.id === id);
        setItem(selectedItem); // Set the selected item in the state
      } catch (error) {
        console.error("Error fetching item details:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchItemDetails();
  }, [id, api]); // Run effect when `id` or `api` changes

  if (loading) {
    return <Spinner />; // Show loading spinner while data is being fetched
  }

  if (!item) {
    return <div>Item not found</div>; // Show message if item with the given ID is not found
  }


  return(
    <div className="detail-page">
      <div className="item-details-container">
        <div className="item-image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="item-info">
          <h1>{item.name}</h1>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <p>
            <strong>Address:</strong> {item.address}
          </p>
          <h3>{item.price}</h3>
          <button onClick={handleBookNowClick}>Book Now</button>
        </div>
      </div>

      {showBookingForm && (
        <div className="item-details-container2">
          <div className="input-info">
            <h1>Book now</h1>
            <div className="item-details-form">
              <div className="item-details-form-inputs">
                <h3>Name:</h3>
                <input placeholder="Name" />
              </div>
              <div className="item-details-form-inputs">
                <h3>Email:</h3>
                <input placeholder="Email" />
              </div>
              <div className="item-details-form-inputs">
                <h3>Phone:</h3>
                <input placeholder="Phone" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )







};

export default ItemDetails;
