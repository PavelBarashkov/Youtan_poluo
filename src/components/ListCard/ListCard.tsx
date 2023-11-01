import React from 'react'
import { Row } from 'react-bootstrap'
import { CardItem } from '../CardItem/CardItem'

export const ListCard = () => {
  return (
        <Row  className="g-4 d-flex ">
            {Array.from({ length: 8 }).map((_, idx) => (
                <CardItem/>
            ))}
        </Row>
  )
}
