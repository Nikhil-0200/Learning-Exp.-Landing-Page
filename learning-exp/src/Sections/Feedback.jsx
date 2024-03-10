import { arrowRightBlack } from "../assets/icons"
import { personImage } from "../assets/images"


import { star } from "../Constants";

const Feedback = () => {
  return (
    <section className="flex flex-col gap-10 md:pb-10 pb-32">
      <div className="flex max-md:flex-col max-md:gap-10 max-md:text-center justify-between items-center">
        <div className="md:w-[70%] flex flex-col gap-2">
          <h1 className="font-roboto-medium text-[40px]">Our Students Feedback</h1>
          <h1 className="leading-tight font-roboto-regular text-subHead">At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</h1>
        </div>
        <div>
          <button className="rounded-xl bg-[#F3F3F3] flex items-center font-poppins-medium text-subHead px-4 gap-1 py-1">Read More <span><img src={arrowRightBlack} alt="arrowRightBlack" width={40} /></span></button>
        </div>
      </div>

      <div className="bg-[#EFEFFE] flex md:justify-start items-center gap-20 max-md:flex-col max-md:py-10">
        <div id="CustomerImage">
          <img className="max-md:w-[80%] max-md:m-auto" src={personImage} alt="personImage" width={280} height={300}/>
        </div>

        <section className="md:w-[60%] flex max-md:items-center flex-col justify-center gap-4 px-5">
          {star.map((ele, index)=>(
            <div className="flex gap-3" key={index}>
            <img src={ele.iconStar} alt="star1" width={35} height={40}/>
            <img src={ele.iconStar} alt="star1" width={35} height={40}/>
            <img src={ele.iconStar} alt="star1" width={35} height={40}/>
            <img src={ele.iconStar} alt="star1" width={35} height={40}/>
            <img src={ele.iconStar} alt="star1" width={35} height={40}/>
          </div>
          ))}
          
          <div className="font-poppins-regular max-md:text-xl w-full max-md:text-center md:w-[80%]">"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo."</div>
          <div>
            <h1 className="font-roboto-medium pb-2 max-md:text-center">Riad Isalm</h1>
            <h1 className="font-roboto-medium text-[12px] max-md:text-center">Product Manager. <span className="text-heroHead text-[12px]">@Learning.Com</span>
            </h1>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Feedback