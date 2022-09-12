import { useState, VoidFunctionComponent } from 'react';
import {Task as TaskType} from '../App';
import styles from './Task.module.css';
import checkImg from '../assets/check.svg';
import checkedImg from '../assets/checked.svg';
import trashImg from '../assets/trash.svg';


interface TaskProps {
  task: TaskType;
  onCheckTask(checkResponse: boolean) : void;
  onRemoveTask(taskId: number): void;
}

export function Task({task, onCheckTask, onRemoveTask}: TaskProps) {
  const [taskCheck, setTaskCheck] = useState(false);

  function handleCheckBoxTask() {
    setTaskCheck(state => !state);
    onCheckTask(!taskCheck);
  }

  function handleRemoveTask() {
    if (taskCheck) {
      handleCheckBoxTask();
    }
    onRemoveTask(task.id);
  }

  return (
    <li>
      <button
        className={styles.checkboxRound}
        onClick={handleCheckBoxTask}>
        <img src={taskCheck ? checkedImg: checkImg}/>
      </button>     
      <p className={styles.taskContent}>{task.content}</p>
      <button
        className={styles.trashButton}
        onClick={handleRemoveTask}>
        <img src={trashImg}/>
      </button>
    </li>
  )
}