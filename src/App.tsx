import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { ComplexNavbar, BodyHeader, Partners, About } from './components'


function App() {

  return (
    <BrowserRouter>
      <ComplexNavbar />
      <main className="flex-grow mt-[120px]">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[1320px] flex flex-col gap-14">
            <BodyHeader />
            <Partners />
            <About />
          </div>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
