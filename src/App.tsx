import React, { useState } from "react";
import { ToDoList } from "./components/ToDoList";
import  NewToDo  from "./components/NewToDo";
import { ToDo } from "./components/toDo.model";
import './app.css'

const App: React.FC = () => {
  // const todos = [{ id: "t1", text: "Finish the TS course" }];// we need to pass props inside 
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAddHandler = (text: string) => {
    // setTodos([{ id: Math.random().toString(), text: text }]);
    setTodos([...todos, { id: Math.random().toString(), text: text }]); // mutably adding new items with spread operator
  };

  const toDoDeleteHandler = (todoId: string) => { // passing the props to the actual component - moving state up - stage management handles it nicely
    setTodos((prevTodos) => {
      return prevTodos.filter((todo)=> todo.id !== todoId);
    })
  }
 
  return (
    <div className="App">
      <h1>To do app</h1>
      <NewToDo onAddToDo={todoAddHandler}/>
      {/* A component that will add todos */}
      <ToDoList items={todos} onDeleteToDo={toDoDeleteHandler}/> {/* instad of passing it here we need to recieve the props in the to do list file */}
    </div>
  );
};

export default App;
