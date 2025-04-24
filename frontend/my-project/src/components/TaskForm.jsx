import { useState } from 'react';
import axios from 'axios';

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task title cannot be empty');
      return;
    }
    try {
      await axios.post(
        'http://localhost:5000/api/tasks',
        { title },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setTitle('');
      setError('');
      fetchTasks();
    } catch (err) {
      setError(err.response?.data.message || 'Failed to add task');
    }
  };

  return (
    <div className="mb-6">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskForm;