import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import "./style.css"

const UpdateItem = ({ editing, setEditing, itemToEdit, setItemToEdit }) => {
  const [updatedItem, setUpdatedItem] = useState({
    itemName: '',
    itemStatus: '',
    itemNumber: 0,
  });

  useEffect(() => {
    // Update the local state when itemToEdit changes
    setUpdatedItem({
      itemName: itemToEdit.itemName,
      itemStatus: itemToEdit.itemStatus,
      itemNumber: itemToEdit.itemNumber,
    });
  }, [itemToEdit]);

  const handleChange = (e) => {
    setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the item on the server
    axios.put(`${baseURL}/EditItem/${itemToEdit._id}`, updatedItem)
      .then(response => {
        // Reset the form and update the local state
        setUpdatedItem({
          itemName: '',
          itemStatus: '',
          itemNumber: 0,
        });

        // Fetch all items again to update the list
        // (Alternatively, you can just update the existing list with the updated item)
        setEditing(false);
        setItemToEdit(null);
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };

  return (
    <div>
      {editing && (
        <div>
          <h2>Edit Item</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Item Name:
            </label>
            <input type="text" name="itemName" value={updatedItem.itemName} onChange={handleChange} required />

            <br />
            <label>
              Item Status:
            </label>
            <input type="text" name="itemStatus" value={updatedItem.itemStatus} onChange={handleChange} required />

            <br />
            <label>
              Item Number:
            </label>
            <input type="number" name="itemNumber" value={updatedItem.itemNumber} onChange={handleChange} required />
            <br />
            <div className='rowItem'>
            <button className="submit" type="submit">Update Item</button>
            <button  className='cancel' onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateItem;
