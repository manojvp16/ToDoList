import { useState } from 'react';
import axios from 'axios';

function TaskList({ tasks, fetchTasks }) {
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [error, setError] = useState('');

  const handleToggleComplete = async (task) => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${task._id}`,
        { ...task, completed: !task.completed },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      fetchTasks();
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task._id);
    setEditTitle(task.title);
  };

  const handleUpdate = async (taskId) => {
    if (!editTitle.trim()) return;
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${taskId}`,
        { title: editTitle },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setEditingTask(null);
      setEditTitle('');
      fetchTasks();
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log('Delete response:', response.data);
      fetchTasks();
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to delete task';
      setError(errorMessage);
      console.error('Delete error:', err.response || err);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex items-center justify-between p-2 border rounded bg-gray-50"
          >
            {editingTask === task._id ? (
              <div className="flex-1 flex space-x-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="flex-1 p-1 border rounded"
                />
                <button
                  onClick={() => handleUpdate(task._id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingTask(null)}
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task)}
                    className="h-5 w-5"
                  />
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.title}
                  </span>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;