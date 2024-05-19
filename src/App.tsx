import { TaskContextProvider } from './contexts/useTaskContext'
import './index.css'
import { HomePage } from "./pages/Home"
function App() {
  return (
    <TaskContextProvider>
      <HomePage/>
    </TaskContextProvider>
  )
}

export default App
