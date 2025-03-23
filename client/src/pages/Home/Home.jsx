import React, { useState, useEffect } from "react"
import karen from "../../assets/karen.webp"
import kurapika from "../../assets/kurapika.webp"
import markus from "../../assets/markus.webp"
import kings from "../../assets/kings-college.webp"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featureCards = [
    {
      id: 1,
      title: "Quality Education",
      description:
        "Our comprehensive curriculum ensures students receive the highest quality education.",
      bgColor: "bg-[#8ecae6]",
      textColor: "text-[#023047]",
      icon: (
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
      ),
    },
    {
      id: 2,
      title: "Experienced Faculty",
      description:
        "Learn from expert educators with years of experience in their respective fields.",
      bgColor: "bg-[#ffb703]",
      textColor: "text-[#023047]",
      icon: (
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Modern Facilities",
      description:
        "State-of-the-art classrooms, laboratories, and recreational facilities for a complete learning environment.",
      bgColor: "bg-[#fb8500]",
      textColor: "text-white",
      icon: (
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ]

  // Carousel slide data - add your own images and content
  const slides = [
    {
      id: 1,
      bgColor: "bg-[#023047]",
      title: "Welcome to Muktanga",
      description:
        "Empowering minds and shaping futures through excellence in education",
      buttonText: "Explore Programs",
      image: karen,
    },
    {
      id: 2,
      bgColor: "bg-[#219ebc]",
      title: "Academic Excellence",
      description:
        "Discover our diverse range of programs designed for student success",
      buttonText: "View Courses",
      image: kurapika,
    },
    {
      id: 3,
      bgColor: "bg-[#ffb703]",
      title: "Campus Life",
      description:
        "Experience a vibrant community with endless opportunities for growth",
      buttonText: "Student Activities",
      image: markus,
    },
    {
      id: 4,
      bgColor: "bg-[#fb8500]",
      title: "Global Perspective",
      description: "Preparing students to thrive in an interconnected world",
      buttonText: "Our Vision",
      image: kings,
    },
  ]

  // Create an iterator for the feature cards
  function* featureCardIterator(cards) {
    for (const card of cards) {
      yield card
    }
  }
  // Initialize the iterator
  const iterator = featureCardIterator(featureCards)

  // Convert iterator to array for rendering
  const cardsToRender = [...iterator]

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
    <div className="w-full min-h-screen bg-gray-50">
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
              }`}
            >
              <div className="absolute w-full h-full bg-black/30"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute w-full h-full object-cover"
              />
              <div className="relative z-10 flex items-center justify-center h-full w-full">
                <div className="text-center text-white p-8 max-w-2xl">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <button className="bg-[#fb8500] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#ffb703] transition duration-300">
                    {slide.buttonText}
                  </button>
                </div>
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
                  currentSlide === index ? "bg-[#fb8500] w-6" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Featured Content Section */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#023047]">
              Why Choose Muktanga
            </h2>
            <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600">
              We provide a nurturing environment where students can discover
              their potential and achieve academic excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cardsToRender.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
                >
                  <div
                    className={`${card.bgColor} ${card.textColor} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#023047]">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-8 bg-[#fdf0d5] text-black mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Begin Your Journey With Us
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of learners and innovators. Take the first step
              toward a brighter future with Muktanga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#fb8500] text-white font-bold py-3 px-8 rounded-full hover:bg-[#ffb703] transition duration-300">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-[#8ecae6] text-[#8ecae6] font-bold py-3 px-8 rounded-full hover:bg-[#8ecae6]/10 transition duration-300">
                Schedule a Visit
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
