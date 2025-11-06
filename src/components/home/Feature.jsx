import VPS from '../../assets/feature/sharedhosting.svg'
import Cloud from '../../assets/feature/cloudhosting.svg'
import DH from '../../assets/feature/wordpresshosting.svg'
import { FaArrowRightLong } from 'react-icons/fa6'

const HostingService = [
    {
        id:1,
        title:"VPS Hosting",
        content:"Get full control of your server with powerful resources and root access. VPS Hosting offers flexibility, security, and speed at an affordable cost.",
        image: VPS
    },
    {
        id:2,
        title:"Cloud Hosting",
        content:"Scale your website seamlessly with Cloud Hosting. Enjoy high uptime, fast performance, and automatic resource balancing for growing websites.",
        image: Cloud
    },
    {
        id:3,
        title:"Dedicated Hosting",
        content:"Experience top-tier power and performance. Dedicated Hosting is ideal for high-traffic sites that demand exclusive resources and maximum reliability..",
        image: DH
    },
]

const Feature = () => {
  return (
    <div className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-6">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl text-dark font-bold mb-4 ">We Provide Reliable Hosting Services</h1>
                <p className="text-dark/80 max-w-2xl mx-auto">Select your preferred hosting plan and experience unmatched performance, scalability, and security for your online presence.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                {
                    HostingService.map((hosting)=>(
                        <div key={hosting.id} className='bg-white p-12 rounded-2xl border border-primary/20 transform hover:scale-105 duration-500'>
                            <img className='mb-6' src={hosting.image} alt={hosting.title} />
                            <h1 className='text-xl text-dark font-bold mb-4'>{hosting.title}</h1>
                            <p className='text-dark/80 mb-6'>{hosting.content}</p>
                            <a href="#" className='flex items-center gap-2'>View Details <FaArrowRightLong /></a>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Feature