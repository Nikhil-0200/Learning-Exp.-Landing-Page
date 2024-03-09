
import { getMoreBtn } from "../assets/icons"
import Video from "../Components/Video"
import { video2 } from "../assets/video"

const WhyUs = () => {
  return (
    <section id="whyUs" className="flex flex-col justify-center items-center gap-16 py-10">
      <div className="w-1/2 flex flex-col gap-3">
        <h1 className="text-center font-roboto-medium text-[40px] text-black">Why Us</h1>
        <h1 className="text-center font-roboto-regular text-subHead leading-normal">At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</h1>
      </div>


      <div className="w-full flex gap-8 ">
      <div id="HeroVideo" className="w-[50%] relative py-5">
          <Video
          customVideo={video2}
          padding="8"
          />
        </div>

        <div className="flex flex-col gap-6 pt-4 w-[50%]">
          <h1 className="font-poppins-medium font-semibold text-3xl leading-normal">Crafting Your Dream Career: <div>Building a Path You Love with us</div></h1>
          <h1 className="font-roboto-regular text-subHead leading-normal">At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</h1>
          <h1 className="font-roboto-regular text-subHead pb-2 leading-tight">Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.</h1>

          <div>
            <img src={getMoreBtn} alt="getMoreBtn" width={150}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs