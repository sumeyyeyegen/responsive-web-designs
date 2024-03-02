import React from 'react'

const Title = ({children,className}) => {
  return (
    <div  className={`${className} font-dancing`}>{children}</div>
  )
}

export default Title