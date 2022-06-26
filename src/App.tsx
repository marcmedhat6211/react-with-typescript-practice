import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  /**
   * The never[] type means that this array should never have any values stored in it
   * The use state is of generic type so we can define a concrete type that it should always return here
   * and in this case is an array of 'Todo'
   */
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [
  //   new Todo("t1", "Learn React"),
  //   new Todo("t2", "Learn Typescript"),
  // ];

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(new Date().toISOString(), todoText);

    // setTodos((prevState) => {
    //   return prevState.concat(newTodo);
    // });
    // setTodos([...todos, newTodo]);

    //concat returns a new array
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
