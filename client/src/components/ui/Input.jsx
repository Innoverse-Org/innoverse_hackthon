export function Input({ type, placeholder, className, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}
