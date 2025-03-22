export default function Academics() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Academics</h1>

      {/* Admissions Section */}
      <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-2">Admissions</h2>
        <p className="text-gray-300">
          Our admission process is designed to identify talented individuals.
          Applications open in April and close in June. Eligibility criteria
          vary based on programs. Entrance exams may be required for some
          courses.
        </p>
      </section>

      {/* Academic Programs Section */}
      <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-2">Academic Programs</h2>
        <p className="text-gray-300">
          We offer undergraduate, postgraduate, and doctoral programs across
          Engineering, Management, Sciences, and Arts.
        </p>
      </section>

      {/* Hostel Details Section */}
      <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-2">Hostel Details</h2>
        <p className="text-gray-300">
          Comfortable and secure hostels with modern amenities, WiFi, and mess
          facilities are available for both boys and girls.
        </p>
      </section>

      {/* Scholarships Section */}
      <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-2">Scholarships</h2>
        <p className="text-gray-300">
          We provide merit-based, need-based, and special-category scholarships
          to support students financially.
        </p>
      </section>

      {/* Examination Structure Section */}
      <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Examination Structure</h2>
        <p className="text-gray-300">
          Our examinations include midterms, end-semesters, and continuous
          assessments. Grades are based on assignments, projects, and written
          exams.
        </p>
      </section>
    </div>
  )
}
