import { Fragment, useState } from "react";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const deleteTodo = (indexToDelete) => {
    const updatedTodo = allTodos.filter((_, index) => index !== indexToDelete);
    setAllTodos(updatedTodo);
  };

  return (
    <Fragment>
      <input
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
        type="text"
      />
      <button
        disabled={!todoInput}
        onClick={() => {
          setAllTodos([...allTodos, todoInput]);
          setTodoInput("");
        }}
      >
        Add Todo
      </button>

      <ul>
        {allTodos.map((todo, index) => (
          <div key={index}>
            <li>{todo}</li>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoForm;
