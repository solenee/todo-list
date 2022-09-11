import React from 'react';
import ToDoItem from "./ToDoItem";

const ToDoList = ({toDoList, handleToggle}) => {
    return (
        <div>
            {toDoList.map(item => {
                return (
                    <ToDoItem toDoItem={item} handleToggle={handleToggle}/>
                )
            })}
        </div>
    );
};

export default ToDoList;
