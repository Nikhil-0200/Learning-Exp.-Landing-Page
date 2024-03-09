import { smartphoneIcon } from "../assets/icons"
import { layoutIcon } from "../assets/icons"
import { dashboard } from "../assets/icons"

const Services = () => {
  return (
    <section id="services" className="flex flex-col items-center gap-5">
      <div className="w-1/2 flex flex-col gap-3">
        <h1 className="font-poppins-medium text-[40px] text-center leading-tight">We provide various kind of learning modules for you</h1>
        <h1 className="font-roboto-regular text-subHead text-center leading-normal">It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem</h1>
      </div>

      <div className="flex gap-16  justify-between items-center py-10">
        <div className="w-[250px] h-[300px] flex flex-col py-10 justify-center px-5 items-center rounded-lg shadow-cardShadow gap-3">
          <div>
            <img src={smartphoneIcon} alt="smartphoneIcon" width={150}/>
          </div>
          <div className="flex flex-col gap-1">
          <h1 className="text-center font-roboto-medium text-black text-2xl">Learn Anything</h1>
          <h1 className="font-roboto-regular text-[#6B6969] leading-tight text-center">It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</h1>
          </div>  
        </div>

        <div className="w-[320px] h-[350px] flex flex-col py-6 px-5 items-center bg-[#FAF8E4] rounded-lg justify-center cardShadow2 gap-3">
          <div>
            <img src={dashboard} alt="smartphoneIcon" width={150}/>
          </div>
          <div className="flex flex-col gap-1">
          <h1 className="text-center font-roboto-medium text-black text-2xl">Learn Anything</h1>
          <h1 className="font-roboto-regular text-[#6B6969] leading-tight text-center">It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</h1>
          </div>  
        </div>

        <div className="w-[250px] h-[300px] flex flex-col py-6 px-10 items-center rounded-lg shadow-cardShadow gap-3">
          <div>
            <img src={layoutIcon} alt="smartphoneIcon" width={150}/>
          </div>
          <div className="flex flex-col gap-1">
          <h1 className="text-center font-roboto-medium text-black text-2xl">Expert Connect</h1>
          <h1 className="font-roboto-regular text-[#6B6969] leading-tight text-center">It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</h1>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services