import '../stylesheets/TaskList.css'
import InputTask from './InputTask';

function TaskList({ newTask, setNewTask, tasks, setTasks }) {
  return (
    <>
      <InputTask 
        newTask={newTask}
        setNewTask={setNewTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <article className='task-list-container'>
    
      </article>
    </>
  )
}

export default TaskList;