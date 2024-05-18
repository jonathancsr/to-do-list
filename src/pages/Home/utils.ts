import { v4 as uuid } from 'uuid';

export const createTask = (title: string) => {
  return {
    id: uuid(),
    title,
    completed: false
  }
}