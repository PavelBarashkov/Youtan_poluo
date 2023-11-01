import React from 'react'
import { CustomContainer } from './components/CustomContainer/CustomContainer'
import { Title } from './components/Title/Title'
import { ListCard } from '../../components/ListCard/ListCard'
import { Btn } from './components/Btn/Btn'

export const MainCollection = () => {

  return (
    <>
        <CustomContainer>
            <Title>Коллекция Youtan Poluo</Title>
            <ListCard/> {/*Сюда передадим пропс список карточек */}
        </CustomContainer>
        <Btn/> {/*Сюда передадим пропс функцию обработчик при нажатии на кнопку*/}
    </>
  )
}
