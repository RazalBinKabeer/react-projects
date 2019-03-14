import TaskItem from "./TaskItem";
import styled from "styled-components";

const ListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ListContainer>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          removeTask={() => removeTask(index)}
        />
      ))}
    </ListContainer>
  );
};

export default TaskList;
