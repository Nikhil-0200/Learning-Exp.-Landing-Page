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
    
      <section id='hero' className=' padding max-container h-[100vh] bg-primary'>
       <Nav/>
        <section>
        <Hero/>
        </section>
      </section>

      <section className='padding max-container bg-primary'>
        <Services/>
      </section>

      <section className=' padding max-container bg-primary'>
        <WhyUs/>
      </section>

      <section className=' padding max-container bg-primary'>
        <Goal/>
      </section>

      <section className=' padding padding-b padding-t max-container bg-primary'>
        <Feedback/>
      </section>

      <section className=' absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-container bg-primary'>
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
