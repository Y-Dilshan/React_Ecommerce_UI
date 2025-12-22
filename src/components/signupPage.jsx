import { useState } from 'react';
 <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

export default function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Style with Tailwind', completed: false },
    { id: 3, text: 'Build something awesome', completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            React + Tailwind CSS
          </h1>
          <p className="text-gray-600">A beautiful component demo</p>
        </header>

        {/* Counter Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Counter</h2>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200 transform hover:scale-105"
            >
              -
            </button>
            <span className="text-4xl font-bold text-indigo-600 min-w-[100px] text-center">
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200 transform hover:scale-105"
            >
              +
            </button>
          </div>
          <button
            onClick={() => setCount(0)}
            className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Reset
          </button>
        </div>

        {/* Task List Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Task List</h2>
          <div className="space-y-3">
            {tasks.map(task => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200"
              >
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition duration-200 ${
                  task.completed 
                    ? 'bg-indigo-500 border-indigo-500' 
                    : 'border-gray-300'
                }`}>
                  {task.completed && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`flex-1 text-gray-700 ${
                  task.completed ? 'line-through text-gray-400' : ''
                }`}>
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow p-4 border-t-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 mb-2">Responsive</h3>
            <p className="text-sm text-gray-600">Built with mobile-first approach</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border-t-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2">Interactive</h3>
            <p className="text-sm text-gray-600">Smooth hover and click effects</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border-t-4 border-purple-500">
            <h3 className="font-semibold text-gray-800 mb-2">Customizable</h3>
            <p className="text-sm text-gray-600">Easy to modify with Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}