import React from 'react'
import classes from './btnFilter.module.css'

interface IBtnFilterProps {
    children: React.ReactNode
}

export const BtnFilter = ({children}: IBtnFilterProps) => {
  return (
    <button className={classes.btn}>{children}</button>
  )
}
