import React, { useState } from 'react';
import TaskList from './tasklist';

function TodoList() {
  const [selectedList, setSelectedList] = useState('');
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState({
    listA: ['React task','Book read','College assignment'],
    listB: ['College quiz','iron'],
    listC: ['To-do-list','New interface','College tutorial','github'],
  });

  const handleListChange = (event) => {
    setSelectedList(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName) {
      setTasks({
        ...tasks,
        [selectedList]: [...tasks[selectedList], taskName],
      });
      setTaskName('');
    }
  };

  return (
    <div className="todo-list-container">
      <div className="control-panel">
        <select value={selectedList} onChange={handleListChange} className="task-list-select">
          <option value="">Select a list</option>
          <option value="listA">List A</option>
          <option value="listB">List B</option>
          <option value="listC">List C</option>
        </select>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="task-input"  />
        <button onClick={handleAddTask} className="add-task-button">Add Task</button>
      </div>
      <div className="task-lists">
        <TaskList tasks={tasks.listA} listName="List A" />
        <TaskList tasks={tasks.listB} listName="List B" />
        <TaskList tasks={tasks.listC} listName="List C" />
      </div>
    </div>
  );
}

export default TodoList;
