import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      const todo = { id: Math.random(), task: task };

      setTodos([...todos, todo]);
    }
    setTask("");
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((todo) => todo.id !== index);
    setTodos(newTodos);
  };

  // function to get the value of the edit input and set the new state
  const handleEditInputChange = (e) => {
    // set the new state value to what's currently in the edit input box
    setCurrentTodo({ ...currentTodo, task: e.target.value });
  };

  // function to handle when the "Edit" button is clicked
  const handleEditClick = (todo) => {
    // set editing to true
    setIsEditing(true);

    // set the currentTodo to the todo item that was clicked
    setCurrentTodo({ ...todo });
  };

  // function to edit a todo item
  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEditing(false);

    setTodos(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    console.log("e do handleEditFormSubmit :", e);
    e.preventDefault();

    // call the handleUpdateTodo function - passing the currentTodo.id and the currentTodo object as arguments
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do List App</h2>
        {isEditing ? (
          <div className="todo-input">
            <input
              type="text"
              placeholder="Edit task"
              value={currentTodo.task}
              onChange={handleEditInputChange}
            />
            <button onClick={handleEditFormSubmit}>Save a Aletarção</button>
          </div>
        ) : (
          <div className="todo-input">
            <input
              type="text"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
          </div>
        )}

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.task}
              <button onClick={() => handleEditClick(todo)}>Edit</button>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
