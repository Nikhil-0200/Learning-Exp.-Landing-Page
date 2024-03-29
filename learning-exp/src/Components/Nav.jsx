import { Logo } from "../assets/images"
import Button from "./Button";
import { navLinks } from "../Constants";
const Nav = () => {

  return (
    <section className="pb-20 flex justify-between items-center">
        <div className="flex font-roboto-medium">
          <span ><img src={Logo} alt="LogoStrip" width={200} /></span>
        </div>

        <div className="text-[#BCBCBC] font-poppins-medium flex items-center gap-4 max-lg:hidden">
          <ul className="flex gap-4">
            {navLinks.map((ele)=>(
              <li key={ele.label} id="navLinks">
                <a href={ele.href}>{ele.label}</a>
              </li>
            ))}
          </ul>
<a href="#contactUs">
<Button
label="Contact Us"
/>
</a>


        </div>
    </section>
  )
}

export default Nav