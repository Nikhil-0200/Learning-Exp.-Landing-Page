import { Logo } from "../assets/images";
import {
  fbIcon,
  linkedinIcon,
  pinterestIcon,
  twitterIcone,
} from "../assets/icons";
import { FooterData } from "../Constants";

const Footer = () => {
  return (
    <section className="py-10">
      <section className="pb-8 flex justify-between px-10">
      <section>
        <div className="flex flex-col gap-8">
          <span>
            <img src={Logo} alt="Logo" width={200} />
          </span>

          <div className="flex gap-3">
            <span>
              <img src={fbIcon} alt="SocialMediaIcon" width={30} />
            </span>

            <span>
              <img src={twitterIcone} alt="SocialMediaIcon" width={30} />
            </span>

            <span>
              <img src={linkedinIcon} alt="SocialMediaIcon" width={30} />
            </span>

            <span>
              <img src={pinterestIcon} alt="SocialMediaIcon" width={30} />
            </span>
          </div>
        </div>

        <div></div>
      </section>

      <section className="grid grid-cols-3 gap-5">
        {FooterData.map((ele, index) => (
        <div key={index}>
          <h1 className="font-poppins-medium text-sm pb-4">{ele.title}</h1>

          {ele.links.map((ele, index) => (
            <div key={index}>
              <p className="font-poppins-semibold text-[#8A8A8A] pb-1 text-md">{ele.name}</p>
            </div>
          ))}
        </div>
      ))}
      </section>

      
      
    </section>

    <div className="flex justify-between font-poppins-regular text-[12px] text-[#677294]">
        <div><p>Copyright & Design By @Learning Exp.</p></div>
        <div className="flex justify-center "><p className="border-r-[1.2px] border-black px-8">Terms of use</p>
        <p className="px-8">Privacy Policy</p></div>
      </div>

    </section>
    
  );
};

export default Footer;
