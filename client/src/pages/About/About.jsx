import React from "react"

const AboutUs = () => {
  // Leadership team data
  const leadershipTeam = [
    {
      id: 1,
      name: "Dr. Hiroshi Nakamura",
      position: "Vice Chancellor",
      image: "/client/src/assets/professor_nakamura.webp",
      bio: "Dr. Nakamura brings over 30 years of experience in higher education and research. Under his leadership, School of Akatsuki has risen to prominence in national rankings and established key international partnerships.",
    },
    {
      id: 2,
      name: "Prof. Mei Lin",
      position: "Pro Vice-Chancellor (Academic)",
      image: "/images/leadership/pro-vc-academic.jpg",
      bio: "Prof. Lin oversees all academic programs and ensures the highest standards of teaching excellence. Her innovative curriculum reforms have been recognized nationally.",
    },
    {
      id: 3,
      name: "Dr. Rajiv Sharma",
      position: "Pro Vice-Chancellor (Research)",
      image: "/images/leadership/pro-vc-research.jpg",
      bio: "Dr. Sharma has spearheaded our research initiatives, securing substantial grants and establishing six specialized research centers across disciplines.",
    },
  ]

  // Rankings and accreditations data
  const rankings = [
    {
      id: 1,
      title: "NAAC A++ Accreditation",
      description: "Highest grade with a CGPA of 3.85 on a 4-point scale",
      icon: "award",
    },
    {
      id: 2,
      title: "AICTE Approved Programs",
      description:
        "All engineering and technical programs with exemplary status",
      icon: "certificate",
    },
    {
      id: 3,
      title: "Top 10 University",
      description: "Ranked 7th in the National University Rankings 2024",
      icon: "badge",
    },
    {
      id: 4,
      title: "UGC Category I",
      description: "Granted autonomy for excellence in higher education",
      icon: "star",
    },
  ]

  // Awards data
  const awards = [
    {
      id: 1,
      title: "Excellence in Innovation",
      organization: "National Education Commission",
      year: "2024",
    },
    {
      id: 2,
      title: "Best Campus Infrastructure",
      organization: "Higher Education Review",
      year: "2023",
    },
    {
      id: 3,
      title: "Research Excellence Award",
      organization: "Ministry of Science & Technology",
      year: "2023",
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About School of Akatsuki
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering minds, fostering innovation, and shaping the leaders of
            tomorrow since 1980.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.id}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 mb-3">{leader.position}</p>
                  <p className="text-gray-700">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings & Accreditations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            Rankings & Accreditations
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            School of Akatsuki is recognized nationally and internationally for
            its excellence in education, research, and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rankings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item.icon === "award" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    )}
                    {item.icon === "certificate" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    )}
                    {item.icon === "badge" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    )}
                    {item.icon === "star" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Recent Awards
            </h3>
            <div className="max-w-3xl mx-auto">
              <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
                {awards.map((award) => (
                  <li
                    key={award.id}
                    className="p-4 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-semibold text-primary">
                        {award.title}
                      </h4>
                      <p className="text-gray-600">{award.organization}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-blue-50 rounded-lg shadow-md p-8">
              <div className="w-16 h-16 mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                At School of Akatsuki, we are committed to fostering an
                environment of innovation and intellectual discovery where
                students and faculty collaborate to address real-world
                challenges.
              </p>
              <p className="text-gray-700">
                We strive to be at the forefront of educational innovation,
                combining traditional academic rigor with cutting-edge teaching
                methodologies that prepare students for the rapidly evolving
                demands of the global marketplace.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-purple-50 rounded-lg shadow-md p-8">
              <div className="w-16 h-16 mb-6 rounded-full bg-purple-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-4">
                We envision a world where every student at School of Akatsuki is
                empowered to reach their full potential, shine in their chosen
                fields, and make meaningful contributions to society.
              </p>
              <p className="text-gray-700">
                By providing a supportive yet challenging academic environment,
                we aim to cultivate not just technical expertise but also
                leadership, ethical awareness, and global citizenship—skills
                essential for conquering the world's most pressing challenges.
              </p>
            </div>

            {/* Goals */}
            <div className="bg-green-50 rounded-lg shadow-md p-8">
              <div className="w-16 h-16 mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Our Goals
              </h2>
              <p className="text-gray-700 mb-4">
                Our primary goal is to produce the most efficient and uniquely
                prepared graduates who can thrive in diverse professional
                environments. We achieve this through:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Interdisciplinary curriculum that fosters creative
                    problem-solving
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Industry-integrated experiential learning opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Research initiatives that address real-world challenges
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Global perspective through international collaborations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Personalized mentorship and guidance for each student
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Academic Community
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience excellence in education and become part of our journey to
            transform lives through knowledge and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Apply Now
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
