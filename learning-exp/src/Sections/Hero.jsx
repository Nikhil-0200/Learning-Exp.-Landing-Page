import Nav from "../Components/Nav"
import { bookDemoBtn } from "../assets/icons"
import { arrowRightWhite } from "../assets/icons"
import { heroVideImagesmall } from "../assets/images"
const Hero = () => {
  return (
    <section className="max-h-screen">
      <div>
        <Nav/>
      </div>

      <section id="home" className="flex ">
        <div id="HeroText" className="flex flex-col gap-5 w-[60%]">
          <h1 className="font-roboto-medium text-[40px] text-[#FFFFFF] leading-tight">We Create Learning Experience With Excellent Technology.</h1>

          <h1 className="font-roboto-regular text-md text-[#FEFEFE] pb-5 w-[70%] leading-tight">Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— All Included In Your Subscription</h1>

          <div id="HeroBtnSection" className="flex items-center gap-6">
            <div>
              <img src={bookDemoBtn} alt="Book Demo Class Button" width={180} />
            </div>

            <h1 className="flex font-roboto-medium items-center gap-2 text-[#FFFFFF]">Explore More <span><img src={arrowRightWhite} alt="Right Arrow White" /></span></h1>
          </div>
        </div>

        <div id="HeroVideo" className="w-[50%]">
          <img src={heroVideImagesmall} alt="heroVideImagesmall" width={800} />
        </div>
      </section>
    </section>
  )
}

export default Hero