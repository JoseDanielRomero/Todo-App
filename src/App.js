import { useState } from 'react';
import './App.css';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = darkMode ? 'App dark' : 'App light';

  return (
    <div className={changeTheme}>
      <HeaderContent 
        darkMode={darkMode}
      />
      <MainContent
        newTask={newTask}
        setNewTask={setNewTask}
        tasks={tasks}
        setTasks={setTasks}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;
