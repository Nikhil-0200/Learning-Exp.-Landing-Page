import { assTick } from "../assets/icons"
import { supervisecircle } from "../assets/icons"

const Goal = () => {
  return (
    <section id="goal" className="flex flex-col items-center gap-5">
      <div className="w-[79%] leading-tight flex flex-col items-center gap-8">
        <h1 className="font-poppins-medium text-black text-[35px] text-center">We Completed 1200+ Certification Program Successfully & Counting</h1>
        <h1 className="font-poppins-medium text-[#241B1B] w-[70%] text-center">At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</h1>
      </div>

      <div className="grid grid-cols-4 gap-5 w-full pt-10">
        <div className="flex items-center justify-center gap-1">
          <div>
            <img className=" object-fill" src={assTick} alt="assTick" width={50}/>
          </div>
          <div>
            <h1 className="text-blue font-poppins-medium text-2xl">100+</h1>
          <h1 className="text-blue font-poppins-medium text-lg">Batch Complete</h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div>
            <img className=" object-fill" src={assTick} alt="assTick" width={50}/>
          </div>
          <div>
            <h1 className="text-blue font-poppins-medium text-2xl">50+</h1>
          <h1 className="text-blue font-poppins-medium text-lg">Active Batches</h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div>
            <img className=" object-fill" src={supervisecircle} alt="supervisecircle" width={50}/>
          </div>
          <div>
            <h1 className="text-blue font-poppins-medium text-2xl">10,000+</h1>
          <h1 className="text-blue font-poppins-medium text-lg">Student Satisfied</h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div>
            <img className=" object-fill" src={supervisecircle} alt="supervisecircle" width={50}/>
          </div>
          <div>
            <h1 className="text-blue font-poppins-medium text-2xl">10+</h1>
          <h1 className="text-blue font-poppins-medium text-lg">Courses Modules</h1>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  )
}

export default Goal