import React from 'react';

function TaskList({ tasks, listName }) {
  return (
    <div className="task-list">
      <h2>{listName}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
