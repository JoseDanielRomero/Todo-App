import {v4 as uuidv4} from 'uuid'
import '../stylesheets/InputTask.css'
import addIcon from '../images/round-add-button-svgrepo-com.svg'

function InputTask({ newTask, setNewTask, tasks, setTasks }) {
    const handleChangeTask = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const copyTasks = [...tasks];
        const noSpacesNewTask = newTask.trim();
        copyTasks.push({
            id: uuidv4(),
            text: noSpacesNewTask,
            isCompleted: false
        });
        setTasks(copyTasks)
        console.log(copyTasks);
        setNewTask('')
    }

    return (
        <form className='input-task-container' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Create a new todo...' 
                className='input-task' 
                spellCheck='false'
                value={newTask}
                onChange={handleChangeTask}
            />
            <button type='submit' className='submit-button'>
                <img src={addIcon} className='add-icon'/>
            </button>
        </form>
    )
}

export default InputTask;