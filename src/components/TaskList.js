import '../stylesheets/TaskList.css'
import InputTask from './InputTask';

function TaskList({ newTask, setNewTask, tasks, setTasks }) {
  const handleChangeCheckbox = (event, idTask) => {
    const {checked} = event.target;
    const findId = tasks.findIndex((element) => element.id === idTask )
    const copyCheckboxes = [...tasks];
    copyCheckboxes[findId].isCompleted = checked;
    setTasks(copyCheckboxes);
  }

  return (
    <>
      <InputTask 
        newTask={newTask}
        setNewTask={setNewTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <article className='task-list-container'>
        {tasks.map(task => {

          const taskClass = task.isCompleted == true ? 'task-text tachado' : 'task-text normal';

          return (
            <div className='task-container'>
              <label className={taskClass}>
                <input
                  type='checkbox' 
                  className='checkbox-task'
                  checked={task.isCompleted}
                  onChange={(event) => {
                    handleChangeCheckbox(event, task.id);
                  }}
                />
                {task.text}
              </label>
              <hr></hr>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default TaskList;