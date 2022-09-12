import styles from './TaskList.module.css';
import {Task as TaskType} from '../App';
import { Task } from './Task';
import { useState } from 'react';

interface TaskListProps {
  tasks: Array<TaskType>;
  onRemoveTask(taskId: number): void;
}

export function TaskList({tasks, onRemoveTask}: TaskListProps) {
  const [tasksDoneCount, setTasksDoneCount] = useState(0);

  const tasksCount = tasks.length;

  function checkTask(checkResponse: boolean) {
    setTasksDoneCount(checkResponse ? tasksDoneCount + 1 : tasksDoneCount - 1);
  }
  return (
    <div className={styles.taskListWrapper}>
      <header className={styles.listHeader}>
        <div><p>Tarefas criadas {tasksCount}</p></div>
        <div><p>Concluidas {tasksDoneCount}</p></div>
      </header>
        <ul>
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onCheckTask={checkTask}
              onRemoveTask={onRemoveTask}
            />
          ))}          
        </ul>
    </div>
  )
}