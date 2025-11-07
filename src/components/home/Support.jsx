import { FaCheckCircle } from 'react-icons/fa';
import SupportTeam from '../../assets/support.jpg'


const SupportPoints = [
    {
       content: "Our team is here 24/7, including weekends and holidays."
    },
    {
      content:"With a global CDN, we ensure fast, reliable performance worldwide."
    },
    {
       content: "Reach us via chat, email, phone, or ticket — anytime."
    },       
    {
        content:  "Enjoy quick responses and zero downtime frustration."
        
    }

]

const Support = () => {
  return (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex items-center flex-col md:flex-row ">
                <div className="w-full md:w-1/2 p-8 rounded-2xl overflow-hidden">
                    <img src={SupportTeam} alt="Support" />
                </div>
                <div className="w-full md:w-1/2 ">
                    <h1 className='text-4xl md:text-5xl text-dark mb-8 leading-14 font-bold'>Your Success, Our 24/7 Commitment</h1>

                    <ul className='space-y-4'>
                        {
                            SupportPoints.map((spt,index)=>(
                                <li key={index} className='text-dark/80 flex gap-3  items-center'>
                                    <FaCheckCircle  className='hidden md:block text-primary text-lg'  />
                                    
                                    <span>{spt.content}
                                        <span className='block md:hidden h-0.5 w-1/4 bg-slate-200' />
                                    </span>
                                    
                                </li>
                                    
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support