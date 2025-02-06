import React from "react";

interface ToDoListProps {
    items : {id: string, text: string}[]; // we pass on that interface to the ToDoList component
}

export const ToDoList: React.FC<ToDoListProps> = (props) => {
 // const todos = [{ id: "t1", text: "Finish the course" }];

  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
