import Feature from "../components/home/Feature.jsx"
import HeroSection from "../components/home/HeroSection.jsx"
import Plans from "../components/home/Plans.jsx"
import Service from "../components/home/Service.jsx"


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Feature />
      <Plans />
      <Service />
    </div>
  )
}

export default Home