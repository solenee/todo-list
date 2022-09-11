import React, {useState} from 'react';
import './App.css';

// components
import Header from "./Header";
import ToDoList from './ToDoList';

import data from "./data.json";

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  // SEH: needs redesign
  const handleToggle = (id) => {
    let updatedList = toDoList.map(item => {
      return item.id == id ? {...item, complete: !item.complete} : { ...item};
    });
    setToDoList(updatedList);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
