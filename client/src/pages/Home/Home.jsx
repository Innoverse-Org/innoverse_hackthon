import React, { useState, useEffect } from "react"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel slide data - add your own images and content
  const slides = [
    {
      id: 1,
      bgColor: "bg-purple-500",
      title: "Welcome to Our Platform",
      description:
        "Discover amazing features and services tailored just for you",
      buttonText: "Get Started",
    },
    {
      id: 2,
      bgColor: "bg-blue-500",
      title: "Innovative Solutions",
      description:
        "Transforming ideas into reality with cutting-edge technology",
      buttonText: "Learn More",
    },
    {
      id: 3,
      bgColor: "bg-green-500",
      title: "Join Our Community",
      description: "Connect with like-minded individuals and grow together",
      buttonText: "Sign Up",
    },
    {
      id: 4,
      bgColor: "bg-pink-500",
      title: "Premium Experience",
      description: "Enjoy top-notch services designed for your convenience",
      buttonText: "Explore",
    },
    {
      id: 5,
      bgColor: "bg-yellow-500",
      title: "Stay Ahead of the Curve",
      description: "Access the latest trends and developments in the industry",
      buttonText: "Discover",
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Carousel */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              } ${slide.bgColor} flex items-center justify-center`}
            >
              <div className="text-center text-white p-8 max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.description}</p>
                <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}

          {/* Carousel Navigation Dots */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Featured Content Section */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-indigo-100 text-indigo-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p className="text-gray-600">
                  Our intuitive interface makes it simple to get started right
                  away.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-rose-100 text-rose-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Optimized for performance to save you time and enhance
                  productivity.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-amber-100 text-amber-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600">
                  Your data is protected with enterprise-grade security
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their
              experience with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                Sign Up Now
              </button>
              <button className="bg-transparent border-2 border-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
