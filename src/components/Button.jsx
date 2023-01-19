import React from 'react'

const Button = ({className,children}) => {
  return (
      <button className={"w-32 h-10 bg-red-500 text-white rounded-md px-2 py-2 mx-2 my-2 hover:bg-red-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-sm shadow-black"}>{ children}</button>
  )
}

export default Button