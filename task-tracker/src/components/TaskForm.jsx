import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #0056b3;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask(task);
    setTask("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TaskForm;
