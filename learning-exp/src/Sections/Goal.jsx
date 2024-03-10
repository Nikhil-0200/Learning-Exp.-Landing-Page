import { assTick } from "../assets/icons"
import { supervisecircle } from "../assets/icons"

import { goalData } from "../Constants"

const Goal = () => {
  return (
    <section id="goal" className="flex flex-col items-center gap-5">
      <div className="w-[110%] lg:w-[79%] leading-tight flex flex-col items-center gap-8">
        <h1 className="font-poppins-medium text-black max-sm:text-3xl text-[35px] text-center">We Completed 1200+ Certification Program Successfully & Counting</h1>
        <h1 className="font-poppins-medium text-[#241B1B] max-md:w-[90%] w-[70%] text-center">At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</h1>
      </div>

      <div className="grid md:grid-cols-4  grid-cols-1 gap-10 md:gap-5 w-full pt-10">
        {goalData.map((ele, index)=>(
          <div className="flex items-center justify-center gap-1" key={index}>
          <div>
            <img className=" object-fill" src={ele.icon} alt="assTick" width={50}/>
          </div>
          <div>
            <h1 className="text-blue font-poppins-medium md:text-2xl">{ele.title}</h1>
          <h1 className="text-blue font-poppins-medium text-lg">{ele.subTitle}</h1>
          </div>
        </div>
        ))}

      </div>
    </section>
  )
}

export default Goal