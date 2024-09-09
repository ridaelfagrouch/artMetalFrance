import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { ComplexNavbar, BodyHeader } from './components'


function App() {

  return (
    <BrowserRouter>
      <ComplexNavbar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1320px]">
          <BodyHeader />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
