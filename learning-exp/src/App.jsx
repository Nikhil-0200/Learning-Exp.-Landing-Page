import './App.css'
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
     
      <section id='hero' className=' padding max-container h-[100vh]'>
        <section>
        <Hero/>
        </section>
      </section>

      <section className='padding max-container'>
        <Services/>
      </section>

      <section className=' padding max-container'>
        <WhyUs/>
      </section>

      <section className=' padding max-container'>
        <Goal/>
      </section>

      <section className=' padding padding-b padding-t max-container'>
        <Feedback/>
      </section>

      <section className=' absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-container'>
        <ContactUs/>
      </section>

      <section className=' padding-t padding-x max-container bg-footerDiv'>
        <Footer/>
      </section>
    </main>
    </>
  )
}

export default App
