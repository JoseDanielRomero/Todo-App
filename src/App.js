import { useState } from 'react';
import './App.css';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <HeaderContent />
      <MainContent
        newTask={newTask}
        setNewTask={setNewTask}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
