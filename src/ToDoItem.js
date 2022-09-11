import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({toDoItem, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    };

    return (
        <div className={toDoItem.complete ? "todo-item strike" : "todo-item"}
            id={toDoItem.id} onClick={handleClick}>
            {toDoItem.task}
        </div>
    );
};

export default ToDoItem;
