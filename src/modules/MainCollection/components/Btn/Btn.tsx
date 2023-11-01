import React from 'react'
import classes from './btn.module.css'
import { Container } from 'react-bootstrap'

export const Btn = ({...props}) => {
  return (
    <Container>
        <div {...props} className={classes.btn}> Вся коллекция </div>
    </Container>

  )
}
