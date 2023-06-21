import {v4 as uuidv4} from 'uuid'
import '../stylesheets/InputTask.css'
import addIcon from '../images/round-add-button-svgrepo-com.svg'

function InputTask({ newTask, setNewTask, tasks, setTasks, darkMode }) {
    const handleChangeTask = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const copyTasks = [...tasks];
        const noSpacesNewTask = newTask.trim();
        if (tasks.length < 7 && noSpacesNewTask.length > 0) {
            copyTasks.push({
                id: uuidv4(),
                text: noSpacesNewTask,
                isCompleted: false
            });
            setTasks(copyTasks)
        }
        setNewTask('')
    }

    const changeTheme = darkMode ? 'input-task-container dark' : 'input-task-container light';
    const changeTheme2 = darkMode ? 'input-task dark' : 'input-task light';
    const changeTheme3 = darkMode ? 'submit-button dark' : 'submit-button light';

    return (
        <form className={changeTheme} onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Create a new todo...' 
                className={changeTheme2} 
                spellCheck='false'
                value={newTask}
                onChange={handleChangeTask}
            />
            <button type='submit' className={changeTheme3}>
                <img src={addIcon} className='add-icon'/>
            </button>
        </form>
    )
}

export default InputTask;