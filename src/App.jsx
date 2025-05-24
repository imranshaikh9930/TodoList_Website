import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Process from './Components/Process'
import CallToActions from './Components/CTA'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonials'
import SubmissionTable from './Components/SubmissionTable';
import { useSubmissions } from './Context/SubmissionContext';
import Form from './Components/Form';

function App() {
  const [count, setCount] = useState(0)
  const {submissions} = useSubmissions();
  return (
    <div className='flex flex-col relative'>
     <Navbar/>
     <Hero/>
   
     <Process/>
     <Testimonials/>
     <CallToActions/>
     {
      submissions && <SubmissionTable/>
     }
     <Footer/>
    </div>
  )
}

export default App
