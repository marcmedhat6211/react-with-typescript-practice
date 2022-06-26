import React, { useContext } from "react";

// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

/**
 * The React.FC is a Generic type (FC stands for Functional Component)
 * By defining that the Todos const is of type React.FC, now typescript understands that this is a function that will always receive a props object which will always have a key named 'children'
 * The object you are inserting between the '<>' is the type of the object you are expecting this component to receive
 * This Object will get merged with the Object values in the props object, and this is a built in functionality in the React.FC type
 * We can make say that it is optianl to have an items key in the props object by adding a '?' after the items keyword
 *      React.FC<{items?: string[]}>
 */
const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {/* {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          // here we used the bind method to pre configure this method for future calls
          // the first parameter specifies the this keyword and the second parameter is the first parameter this function is going to receive when it's called
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))} */}
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
