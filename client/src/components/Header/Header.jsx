import React from 'react'

const Header = () => {
  return (
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Innoverse</div>
        <div className="flex gap-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
  )
}

export default Header
