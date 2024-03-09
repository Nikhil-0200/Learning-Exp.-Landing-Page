import { arrowRightBlack } from "../assets/icons"
import { personImage } from "../assets/images"
import { star1 } from "../assets/icons"

const Feedback = () => {
  return (
    <section className="flex flex-col gap-10 pb-10">
      <div className="flex justify-between items-center">
        <div className="w-[70%] flex flex-col gap-2">
          <h1 className="font-roboto-medium text-[40px]">Our Students Feedback</h1>
          <h1 className="leading-tight font-roboto-regular text-subHead">At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</h1>
        </div>
        <div>
          <button className="rounded-xl bg-[#F3F3F3] flex items-center font-poppins-medium text-subHead px-4 gap-1 py-1">Read More <span><img src={arrowRightBlack} alt="arrowRightBlack" width={40} /></span></button>
        </div>
      </div>

      <div className="bg-[#EFEFFE] flex justify-start gap-20">
        <div id="CustomerImage">
          <img src={personImage} alt="personImage" width={280} height={300}/>
        </div>

        <section className="w-[60%] flex flex-col justify-center gap-4 px-5">
          <div className="flex gap-3">
            <img src={star1} alt="star1" width={35} height={40}/>
            <img src={star1} alt="star1" width={35} height={40}/>
            <img src={star1} alt="star1" width={35} height={40}/>
            <img src={star1} alt="star1" width={35} height={40}/>
            <img src={star1} alt="star1" width={35} height={40}/>
          </div>
          <div className="font-poppins-regular w-[80%]">"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo."</div>
          <div>
            <h1 className="font-roboto-medium pb-2">Riad Isalm</h1>
            <h1 className="font-roboto-medium text-[12px]">Product Manager. <span className="text-heroHead text-[12px]">@Learning.Com</span>
            </h1>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Feedback