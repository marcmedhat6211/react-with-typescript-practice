/**
 * The React.FC is a Generic type (FC stands for Functional Component)
 * By defining that the Todos const is of type React.FC, now typescript understands that this is a function that will always receive a props object which will always have a key named 'children'
 * The object you are inserting between the '<>' is the type of the object you are expecting this component to receive
 * This Object will get merged with the Object values in the props object, and this is a built in functionality in the React.FC type
 * We can make say that it is optianl to have an items key in the props object by adding a '?' after the items keyword
 *      React.FC<{items?: string[]}>
 */
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
