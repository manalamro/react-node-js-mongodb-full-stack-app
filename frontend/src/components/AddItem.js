import React, { useState } from 'react';
import axios from 'axios';
import {baseURL} from "../utils/constant"
import "./style.css"

const AddItem = ({ setEditing, setItemToEdit }) => {
  const [newItem, setNewItem] = useState({
    itemName: '',
    itemStatus: '',
    itemNumber: 0,
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item on the server
    axios.post(`${baseURL}/AddItems`, newItem)
      .then(response => {
        // Reset the form and update the local state
        setNewItem({
          itemName: '',
          itemStatus: '',
          itemNumber: 0,
        });

        // Fetch all items again to update the list
        // (Alternatively, you can just add the new item to the existing list)
        setEditing(false);
        setItemToEdit(null);
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
        </label>
        <input type="text" name="itemName" value={newItem.itemName} onChange={handleChange} required />

        <br />
        <label>
          Item Status:
        </label>
        <input type="text" name="itemStatus" value={newItem.itemStatus} onChange={handleChange} required />

        <br />
        <label>
          Item Number:
        </label>
        <input type="number" name="itemNumber" value={newItem.itemNumber} onChange={handleChange} required />
        <br />
        <button className='submitAdd' type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
