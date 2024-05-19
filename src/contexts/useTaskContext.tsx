import { createContext, useContext, useState } from "react";
import { v4 as uuid } from 'uuid';
import { Task } from "../types";
type TaskContextType = {
  tasks: Task[];
  addNewTask: (title: string) => void;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const DEFAULT_VALUE = {
  tasks: [],
  addNewTask: () => {},
  completeTask: () => {},
  deleteTask: () => {}
}

const TaskContext = createContext<TaskContextType>(DEFAULT_VALUE);

const TaskContextProvider = ({children}: {children: React.ReactElement}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(title: string) {
    setTasks([...tasks, {
      id: uuid(),
      title,
      completed: false
    }])
  }

  function completeTask(id: string) {
    const newTasks = tasks.map((task) => {
      if(task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task
    })
    setTasks(newTasks);
  }

  function deleteTask (id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <TaskContext.Provider value={{tasks, addNewTask, completeTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
}

export { TaskContextProvider };
