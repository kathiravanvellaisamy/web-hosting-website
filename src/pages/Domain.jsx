import dotCom from '../assets/domain/com.svg'
import dotOnline from '../assets/domain/online.svg'
import dotOrg from '../assets/domain/org.svg'
import dotNet from '../assets/domain/net.svg'
import dotShop from '../assets/domain/shop.svg'
import dotXYZ from '../assets/domain/xyz.svg'
import dotPro from '../assets/domain/pro.svg'
import dotClub from '../assets/domain/club.svg'




const DomainService = [
  {
    id:1,
    image: dotCom,
    content:"Think about why you should buy a domain name in the first place",
    price: "¥ 1099.99"
  },
  {
    id:2,
    image: dotOrg,
    content:"Think about why buying a domain name matters in the first place.",
    price: "¥ 1099.99"
  },
  {
    id:3,
    image: dotNet,
    content:"Think about why it’s important to buy a domain name in the first place.",
    price: "¥ 1099.99"
  },
  {
    id:4,
    image: dotClub,
    content:"Think about why people buy a domain name in the first place.",
    price: "¥ 1099.99"
  },
  {
    id:5,
    image: dotOnline,
    content:"Think about why owning a domain name is essential in the first place.",
    price: "¥ 1099.99"
  },
  {
    id:6,
    image: dotXYZ,
    content:"Think about why purchasing a domain name is the first smart step.",
    price: "¥ 1099.99"
  },
  {
    id:7,
    image: dotPro,
    content:"Think about why securing your domain name is so important at the start.",
    price: "¥ 1099.99"
  },
  {
    id:8,
    image: dotShop,
    content:"Think about why getting a domain name should be your first move online.",
    price: "¥ 1099.99"
  }

]

const Domain = () => {
  return (
    <div className="py-40 bg-white">
      <div className="container mx-auto px-6">
          <div className="text-center">  
                <h1 className="text-4xl md:text-5xl mb-4 text-dark font-bold">Find Your Perfect Domain Name Today!</h1>
                <p className="text-dark/80 mb-6">Start your online journey with the right domain — simple, secure, and fast.</p>
          </div>

          <div className="bg-white rounded-2xl max-w-3xl mx-auto p-8 mb-16">
              <div className="flex flex-col md:flex-row">
                  <input type="text" className="grow px-4 py-3 border border-primary rounded-l-md outline-none " placeholder="Search for a Domain" />
                  <select name="" id="" className="px-4 py-3 border border-primary border-l-0 outline-none">
                        <option>.jp</option>
                        <option>.com</option>
                        <option>.net</option>
                        <option>.shop</option>
                        <option>.org</option>
                        <option>.pro</option>
                        <option>.online</option>
                        <option>.club</option>
                  </select>
                  <button className="bg-primary text-white font-medium rounded-r-md cursor-pointer px-6 py-3">Search</button>
              </div>
          </div>
           <div className="text-center">  
                <h1 className="text-4xl md:text-5xl mb-4 text-dark font-bold">HostNexa Transparent Domain Pricing</h1>
                <p className="text-dark/80 mb-6">Get competitive rates with zero hidden costs.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">        
              {DomainService.map((service)=>(
                <div className="border border-primary/20 shadow p-6 flex flex-col items-start justify-start rounded-2xl space-y-5 transform hover:scale-105 duration-500">
                   <img src={service.image} />
                   <p className='text-dark/80'> {service.content}</p>
                   <h2 className='text-2xl text-dark font-bold'>{service.price}</h2>
                   <button className='hover:text-primary cursor-pointer'>Get Offer</button>
                </div>
              ))}          
          </div>
      </div>
    </div>
  )
}

export default Domain