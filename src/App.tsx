import './App.css';
import {Header} from './Components/Header';
import { CreateTask } from './Components/CreateTask';
import { TaskList } from './Components/TaskList';
import { useState } from 'react';

export type Task = {
  id: number,
  content: string,
  done: boolean,
};

function App() {
  const [tasks, setTasks] = useState(Array<Task>);

  function addTask(task: Task) {
    setTasks([...tasks, task])
  }

  function removeTask(taskId: number) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <main>
      <Header />
      <CreateTask onAddTask={addTask} />
      <TaskList tasks={tasks} onRemoveTask={removeTask}/>
    </main>    
  )
}

export default App
