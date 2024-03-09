import './App.css'
import Nav from './Components/Nav'
import ContactUs from './Sections/ContactUs'
import Feedback from './Sections/Feedback'
import Footer from './Sections/Footer'
import Goal from './Sections/Goal'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import WhyUs from './Sections/WhyUs'

function App() {


  return (
    <>
    <main className="relative">
     
      <section id='hero' className=' padding max-container'>
        <section className='z-10'>
        <Hero/>
        </section>
       
      </section>

      <section className=' padding max-container'>
        <Services/>
      </section>

      <section className=' padding max-container'>
        <WhyUs/>
      </section>

      <section className=' padding max-container'>
        <Goal/>
      </section>

      <section className=' padding'>
        <Feedback/>
      </section>

      <section className='border'>
        <ContactUs/>
      </section>

      <section className='border padding-t padding-x'>
        <Footer/>
      </section>
    </main>
    </>
  )
}

export default App
