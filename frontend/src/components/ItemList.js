import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {baseURL} from "../utils/constant"
import "./style.css"
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const ItemList = ({ setEditing, setItemToEdit }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch all items from the server
    axios.get(`${baseURL}/GetItems`)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, [items]);

  const handleEdit = (item) => {
    setEditing(true);
    setItemToEdit(item);
  };

  const handleDelete = (itemId) => {
    // Delete the item on the server
    axios.delete(`${baseURL}/DeleteItem/${itemId}`)
      .then(() => {
        // Update the local state
        setItems(prevItems => prevItems.filter(item => item._id !== itemId));
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        <div className='titels'>

        <div> Name</div>
      <div> Status</div>
      <div>ItemNumber</div>
        </div>


        {items.map(item => (
          <li key={item._id}>
            <div className='values'>
            <div>{item.itemName}</div>
            <div>{item.itemStatus}</div>
            <div>{item.itemNumber}</div>
            </div>
        
            <div className='icons'>
            <BiEditAlt onClick={() => handleEdit(item)}/>
            <BsTrash  onClick={() => handleDelete(item._id)}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
