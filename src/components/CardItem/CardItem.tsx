import React from 'react'
import { Card, Carousel, Col } from 'react-bootstrap'
import classesCardItem from './cardItem.module.css';
import photo from '../../assets/img/1 (1)_edited.jpg';
import { ColorList } from '../ColorList/ColorList';
import { SizeList } from '../SizeList/SizeList';
import { AllSizes } from '../../helpers/AllSizes';
import { AllColors } from '../../helpers/AllColors';


export const CardItem = ({card}: any) => {
    const colors = AllColors(card);
    const sizes = AllSizes(card);

  return (
    <Col lg={4} sm={6} className={classesCardItem.col} >
        <Card className={classesCardItem.card}>
                <Card.Header className={classesCardItem.header}>
                <Carousel 
                    indicators={false} 
                    interval={null}
                >
                    <Carousel.Item className={classesCardItem.item}>
                    <div className={classesCardItem.carousel_image} >
                        <img className={classesCardItem.img} src={photo} alt="Youtan Poluo" />
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className={classesCardItem.carousel_image} >
                        <img className={classesCardItem.img} src={photo} alt="Youtan Poluo" />
                    </div>
                    </Carousel.Item>

                    </Carousel>
                </Card.Header> 
                <Card.Body className={classesCardItem.body}>
                    <Card.Title className={classesCardItem.title}>{card?.name}</Card.Title>
                    <Card.Text className={classesCardItem.price}>
                        {card?.price} &#8381;
                    </Card.Text >
                    <div className={classesCardItem.card_info}>
                        <ColorList colors={colors}/>
                        <SizeList sizes={sizes}/>
                    </div>
                    
                </Card.Body>
        </Card>
    </Col>
  )
}
