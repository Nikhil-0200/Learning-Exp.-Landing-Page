import { Logo } from "../assets/images";

import { socialMediaIcon } from "../Constants";

import { FooterData } from "../Constants";

const Footer = () => {
  return (
    <section className="md:py-10 py-10 pt-32">
      <section className="pb-8 flex justify-center px-10 gap-20 lg:gap-36 max-lg:flex-col">
        <section className="flex lg:flex-col max-lg:justify-between lg:gap-8">
          <div>
            <span>
              <img src={Logo} alt="Logo" width={200} />
            </span>
          </div>

          <div className="flex gap-3">
            {socialMediaIcon.map((ele, index) => (
              <span className="flex" key={index}>
                <img src={ele.iconMedia} alt="SocialMediaIcon" width={30} />
              </span>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-3 gap-10 max-md:grid-cols-2">
          {FooterData.map((ele, index) => (
            <div key={index}>
              <h1 className="font-poppins-medium text-sm pb-4">{ele.title}</h1>

              {ele.links.map((ele, index) => (
                <div key={index}>
                  <p className="font-poppins-semibold text-[#8A8A8A] pb-1 text-md">
                    {ele.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </section>
      </section>

      <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-5 justify-between font-poppins-regular text-[12px] text-[#677294]">
        <div>
          <p>Copyright & Design By @Learning Exp.</p>
        </div>
        <div className="flex justify-center ">
          <p className="border-r-[1.2px] border-black px-8">Terms of use</p>
          <p className="px-8">Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
