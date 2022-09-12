import { useState, FormEvent } from 'react';
import {Task} from '../App';
import './CreateTask.module.css';

interface CreateTaskProps {
  onAddTask(task: Task): void;
}

export function CreateTask({onAddTask}: CreateTaskProps) {
  const [inputTask, setInputTask] = useState('');
  const [countId, setCountId] = useState(0);

  function handlInputTask(event: FormEvent) {
    event.preventDefault();
    const task: Task = {
      id: countId,
      content: inputTask,
      done: false,
    };
    onAddTask(task);
    setInputTask('');
    setCountId((state) => state+1);
  }

  const isInputEmpty = inputTask.length === 0;
  return (
    <form onSubmit={handlInputTask}>
      <input
        type='text'
        name='inputTask'
        value={inputTask}
        onChange={(event) => setInputTask(event.target.value)}/>
      <button
        type='submit'
        disabled={isInputEmpty} 
      >Criar</button>
    </form>
  )
}