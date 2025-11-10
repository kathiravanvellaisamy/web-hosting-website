
import SharedImage from '../assets/hosting/shared.jpg'
import VPSImage from '../assets/hosting/vps.jpg'
import DedicatedImage from '../assets/hosting/dedicated.jpg'
import { FaCheckCircle, FaServer } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const SharedHosting = [

  {
    id:1,
    heading:"Shared Hosting",
    content:"Perfect for beginners and small websites. Get started easily with our reliable and affordable shared hosting plans.",
    image: SharedImage,
    icon: <FaServer />,
    features:[
      {
        descr:"Lightning-fast SSD storage"
      },
      {
        descr:"Built-in website builder"
      },
      {
        descr:"Automatic daily backups"
      },
      {
        descr:"Free custom email accounts"
      },
      {
        descr:"24/7 expert technical support"
      }

    ]
  }
]

const VpsHosting = [

  {
    id:1,
    heading:"VPS Hosting",
    content:"PGet the ultimate balance of performance and control with our Virtual Private Server plans.Ideal for developers, businesses, and high-traffic websites that demand reliability.",
    image: VPSImage,
    icon: <FaCloud />,
    features:[
      {
        descr:"Dedicated CPU and RAM resources"
      },
      {
        descr:"Full root access for advanced configuration"
      },
      {
        descr:"SSD-powered storage for blazing speed"
      },
      {
        descr:"Easily scalable as your business grows"
      },
      {
        descr:"24/7 technical support from hosting experts"
      }

    ]
  }
]

const DedicatedServer = [

  {
    id:1,
    heading:"Dedicated Server",
    content:"Experience maximum power, privacy, and performance with your own dedicated hosting environment.Ideal for enterprises and high-traffic websites that demand full control and reliability.",
    image: DedicatedImage,
    icon: <FaDatabase />,
    features:[
      {
        descr:"Complete access to all server resources"
      },
      {
        descr:"Advanced DDoS and firewall protection"
      },
      {
        descr:"Custom configurations for any workload"
      },
      {
        descr:"Lightning-fast SSD & NVMe storage"
      },
      {
        descr:"24/7 server monitoring and support"
      }

    ]
  }
]


const Hosting = () => {
  return (
    <div className="py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className='text-4xl font-bold md:text-5xl text-dark mb-4'>Web Hosting Solutions</h1>
          <p className='text-dark/80 max-w-3xl mx-auto'>Experience a hosting platform designed for speed, stability, and simplicity.Easily deploy your site with one-click installs and advanced security tools.From small blogs to large enterprises, scale confidently with our cloud network.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* Shared Hosting */}
           <div>

            {
              SharedHosting.map((shared)=>(
                  <div key={shared.image} div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full md:w-1/2 ">
                       <div className='text-3xl md:text-4xl text-dark mb-6 flex items-center gap-2'>
                        <span className='text-primary'>{shared.icon}</span>
                         <h1>{shared.heading}</h1>
                       </div>
                       <p className='text-dark/80 mb-3'>{shared.content}</p>
                       
                       <ul className='ml-10 space-y-4'>
                        {
                          shared.features.map((item,idx)=>(
                            <li key={idx} className='text-dark/70 flex items-center gap-3' >
                              <FaCheckCircle className='text-primary' />
                              <span>{item.descr}</span>
                            </li>
                          ))
                        }
                       </ul>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src={shared.image} alt={shared.heading} />
                    </div>
                  </div>


              ))
            }
           </div>


           {/* VPS  Hosting */}
           <div>
              {
              VpsHosting.map((vps)=>(
                  <div key={vps.image} div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full md:w-1/2">
                       <div className='text-3xl md:text-4xl text-dark mb-6 flex items-center gap-2'>
                        <span className='text-primary'>{vps.icon}</span>
                         <h1>{vps.heading}</h1>
                       </div>
                       <p className='text-dark/80 mb-3'>{vps.content}</p>
                       
                       <ul className='ml-10 space-y-4'>
                        {
                          vps.features.map((item,idx)=>(
                            <li key={idx} className='text-dark/70 flex items-center gap-3' >
                              <FaCheckCircle className='text-primary' />
                              <span>{item.descr}</span>
                            </li>
                          ))
                        }
                       </ul>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src={vps.image} alt={vps.heading} />
                    </div>
                  </div>


              ))
            }
           </div>

           {/* Dedicated Server */}
           <div>
              {
              DedicatedServer.map((ded) => (
                  <div key={ded.image} div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full md:w-1/2">
                       <div className='text-3xl md:text-4xl text-dark mb-6 flex items-center gap-2'>
                        <span className='text-primary'>{ded.icon}</span>
                         <h1>{ded.heading}</h1>
                       </div>
                       <p className='text-dark/80 mb-3'>{ded.content}</p>
                       
                       <ul className='ml-10 space-y-4'>
                        {
                          ded.features.map((item,idx)=>(
                            <li key={idx} className='text-dark/70 flex items-center gap-3' >
                              <FaCheckCircle className='text-primary' />
                              <span>{item.descr}</span>
                            </li>
                          ))
                        }
                       </ul>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src={ded.image} alt={ded.heading} />
                    </div>
                  </div>


              ))
            }
           </div>
        </div>

        
      

      </div>
    </div>
  )
}

export default Hosting