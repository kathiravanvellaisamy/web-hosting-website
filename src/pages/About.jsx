import aboutHostNexa from '../assets/about.jpg'


const About = () => {
  return (
    <div className="py-40 bg-white ">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
              <h1 className="text-dark text-4xl md:text-5xl font-bold mb-6">About Host Nexa</h1>
              <p className="text-dark/80">Learn how we make domain registration simple, fast, and affordable for everyone.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                  <h1 className="text-3xl font-bold text-dark mb-6">Our Story</h1>
                  <p className="text-dark/80 mb-3 text-justify">Founded in 2015, HostNexa began with one goal — to help individuals and businesses secure their online identity effortlessly.</p>

                  <p className="text-dark/80 mb-3 text-justify">From a small local provider, we’ve grown into a trusted platform offering top-level domains, seamless DNS management, and transparent pricing across the globe.</p>

                  <p className="text-dark/80 mb-3 text-justify">Today, we continue to simplify domain ownership while ensuring every customer enjoys a smooth and secure experience.</p>
              </div>

              <div className="w-full md:w-1/2">
                <img src={aboutHostNexa} alt="about host nexa" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default About