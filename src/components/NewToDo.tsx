import React, { useRef } from "react";
import './newToDo.css'

type NewToDoProps = {
    onAddToDo: (todoText: string) => void; // function type
};

const NewToDo: React.FC<NewToDoProps> = (props) => { // hier define the type
  const textInputRef = useRef<HTMLInputElement>(null);

  const toDoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    //if (enteredText === '' || ' '){
    if(enteredText.trim().length === 0){
        alert('Enter something!');
    }
    else {
        props.onAddToDo(enteredText);
        if(textInputRef.current){
            textInputRef.current.value = '';
        }
    }
  };

  return (
    <form onSubmit={toDoSubmitHandler}>
      <div>
        <label htmlFor="toDoText"> ToDo Text </label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit"> Add ToDo </button>
    </form>
  );
};

export default NewToDo;
