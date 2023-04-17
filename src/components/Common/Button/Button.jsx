import React from 'react'

import './style.css'

const Button = ({text, outlined}) => {
  return (
    <div className={outlined ? 'btn-outlined' : 'btn-div'}>
      {text}
    </div>
  )
}

export default Button