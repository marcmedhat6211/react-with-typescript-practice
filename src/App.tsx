import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("t1", "Learn React"),
    new Todo("t2", "Learn Typescript"),
  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
