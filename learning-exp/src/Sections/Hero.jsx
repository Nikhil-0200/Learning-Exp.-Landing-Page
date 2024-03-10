
import { bookDemoBtn } from "../assets/icons"
import { arrowRightWhite } from "../assets/icons"
import Video from "../Components/Video"
const Hero = () => {
  return (
    <section>
     
      <section id="home" className="flex max-lg:flex-col md:items-end gap-5">
        <div id="HeroText" className="flex flex-col gap-5 lg:w-[60%]">
          <h1 className="font-roboto-medium text-3xl lg:text-[40px] text-[#FFFFFF] leading-tight">We Create Learning Experience With Excellent Technology.</h1>

          <h1 className="font-roboto-regular text-md text-[#FEFEFE] pb-5 w-[70%] leading-tight">Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— All Included In Your Subscription</h1>

          <div id="HeroBtnSection" className="flex items-center gap-6">
            <div >
              <img className="max-md:w-28" src={bookDemoBtn} alt="Book Demo Class Button" width={180} />
            </div>
            
            <h1 className="flex font-roboto-medium items-center gap-2 text-[#FFFFFF]" id="explore">Explore More <span><img id="explore" src={arrowRightWhite} alt="Right Arrow White" /></span></h1>
          </div>
        </div>

        <div id="HeroVideo" className="md:w-[50%]  relative">
          <Video
          />
        </div>
      </section>
    </section>
  )
}

export default Hero