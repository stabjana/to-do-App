import React, { useState } from "react";
import { ToDoList } from "./components/ToDoList";
import  NewToDo  from "./components/NewToDo";
import { ToDo } from "./components/toDo.model";
import './app.css'

const App: React.FC = () => {
  // const todos = [{ id: "t1", text: "Finish the TS course" }];// we need to pass props inside 
  const [todos, setTodos] = useState<ToDo[]>([]); // mutably adding new items with spread operator

  const todoAddHandler = (text: string) => {
    // setTodos([{ id: Math.random().toString(), text: text }]);
    setTodos([...todos, { id: Math.random().toString(), text: text }]);
  };
 
  return (
    <div className="App">
      My to do app
      <NewToDo onAddToDo={todoAddHandler}/>
      {/* A component that will add todos */}
      <ToDoList items={todos}/> {/* instad of passing it here we need to recieve the props in the to do list file */}
    </div>
  );
};

export default App;
