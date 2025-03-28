export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
