import React, { useState } from 'react'
import { GrFormAdd } from 'react-icons/gr'
import { GoDash } from 'react-icons/go'
const According = ({ title, contents }) => {
  const [isOpen, setIsOpen] = useState(false)

  const styled = {
    box: `
      flex 
      justify-between
      bg-white 
      px-3 
      h-12
      text-sm
      flex 
      items-center
      border-b-2
      border-gray-300
      transition-all
      duration-300 
      cursor-pointer
      hover:border-black 
      hover:underline
    `,
    but: `
    px-3
    bg-gray-300
    border-b-2 
    border-gray-300
    h-12

    hover:bg-gray-200
    hover:border-black
    `,
    boxContents: `
    mt-1
    text-xs
    mb-3
    text-gray-500
    bg-white
    transition-all
    duration-300 
    px-3
    `
  }
  return (
    <div>
      <div
        className={`flex min-w-full`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${styled.box} w-full`}>
          {title}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            ${styled.but}
          `}
        >
          {isOpen ?
            <GoDash size={20} />
            :
            <GrFormAdd size={20} />
          }

        </button>
      </div>
      <div
        className={`
          ${styled.boxContents}
          ${isOpen ? "flex max-h-[300px] py-3" : "max-h-0 overflow-hidden"}

        `}
      >
        {contents}
      </div>
    </div>
  )
}

export default According