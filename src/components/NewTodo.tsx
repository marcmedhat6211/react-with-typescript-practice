import React from "react";
import classes from "./NewTodo.module.css";

import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

/**
 * Here we are specifying the type of this functional component
 * and the type of its props is an object which is a function that returns a void value
 * and below is the syntax for this definition
 */
const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  // here you have to tell the ref whih input type it is going to be connected with
  // and you have to give it an initial value (because what if it is connected to another input)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    /**
     * the ? means that the enteredText value could be null because ts is not sure that it will have a value at this point
     * you can replace the ? with an !
     *    this means that you as a developer know that this value will never be null at this spot
     */
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // add error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
