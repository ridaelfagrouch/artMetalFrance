import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { ComplexNavbar } from './components'


function App() {

  return (
    <BrowserRouter>
      <ComplexNavbar />
      <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-9">
      </div>
    </BrowserRouter>
  )
}

export default App
