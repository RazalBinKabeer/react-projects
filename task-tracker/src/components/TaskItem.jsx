import styled from "styled-components";

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;

const TaskItem = ({ task, removeTask }) => {
  return (
    <TaskContainer>
      <span>{task}</span>
      <Button onClick={removeTask}>Remove</Button>
    </TaskContainer>
  );
};

export default TaskItem;
