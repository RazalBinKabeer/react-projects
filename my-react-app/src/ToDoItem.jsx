import PropTypes from "prop-types";

const ToDoItem = ({ task, completed }) => {
  return (
    <div>
      <h4 style={{ textDecoration: `${completed ? "line-through" : "none"}` }}>
        {task}
      </h4>
    </div>
  );
};

ToDoItem.propTypes = {
  task: PropTypes.string,
  completed: PropTypes.bool,
};

ToDoItem.defaultProps = {
  task: "No task",
  completed: true,
};

export default ToDoItem;
