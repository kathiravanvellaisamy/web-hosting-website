import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="py-40 bg-white">
      <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 max-w-4xl mx-auto">We’re here to help you every step of the way!</h1>
            <p className="text-dark/80 max-w-2xl mx-auto">Whether you have a question about domains, hosting, or custom services — our team is always ready to assist. Fill out the form and we’ll get back to you shortly.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-10 px-6 md:px-16">
            <div className="w-full md:w-1/2">
                <form className="flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row gap-3">
                  <div>
                      <input type="text" placeholder="First Name" className="p-2 border border-primary/40 rounded-md outline-none w-full" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" className="p-2 border border-primary/40 rounded-md outline-none w-full" />
                  </div>
                </div>
                <div>
                    <input type="email" placeholder="Email" className="p-2 border border-primary/40 rounded-md outline-none w-full" />
                </div>
                <div>
                    <input type="text" placeholder="Subject" className="p-2 border border-primary/40 rounded-md outline-none w-full" />
                </div>
                <textarea placeholder="Message" className="p-2 border border-primary/40 rounded-md outline-none w-full">

                </textarea>
                <button className="bg-primary text-white py-3 px-5 capitalize rounded-md cursor-pointer mt-3">send message</button>
                </form>
            </div>
            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-14 h-14 bg-slate-300 rounded-full  flex items-center justify-center">
                    <FaMapMarkerAlt size={26} className="text-primary" />
                   </div>
                   <div>
                      <p className="text-dark/80 text-[15px]">
                        16th Floor,Minato Mirai Tech Park<br />
                        Sakyo-ku,Kyoto 606-8501 JAPAN<br /> 
                       
                      </p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-14 h-14 bg-slate-300 rounded-full  flex items-center justify-center">
                    <FaPhone size={24} className="text-primary" />
                   </div>
                   <div>
                      <p className="text-dark/80 text-[15px]">
                        +81-52-876-3242                      
                      </p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-14 h-14 bg-slate-300 rounded-full  flex items-center justify-center">
                    <IoMdMail size={24} className="text-primary" />
                   </div>
                   <div>
                      <p className="text-dark/80 text-[15px]">
                       <a href="mailto:info@hostnexa.jp">info@hostnexa.jp</a>                  
                      </p>
                   </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact