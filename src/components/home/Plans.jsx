import { FaCheckCircle } from "react-icons/fa"


const HostingPlans = [
    {
      "id":1,
      "title": "Basic",
      "tagline": "Perfect for startup companies and small projects",
      "price": "¥ 689.36",
      "period": "/month",
      "buttonText": "Get Started",
      "features": [
        "2 CPU Cores",
        "2 GB RAM",
        "40 GB SSD Storage",
        "Free SSL Certificate",
        "1 Dedicated IP"
      ]
    },
    {
      "id":2,
      "title": "Pro",
      "tagline": "Ideal for scaling businesses and developers",
      "price": "¥ 1533.78",
      "period": "/month",
      "buttonText": "Get Started",
      "badge": "Popular",
      "features": [
        "4 CPU Cores",
        "8 GB RAM",
        "100 GB SSD Storage",
        "Free SSL Certificate",
        "Priority Support"
      ]
    },
    {
      "id":3,
      "title": "Elite",
      "tagline": "For high-performance and mission-critical apps",
      "price": "¥ 3069.09",
      "period": "/month",
      "buttonText": "Get Started",
      "features": [
        "8 CPU Cores",
        "16 GB RAM",
        "250 GB SSD Storage",
        "Free SSL & DDoS Protection",
        "24/7 Expert Support"
      
      ]
    }
]

export const hostingPlans = {
  sectionTitle: "Choose VPS Hosting Plan",
  sectionSubtitle:
    "Experience next-level performance and flexibility with our VPS hosting plans designed for developers, agencies, and growing businesses.",
  plans: [
    {
      title: "Basic VPS",
      tagline: "Perfect for startups and small projects",
      price: "$4.99",
      period: "/month",
      buttonText: "Get Started",
      features: [
        "2 CPU Cores",
        "2 GB RAM",
        "40 GB SSD Storage",
        "Free SSL Certificate",
        "1 Dedicated IP"
      ]
    },
    {
      title: "Pro VPS",
      tagline: "Ideal for scaling businesses and developers",
      price: "$9.99",
      period: "/month",
      buttonText: "Get Started",
      badge: "Popular",
      features: [
        "4 CPU Cores",
        "8 GB RAM",
        "100 GB SSD Storage",
        "Free SSL Certificate",
        "Priority Support"
      ]
    },
    {
      title: "Elite VPS",
      tagline: "For high-performance and mission-critical apps",
      price: "$19.99",
      period: "/month",
      buttonText: "Get Started",
      features: [
        "8 CPU Cores",
        "16 GB RAM",
        "250 GB SSD Storage",
        "Free SSL & DDoS Protection",
        "24/7 Expert Support"
      ]
    }
  ]
};

const Plans = () => {
  return (
    <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl text-dark font-bold mb-4">
                Choose Hosting Plan
              </h1>
              <p className="text-dark/80 max-w-2xl mx-auto">
                Experience next-level performance and flexibility with our hosting plans designed for developers, agencies, and growing businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {HostingPlans.map((hosting) => (
                <div
                  key={hosting.id}
                  className="relative bg-white rounded-2xl shadow p-10 border border-primary/20"
                >
                  {/*  Badge condition */}
                  {hosting.badge && (
                    <span className="absolute top-0 right-0 bg-primary text-white text-sm px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                      {hosting.badge}
                    </span>
                  )}

                  <h1 className="text-3xl text-dark font-bold mb-6">{hosting.title}</h1>
                  <p className="text-dark/80 mb-6">{hosting.tagline}</p>

                  <p className="text-dark/80 mb-8">
                    <span className="text-3xl text-dark font-bold">{hosting.price}</span>
                    <span> {hosting.period}</span>
                  </p>

                  <button
                    className={`${
                      hosting.badge
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-dark"
                    } w-full text-center px-6 p-2.5 rounded cursor-pointer`}
                  >
                    Get Started
                  </button>

                  <ul className="mt-8 space-y-4">
                    {hosting.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 items-center text-dark/80 text-[16px]"
                      >
                        <FaCheckCircle className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>

    </div>
  )
}

export default Plans