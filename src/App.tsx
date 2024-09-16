import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { ComplexNavbar, BodyHeader, Serviceslider, About, Expertises } from './components'


function App() {

  return (
    <BrowserRouter>
      <ComplexNavbar />
      <main className="flex-grow mt-[120px]">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[1300px] flex flex-col gap-14">
            <BodyHeader />
            <Serviceslider />
            <About />
            <Expertises />
          </div>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
