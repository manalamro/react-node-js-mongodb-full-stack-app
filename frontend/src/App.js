import React, { useState } from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';


function App() {
  const [editing, setEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  return (
    <div>
      <ItemList setEditing={setEditing} setItemToEdit={setItemToEdit} />
      {editing ? (
        <UpdateItem
          editing={editing}
          setEditing={setEditing}
          itemToEdit={itemToEdit}
          setItemToEdit={setItemToEdit}
        />
      ) : (
        <AddItem setEditing={setEditing} setItemToEdit={setItemToEdit} />
      )}
    </div>
  );
}

export default App;
