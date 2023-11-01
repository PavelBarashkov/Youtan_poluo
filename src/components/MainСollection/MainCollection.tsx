import React from 'react'
import Container from 'react-bootstrap/Container';
import classesMainCollection from './mainCollection.module.css';
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap';
import { CardItem } from '../CardItem/CardItem';

export const MainCollection = () => {
  return (
    <Container className={classesMainCollection.container}>
        <h1 className={classesMainCollection.title}>Коллекция Youtan Poluo</h1>
        <Row  className="g-4 d-flex ">
        {Array.from({ length: 8 }).map((_, idx) => (
            <CardItem/>
        ))}

        </Row>
    </Container>
  )
}
