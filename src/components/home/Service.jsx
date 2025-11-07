import WHM from '../../assets/service/whm.svg'
import Performance from '../../assets/service/performance.svg'
import SuperEasy from '../../assets/service/supereasy.svg'
import Support from '../../assets/service/support.svg'


const Services = [
    {
        id:1,
        title:"Free WHM & cPanel",
        content: "Enjoy full control over your hosting environment with WHM and cPanel — completely free of charge.",
        image:WHM
    },
    {
        id:2,
        title:"Performance",
        content: "Our servers are powered by SSD storage and advanced caching for unbeatable speed and reliability.",
        image:Performance
    },
    {
        id:3,
        title:"Super Easy to Use",
        content: "From setup to scaling, everything is just a few clicks away thanks to our user-friendly control panel.",
        image:SuperEasy
    },
    {
        id:4,
        title:"24/7 Expert Support",
        content: "Get instant help anytime from our professional support team via chat, phone, or email.",
        image:Support
    }
]

const Service = () => {
  return (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="text-3xl text-dark font-bold">Why Host Nexa</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8'>
                {
                    Services.map((service)=>(
                        <div key={service.id} className='border border-primary/20 rounded-2xl shadow-2xl p-10 transform hover:scale-95 duration-500 ease-in-out flex flex-col items-center justify-center'>
                            <div className='w-20 h-20 bg-amber-600/20 rounded-full flex items-center justify-center mb-6'>
                                <img src={service.image} alt={service.title} className='object-cover' />
                            </div>
                            <h3 className='text-xl font-bold text-dark mb-6'>{service.title}</h3>
                            <p className='text-dark/80 text-[16px] leading-6'>{service.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Service