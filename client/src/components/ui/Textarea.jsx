export function Textarea({ placeholder, className, ...props }) {
  return (
    <textarea
      placeholder={placeholder}
      className={`border rounded-lg p-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    ></textarea>
  )
}
