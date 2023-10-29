import React from 'react'

function Description({children}) {
  return (
    <div className="text-center flex items-center justify-center mt-40 font-semibold">
          {children}
        </div>
  )
}

export default Description