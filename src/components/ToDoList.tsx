import React from "react";
import './toDoList.css'

interface ToDoListProps {
    items : {id: string, text: string}[]; // we pass on that interface to the ToDoList component
    onDeleteToDo: (id: string) => void;
    onEditToDo: (id: string) => void;
}

export const ToDoList: React.FC<ToDoListProps> = (props) => {
 // const todos = [{ id: "t1", text: "Finish the course" }];

  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onEditToDo.bind(null, todo.id)}>Edit</button>
            <button onClick={props.onDeleteToDo.bind(null, todo.id)}>Delete</button>
            </li>
      ))}
    </ul>
  );
};
