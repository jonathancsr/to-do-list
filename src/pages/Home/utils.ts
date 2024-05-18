import { v4 as uuid } from 'uuid';
import { Task } from '../../types';

export const createTask = (title: string, tasks: Task[]) => {
  if(title === '') return tasks;

  return [...tasks, {
    id: uuid(),
    title,
    completed: false
  }]
}