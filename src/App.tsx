import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { ComplexNavbar, BodyHeader, Serviceslider, About, Expertises, Partners, Contact, Questions } from './components'


function App() {

  return (
    <BrowserRouter>
      <ComplexNavbar />
      <main className="flex-grow mt-[120px]">
        <div className="w-full flex flex-col justify-center items-center gap-14">
          <div className="w-full max-w-[1300px] flex flex-col gap-14">
            <BodyHeader />
            <Serviceslider />
          </div>
          <div className='w-full flex justify-center items-center bg-gray-100'>
            <div className="w-full h-full max-w-[1300px] flex flex-col ">
              <About />
            </div>
          </div>
          <div className="w-full max-w-[1300px] flex flex-col gap-14">
            <Expertises />
          </div>
          <div className='w-full min-h-[500px] flex justify-center items-center bg-gray-100 py-[10px]'>
            <div className="w-full h-full max-w-[1300px] flex flex-col  ">
              <Partners />
            </div>
          </div>
          <div className="w-full max-w-[1300px] flex flex-col gap-14">
            <Contact />
          </div>
          <div className='w-full min-h-[500px] flex justify-center items-center bg-gray-100 py-[10px]'>
            <div className="w-full h-full max-w-[1300px] flex flex-col  ">
              <Questions />
            </div>
          </div>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
