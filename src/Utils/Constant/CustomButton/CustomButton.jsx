import React from 'react'
import './CustomButton.css'

const CustomButton = ({title,onClick}) => {
  return (
    <div className='btn-Wrapper'>
        <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default CustomButton
