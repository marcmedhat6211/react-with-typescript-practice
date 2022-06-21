/**
 * In vanilla js you won't add the properties at the top of the class
 * here you have to put the types
 * After creating the class, you can then use that class as a type in any other place
 */

class Todo {
  id: string;
  text: string;

  constructor(todoId: string, todoText: string) {
    this.text = todoText;
    this.id = todoId;
  }
}

export default Todo;
