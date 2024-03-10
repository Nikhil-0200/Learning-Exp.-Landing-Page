import Button from '../Components/Button'

const ContactUs = () => {
  return (
    <section id="contactUs" className="bg-contactDiv rounded-lg px-10 py-8 gap-6 sm:gap-10 md:w-[700px] max-sm:w-[250px] lg:w-[900px] flex justify-between items-center max-md:flex-col">
      <div className='max-md:w-full max-md:text-center  w-[50%]'>
        <h1 className="font-poppins-medium text-2xl text-white pb-4">Contact Us!</h1>
        <p className="font-opensans-regular text-white text-[12px]">There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</p>
      </div>
      <div className="border flex bg-white  md:h-14 rounded-full overflow-hidden px-2 py-1 gap-2">
        <input type="text" placeholder="Email here" className='focus: outline-none px-3'/>
        <Button
        label="Send"
        backgroundColor="bg-[#FFEC05]"
        width="w-28"
        textSize="text-sm"
        />
      </div>
      <div className=' sm:hidden flex items-center justify-center px-8 py-3 font-poppins-medium text-md leading-none border rounded-full bg-[#FFEC05]'>
        Send
      </div>
    </section>
  )
}

export default ContactUs