import '../stylesheets/MainContent.css'
import InputTask from './InputTask';
import TaskList from './TaskList';

function MainContent({ newTask, setNewTask, tasks, setTasks, darkMode, setDarkMode }) {

    const handleChangeTheme = () => {
        setDarkMode(!darkMode)
    }

    const changeTheme = darkMode ? 'toogle-button dark' : 'toogle-button light';

    return (
        <main className='main-container'>
            <article className='logo-and-toogle-container'>
                <h1 className='logo'>
                    TODO
                </h1>
                <button 
                    className={changeTheme}
                    onClick={handleChangeTheme}
                />
            </article>
            <TaskList 
                newTask={newTask}
                setNewTask={setNewTask}
                tasks={tasks}
                setTasks={setTasks}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
        </main>
    )
}

export default MainContent;