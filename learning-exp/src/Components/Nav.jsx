import { Logo } from "../assets/images"
import Button from "./Button";

const Nav = () => {
  return (
    <section className="padding-b flex justify-between items-center">
        <div className="flex font-roboto-medium">
          <span ><img src={Logo} alt="LogoStrip" width={200} /></span>
        </div>

        <div className="text-[#BCBCBC] font-poppins-medium flex items-center gap-4">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Services Us</li>
            <li>Why Us</li>
            <li>Our Goals</li>
          </ul>

<Button
label="Contact Us"
/>

        </div>
    </section>
  )
}

export default Nav