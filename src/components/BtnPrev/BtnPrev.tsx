import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BtnPrev = () => {
    const navigate = useNavigate();
  return (
    <button onClick={() => {
        navigate(-1)
    }}>BtnPrev</button>
  )
}
