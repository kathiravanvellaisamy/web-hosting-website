import Feature from "../components/home/Feature.jsx"
import HeroSection from "../components/home/HeroSection.jsx"
import Plans from "../components/home/Plans.jsx"
import Service from "../components/home/Service.jsx"
import Support from "../components/home/Support.jsx"


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Feature />
      <Plans />
      <Service />
      <Support />
    </div>
  )
}

export default Home