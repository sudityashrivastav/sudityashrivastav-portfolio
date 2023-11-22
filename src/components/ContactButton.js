import whatsAppLogo from "../images/whatsapp.png"
import contactLogo from "../images/svg.png"
const ContactButton = () => {
  return (
    <div className='w-[40px] h-screen fixed top-9 right-0 flex justify-center items-center flex-col gap-5'>

      <a href="tel:+91 9817500148">
        <img alt="contact us" className="w-[27px] h-[27px]" src={contactLogo} />
      </a>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=+91%209817500148&text=Hello&type=phone_number&app_absent=0">
        <img className="w-[30px] h-[30px]" alt="whatspplogo" src={whatsAppLogo} />
      </a>
    </div>
  )
}

export default ContactButton