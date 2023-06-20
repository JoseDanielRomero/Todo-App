import '../stylesheets/MainContent.css'
import InputTask from './InputTask';
import TaskList from './TaskList';

function MainContent({ newTask, setNewTask, tasks, setTasks }) {
    return (
        <main className='main-container'>
            <article className='logo-and-toogle-container'>
                <h1 className='logo'>
                    TODO
                </h1>
                <button className='toogle-button' />
            </article>
            <TaskList 
                newTask={newTask}
                setNewTask={setNewTask}
                tasks={tasks}
                setTasks={setTasks}
            />
        </main>
    )
}

export default MainContent;