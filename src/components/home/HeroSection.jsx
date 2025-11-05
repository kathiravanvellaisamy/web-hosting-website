import HeroImage from '../../assets/hero.jpg'
import GridImage from '../../assets/grid.jpg'

const HeroSection = () => {
  return (
    <div className="py-30 relative">
        <div className='absolute inset-0 opacity-15'>
            <img src={GridImage}  className='object-cover object-center h-screen w-full' />
        </div>
        <div className='px-6 md:px-12 container'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
                    {/* left side */}
                    <div className='w-full md:w-1/2 mt-10'>
                        <div className='flex flex-col'>
                            <div className='px-4 py-2.5 w-[350px] bg-primary/30 text-slate-800 rounded-full shadow mb-6'>
                                <span className='text-dark font-semibold'> Boost your website performance today</span>
                            </div>

                            <h1 className='text-4xl md:text-5xl text-dark font-bold mb-8'>Reliable Web Hosting Solution for Your Growing Business</h1>

                            <p className='text-lg text-dark/80 font-medium mb-8'>Experience lightning-fast hosting with 99.9% uptime, enhanced security, and 24/7 expert support — everything you need to keep your website running smoothly.</p>

                            <div className='relative flex items-center gap-4 md:gap-7'>
                                <button className='py-3 px-5 border-2 bg-primary  border-primary text-white shadow cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out'>Get Started</button>
                                <button className='py-3 px-5 border-2 border-primary cursor-pointer shadow transform hover:scale-105 transition duration-300 ease-in-out'>View Plans</button>
                            </div>

                        </div>
        
                    </div>

                    {/* right side */}
                    <div className='w-full md:w-1/2'>
                        <img src={HeroImage} className='w-full' />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default HeroSection;