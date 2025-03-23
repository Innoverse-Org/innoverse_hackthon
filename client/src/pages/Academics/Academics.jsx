import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

/**
 * Academics Component
 *
 * This component displays academic information in an accordion-style interface.
 * Each section can be expanded/collapsed independently to show relevant content.
 * The component uses React's useState hook to manage which section is currently open.
 */
export default function Academics() {
  // State to track which section is currently open (null means all closed)
  const [openSection, setOpenSection] = useState(null)

  /**
   * Toggle function to handle opening and closing sections
   *
   * @param {number} section - The index of the section to toggle
   * Logic: If the clicked section is already open, close it (set to null)
   *        Otherwise, open the clicked section and close any previously open section
   */
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  // Academic information content organized as an array of objects
  // Each object represents a collapsible section with title and content
  const academicSections = [
    {
      title: "Admissions",
      content: (
        <div>
          Our admission process is structured to ensure that talented and
          deserving individuals are given an opportunity to study in our
          institution. Applications generally open in April and close by June.
          The eligibility criteria vary based on the selected program. For
          professional courses, entrance exams might be mandatory, and
          performance in previous academic qualifications also plays a role. We
          provide counseling sessions to guide applicants through the admission
          process, ensuring they select the right course based on their
          interests and career goals. Detailed information on required
          documents, fee structure, and reservation policies is available on our
          website.
        </div>
      ),
    },
    {
      title: "Academic Programs",
      content: (
        <div>
          <p>
            We offer a diverse range of undergraduate, postgraduate, and
            doctoral programs across various disciplines. Some of our key
            programs include:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <span className="font-semibold">Engineering:</span> B.Tech, M.Tech
              in Computer Science, Electrical, Mechanical, Civil, and more.
            </li>
            <li>
              <span className="font-semibold">Computer Applications:</span> BCA,
              MCA with specializations in AI, Data Science, and Cybersecurity.
            </li>
            <li>
              <span className="font-semibold">Medical Sciences:</span> MBBS,
              BDS, Pharmacy, Nursing, and Physiotherapy.
            </li>
            <li>
              <span className="font-semibold">Management:</span> BBA, MBA with
              specializations in Finance, Marketing, and HR.
            </li>
            <li>
              <span className="font-semibold">Commerce & Economics:</span>{" "}
              B.Com, M.Com, and professional courses like CA, CS.
            </li>
            <li>
              <span className="font-semibold">Science & Arts:</span> B.Sc, M.Sc
              in Physics, Chemistry, Mathematics, Biotechnology, and more.
            </li>
            <li>
              <span className="font-semibold">Law & Humanities:</span> LLB,
              BA-LLB, MA in Sociology, Psychology, and Journalism.
            </li>
          </ul>
          <p className="mt-3">
            Our courses are designed to provide both theoretical knowledge and
            practical skills to ensure students are industry-ready upon
            graduation. We also offer industry collaborations, internships, and
            exchange programs to enhance learning opportunities.
          </p>
        </div>
      ),
    },
    {
      title: "Hostel Details",
      content: (
        <div>
          <p>
            Our institution provides comfortable hostel accommodations for both
            boys and girls. The hostels are equipped with modern amenities such
            as:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              High-speed WiFi for uninterrupted learning and entertainment.
            </li>
            <li>24/7 security with CCTV surveillance and biometric access.</li>
            <li>
              Recreational areas, including gym, sports courts, and common
              rooms.
            </li>
            <li>
              Hygienic food facilities with a variety of cuisines and special
              dietary options.
            </li>
            <li>
              Laundry services, medical facilities, and round-the-clock
              emergency support.
            </li>
          </ul>
          <p className="mt-3">
            Students can choose between shared or single rooms based on
            availability and personal preference. Our hostel committee organizes
            cultural and social events to encourage interaction and holistic
            development.
          </p>
        </div>
      ),
    },
    {
      title: "Scholarships",
      content: (
        <div>
          <p>
            To support students financially, we offer a range of scholarships
            based on:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <span className="font-semibold">Merit-based Scholarships:</span>{" "}
              Awarded to students with exceptional academic records.
            </li>
            <li>
              <span className="font-semibold">
                Financial Need-based Scholarships:
              </span>{" "}
              For students from economically weaker backgrounds.
            </li>
            <li>
              <span className="font-semibold">
                Sports & Extracurricular Excellence:
              </span>{" "}
              For students excelling in sports, arts, and cultural activities.
            </li>
            <li>
              <span className="font-semibold">
                Special Category Scholarships:
              </span>{" "}
              For differently-abled students, women in STEM, and military
              families.
            </li>
          </ul>
          <p className="mt-3">
            Students are encouraged to apply for scholarships during the
            admission process. Renewal of scholarships is based on annual
            academic performance, attendance, and participation in institutional
            activities. We also assist students in applying for external
            government and corporate-sponsored scholarships.
          </p>
        </div>
      ),
    },
    {
      title: "Examination Structure",
      content: (
        <div>
          <p>Our academic evaluation consists of:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <span className="font-semibold">Mid-term Assessments:</span>{" "}
              Conducted twice every semester to track progress.
            </li>
            <li>
              <span className="font-semibold">Semester-end Exams:</span>{" "}
              Comprehensive assessments covering theoretical and practical
              knowledge.
            </li>
            <li>
              <span className="font-semibold">Project Evaluations:</span>{" "}
              Research-oriented and industry-specific projects assigned to
              students.
            </li>
            <li>
              <span className="font-semibold">
                Continuous Internal Assessments:
              </span>{" "}
              Includes quizzes, assignments, presentations, and lab reports.
            </li>
          </ul>
          <p className="mt-3">Students are graded based on:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Assignments and research work.</li>
            <li>Attendance and participation in academic activities.</li>
            <li>Lab performance and practical work.</li>
            <li>Group projects and team collaboration.</li>
          </ul>
          <p className="mt-3">
            Our grading system follows international standards to ensure
            credibility and transparency. We also offer re-evaluation options
            and improvement exams for students needing additional support.
            Digital platforms are used for result announcements and tracking
            academic progress.
          </p>
        </div>
      ),
    },
  ]

  return (
    // Main container with dark theme styling
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Page heading */}
      <h1 className="text-4xl font-bold text-center mb-8">Academics</h1>

      {/* Map through each section to create accordion panels */}
      {academicSections.map((section, index) => (
        // Each accordion section container
        <div
          key={index}
          className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
        >
          {/* Clickable header area for toggling sections */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(index)}
            aria-expanded={openSection === index}
            aria-controls={`section-content-${index}`}
            role="button"
            tabIndex={0}
          >
            {/* Section title */}
            <h2 className="text-2xl font-semibold">{section.title}</h2>

            {/*
              Chevron icon with animation
              - Rotates 180 degrees when section is open
              - Returns to original position when section is closed
              - Transition is animated with a 300ms duration
            */}
            <ChevronDownIcon
              className={`h-6 w-6 transform transition-transform duration-300 ${
                openSection === index ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </div>

          {/*
            Conditional rendering of section content
            - Only displays when the section index matches the openSection state
            - Content is formatted with proper HTML structure
          */}
          {openSection === index && (
            <div className="text-gray-300 mt-4" id={`section-content-${index}`}>
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
