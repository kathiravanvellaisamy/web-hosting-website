import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";


const SocialIcons = [
    {
        id:1,
        icon: <FaInstagram />
    },
    {
        id:2,
        icon: <FaLinkedin />
    },
    {
        id:3,
        icon: <FaXTwitter />
    },
    {
        id:4,
        icon: <FaDiscord />
    },
    {
        id:5,
        icon: <FaSquareThreads />
    },


]

const Services = [
    {
        id:1,
        name:"Web Hosting"
    },
    {
        id:2,
        name:"VPS Hosting"
    },
    {
        id:3,
        name:"Dedicated Server"
    },
    {
        id:4,
        name:"Domain"
    },
]

const Company = [
    {
        id:1,
        name:"About Us"
    },
    {
        id:2,
        name:"Blog"
    },
    {
        id:3,
        name:"Careers"
    },
    {
        id:4,
        name:"Press"
    },
]

const Support = [
    {
        id:1,
        name:"Help Center"
    },
    {
        id:2,
        name:"Contact"
    },
    {
        id:3,
        name:"Privacy Policy"
    },
    {
        id:4,
        name:"Term of Service"
    },
]

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-gray-700 ">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-start">
                    <div className="flex items-center mb-6">
                        <Link to="/"  className="text-2xl text-slate-100 font-bold">Host <span className="text-red-500"> Nexa</span></Link>

                    </div>
                    <p className="text-[15px] text-slate-400 mb-3">Premium web hosting solutions with blazing fast speed and reliable performance.</p>
                    <div className="flex items-center gap-4 ">
                        
                        {
                            SocialIcons.map((item)=> (
                                 <span key={item.id} className="text-slate-400 hover:text-slate-200 cursor-pointer text-lg">{item.icon}</span>
                            ))
                        }
                    </div>
                </div>


                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-slate-300 mb-3">Services</h3>
                    <ul className="space-y-2">
                        {
                            Services.map((service)=>(
                                <li className="text-[15px] text-slate-400 cursor-pointer">{service.name}</li>
                            ))
                        }
                    </ul>
                </div>

                 <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-slate-300 mb-3">Company</h3>
                    <ul className="space-y-2">
                        {
                            Company.map((item)=>(
                                <li className="text-[15px] text-slate-400 cursor-pointer">{item.name}</li>
                            ))
                        }
                    </ul>
                </div>

                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-slate-300 mb-3">Support</h3>
                    <ul className="space-y-2">
                        {
                            Support.map((item)=>(
                                <li className="text-[15px] text-slate-400 cursor-pointer">{item.name}</li>
                            ))
                        }
                    </ul>
                </div>


            </div>
        </div>
        <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-300">
                     © {new Date().getFullYear()} <span className="font-semibold text-white">Host Nexa</span>. 
                    All rights reserved. Powered by <span className="text-slate-400 hover:text-amber-500 font-medium cursor-pointer">Kathiravan Vellaisamy</span>.
        </div>
    </footer>
  )
}

export default Footer