import React from 'react'
import { Filter } from '../../components/Filter/Filter'
import { Sort } from '../../components/Sort/Sort'
import { Col, Container, Row } from 'react-bootstrap'
import { ListCard } from '../../components/ListCard/ListCard'
import { FilterAndSort } from './components/FilterAndSort/FilterAndSort'
import { CustomContainer } from './components/CustomContainer/CustomContainer'

export const Shope = () => {
    
  return (
        <Container>
            <CustomContainer>
                <Row lg={2}>
                    <Col lg={2}>
                            <FilterAndSort/>
                    </Col> 
                    <Col lg={10}>
                        <ListCard/>
                    </Col>
                </Row>
            </CustomContainer>
        </Container>
     
  )
}
