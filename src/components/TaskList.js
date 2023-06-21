import '../stylesheets/TaskList.css'
import InputTask from './InputTask';

function TaskList({ newTask, setNewTask, tasks, setTasks }) {
  const handleChangeCheckbox = (event, idTask) => {
    const {checked} = event.target;
    const findId = tasks.findIndex((element) => element.id === idTask );
    const copyCheckboxes = [...tasks];
    copyCheckboxes[findId].isCompleted = checked;
    setTasks(copyCheckboxes);
  }

  const handleButtonCompleted = (tasks) => {
    const copyTasksOriginal = [...tasks];
    const filterCompleted = copyTasksOriginal.filter((element) => element.isCompleted == false);
    setTasks(filterCompleted);
  }

  const itemsCounter = (tasks) => {
    const copyTasksForCount = [...tasks];
    const countPending = copyTasksForCount.filter((element) => element.isCompleted == false);
    return countPending.length;
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
      <article className='buttons-container'>
        <div className='pending-counter'>
          {itemsCounter(tasks)} items left
        </div>
        <button
          className='clear-button'
          onClick={() => {
            handleButtonCompleted(tasks);
          }}
          // onClick={handleButtonCompleted(tasks)}
        >Clear Completed</button>
      </article>
    </>
  )
}

export default TaskList;