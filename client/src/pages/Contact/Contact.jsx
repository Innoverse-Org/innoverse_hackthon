import React, { useState } from "react"

const ContactPage = () => {
  // State to manage form inputs
  const [formData, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // State to track form submission status
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setState({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Form validation - check for empty fields
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true })
      return
    }

    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", formData)

    // Show success message and reset form
    setFormStatus({ submitted: true, error: false })
    setState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form Section */}
            <div
              className="bg-white p-6 rounded-lg shadow border-t-4 border-yellow-500"
              style={{ borderColor: "#ffb703" }}
            >
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: "#023047" }}
              >
                Send Us a Message
              </h2>

              {formStatus.submitted && (
                <div
                  className="mb-6 p-4 rounded-md"
                  style={{ backgroundColor: "#8ecae6", color: "#023047" }}
                >
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              {formStatus.error && (
                <div
                  className="mb-6 p-4 rounded-md"
                  style={{ backgroundColor: "#fb8500", color: "white" }}
                >
                  <p>Please fill out all required fields.</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#023047" }}
                  >
                    Name <span style={{ color: "#fb8500" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500"
                    style={{
                      borderColor: "#8ecae6",
                      ":focus": {
                        borderColor: "#219ebc",
                        boxShadow: `0 0 0 2px rgba(33, 158, 188, 0.2)`,
                      },
                    }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#023047" }}
                  >
                    Email <span style={{ color: "#fb8500" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500"
                    style={{
                      borderColor: "#8ecae6",
                      ":focus": {
                        borderColor: "#219ebc",
                        boxShadow: `0 0 0 2px rgba(33, 158, 188, 0.2)`,
                      },
                    }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#023047" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500"
                    style={{
                      borderColor: "#8ecae6",
                      ":focus": {
                        borderColor: "#219ebc",
                        boxShadow: `0 0 0 2px rgba(33, 158, 188, 0.2)`,
                      },
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#023047" }}
                  >
                    Message <span style={{ color: "#fb8500" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500"
                    style={{
                      borderColor: "#8ecae6",
                      ":focus": {
                        borderColor: "#219ebc",
                        boxShadow: `0 0 0 2px rgba(33, 158, 188, 0.2)`,
                      },
                    }}
                    required
                  ></textarea>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: "#fb8500",
                      boxShadow: "0 4px 6px rgba(251, 133, 0, 0.25)",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information Section */}
            <div>
              <div
                className="bg-white p-6 rounded-lg shadow mb-8 border-t-4"
                style={{ borderColor: "#FFB703" }}
              >
                <h2
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#023047" }}
                >
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: "#FFB703" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#023047" }}
                      >
                        Address
                      </p>
                      <p className="text-sm" style={{ color: "#FFB703" }}>
                        123 Business Street, Suite 100
                        <br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: "#FFB703" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#023047" }}
                      >
                        Phone
                      </p>
                      <p className="text-sm" style={{ color: "#FFB703" }}>
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: "#FFB703" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#023047" }}
                      >
                        Email
                      </p>
                      <p className="text-sm" style={{ color: "#FFB703" }}>
                        contact@yourcompany.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: "#FFB703" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#023047" }}
                      >
                        Business Hours
                      </p>
                      <p className="text-sm" style={{ color: "#FFB703" }}>
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg mt-6 w-full max-w-4xl border-t-4"
                style={{ borderColor: "#ffb703" }}
              >
                <h2
                  className="text-xl font-semibold mb-4 text-center"
                  style={{ color: "#023047" }}
                >
                  Find Us
                </h2>
                <div
                  className="h-64 w-full overflow-hidden rounded-md border-2"
                  style={{ borderColor: "#8ecae6" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.784965686611!2d73.21918211064592!3d19.160887781986354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed0046ef4df7%3A0x6f74df6501058f25!2sHidden%20leaf%20village!5e0!3m2!1sen!2sin!4v1742650137337!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
