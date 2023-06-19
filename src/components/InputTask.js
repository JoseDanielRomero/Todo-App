import '../stylesheets/InputTask.css'
import addIcon from '../images/round-add-button-svgrepo-com.svg'

function InputTask() {
    return (
        <form className='input-task-container'>
            <input type='text' placeholder='Create a new todo...' className='input-task' spellCheck='false'/>
            <button type='submit' className='submit-button'>
                <img src={addIcon} className='add-icon' />
            </button>
        </form>
    )
}

export default InputTask;