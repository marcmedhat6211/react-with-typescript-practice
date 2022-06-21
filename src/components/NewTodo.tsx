import React from "react";

import { useRef } from "react";

const NewTodo = () => {
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
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="button">Add Todo</button>
    </form>
  );
};

export default NewTodo;
