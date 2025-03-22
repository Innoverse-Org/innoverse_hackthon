import { useState } from "react"

const Enroll = () => {
  // State declarations
  const [activeTab, setActiveTab] = useState("login")
  const [currentStep, setCurrentStep] = useState(1)

  // Function to handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  // Login Form Component
  const LoginForm = () => {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      userType: "student",
    })

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      // Here you would typically perform authentication
      console.log("Login submitted:", formData)
      // After successful login, navigate to appropriate dashboard
      // navigate('/dashboard');
    }

    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="******************"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Login As
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="userType"
                  value="student"
                  checked={formData.userType === "student"}
                  onChange={handleChange}
                />
                <span className="ml-2">Student</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="userType"
                  value="parent"
                  checked={formData.userType === "parent"}
                  onChange={handleChange}
                />
                <span className="ml-2">Parent</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="userType"
                  value="admin"
                  checked={formData.userType === "admin"}
                  onChange={handleChange}
                />
                <span className="ml-2">Admin</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-800"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleTabChange("forgot")
              }}
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    )
  }

  // Registration Form Component with multi-step functionality
  const RegistrationForm = ({ currentStep, setCurrentStep }) => {
    const [registrationData, setRegistrationData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      userType: "student",
      // Additional fields as needed
    })

    const handleChange = (e) => {
      const { name, value } = e.target
      setRegistrationData({
        ...registrationData,
        [name]: value,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1)
      } else {
        // Here you would typically register the user
        console.log("Registration completed:", registrationData)
        // Reset form and go to login tab
        setActiveTab("login")
      }
    }

    const renderStepContent = () => {
      switch (currentStep) {
        case 1:
          return (
            <>
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={registrationData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={registrationData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  value={registrationData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )
        case 2:
          return (
            <>
              <h3 className="text-xl font-semibold mb-4">
                Account Information
              </h3>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  name="username"
                  type="text"
                  value={registrationData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  value={registrationData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={registrationData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )
        case 3:
          return (
            <>
              <h3 className="text-xl font-semibold mb-4">User Type</h3>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Register As
                </label>
                <div className="flex gap-4 flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="userType"
                      value="student"
                      checked={registrationData.userType === "student"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Student</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="userType"
                      value="parent"
                      checked={registrationData.userType === "parent"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Parent</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="userType"
                      value="admin"
                      checked={registrationData.userType === "admin"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Admin</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 text-sm">
                  By completing registration, you agree to our Terms of Service
                  and Privacy Policy.
                </p>
              </div>
            </>
          )
        default:
          return null
      }
    }

    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create a New Account
        </h2>

        {/* Progress indicators */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex flex-col items-center ${
                currentStep >= step ? "text-indigo-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= step
                    ? "border-indigo-600 bg-indigo-100"
                    : "border-gray-300"
                }`}
              >
                {currentStep > step ? "✓" : step}
              </div>
              <div className="text-xs mt-1">
                {step === 1 ? "Personal" : step === 2 ? "Account" : "User Type"}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {renderStepContent()}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto"
            >
              {currentStep < 3 ? "Next" : "Complete Registration"}
            </button>
          </div>
        </form>
      </div>
    )
  }

  // Forgot Password Form Component
  const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      // Password reset logic would go here
      console.log("Password reset requested for:", email)
      setSubmitted(true)
    }

    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Reset Your Password
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Reset Link
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-800"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleTabChange("login")
                }}
              >
                Back to Login
              </a>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <div className="mb-4 text-green-600">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <p className="text-lg mb-4">
              Password reset link has been sent to your email.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Please check your inbox and follow the instructions.
            </p>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleTabChange("login")}
            >
              Return to Login
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex justify-center p-6 bg-indigo-600">
          <h1 className="text-3xl font-bold text-white">Student Portal</h1>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b">
          <button
            className={`py-4 px-6 font-medium text-lg ${
              activeTab === "login"
                ? "border-b-2 border-indigo-500 text-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => handleTabChange("login")}
          >
            Login
          </button>
          <button
            className={`py-4 px-6 font-medium text-lg ${
              activeTab === "register"
                ? "border-b-2 border-indigo-500 text-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => handleTabChange("register")}
          >
            Registration
          </button>
          <button
            className={`py-4 px-6 font-medium text-lg ${
              activeTab === "forgot"
                ? "border-b-2 border-indigo-500 text-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => handleTabChange("forgot")}
          >
            Forgot Password
          </button>
        </div>

        <div className="p-6">
          {activeTab === "login" && <LoginForm />}
          {activeTab === "register" && (
            <RegistrationForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {activeTab === "forgot" && <ForgotPasswordForm />}
        </div>
      </div>
    </div>
  )
}

export default Enroll
