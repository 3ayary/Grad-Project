import { useEffect, useState } from 'react';
import "../components/style/dashboard.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function Dashboard() {
  const apiEndpoint = 'https://gradserver-y3h5.onrender.com';
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", adress: "", price: "", img: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const userState = useSelector((state) => state.user.thestate);
  const navigate = useNavigate();

  useEffect(() => {
    if (userState === false) {
      alert('Access denied! Please log in to access the dashboard.');
      navigate('/login');
    }
  }, [userState, navigate]);

  useEffect(() => {
    fetch(`${apiEndpoint}/items`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Failed to fetch items:", err));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    const newItem = { ...form, id: Date.now().toString() };
    fetch(`${apiEndpoint}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then(res => res.json())
      .then(() => {
        setItems([...items, newItem]);
        setForm({ name: "", adress: "", price: "", img: "", description: "" });
      })
      .catch(err => console.error("Failed to add item:", err));
  };

  const handleDelete = (id) => {
    fetch(`${apiEndpoint}/items/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(err => console.error("Failed to delete item:", err));
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm(item);
  };

  const handleUpdate = () => {
    fetch(`${apiEndpoint}/items/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(() => {
        setItems(items.map(item => (item.id === editingId ? { ...form, id: editingId } : item)));
        setEditingId(null);
        setForm({ name: "", adress: "", price: "", img: "", description: "" });
      })
      .catch(err => console.error("Failed to update item:", err));
  };

  return (
    <div className="dashboard-container">
      <h2 className="title">{editingId ? "Edit Item" : "Add New Item"}</h2>
      <input name="name" onChange={handleChange} value={form.name} placeholder="Name" />
      <input name="adress" onChange={handleChange} value={form.adress} placeholder="Address" />
      <input name="price" onChange={handleChange} value={form.price} placeholder="Price" />
      <input name="img" onChange={handleChange} value={form.img} placeholder="Image URL" />
      <textarea name="description" onChange={handleChange} value={form.description} placeholder="Description" />

      {editingId ? (
        <button onClick={handleUpdate} className="update-btn">Update</button>
      ) : (
        <button onClick={handleAdd} className="add-btn">Add</button>
      )}

      <hr />

      <h2 className="subtitle">All Items</h2>
      {items.map(item => (
        <div key={item.id} className="item-box">
          <h3>{item.name}</h3>
          <p>{item.adress} - {item.price}</p>
          <div className="btn-group">
            <button onClick={() => handleEdit(item)} className="edit-btn">Edit</button>
            <button onClick={() => handleDelete(item.id)} className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
