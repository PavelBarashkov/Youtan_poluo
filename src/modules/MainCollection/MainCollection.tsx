import React, { useEffect } from 'react'
import { CustomContainer } from './components/CustomContainer/CustomContainer'
import { Title } from './components/Title/Title'
import { ListCard } from '../../components/ListCard/ListCard'
import { Btn } from './components/Btn/Btn'
import { useAppDispatch } from '../../app/hooks'
import { fetchCard } from './store/slice/cardsSlice'
import { useSelector } from 'react-redux'

export const MainCollection = () => {
    const dispatch = useAppDispatch();
    const { cards, loading, error } = useSelector((state: any) =>  state.cards)

    useEffect(() => {
        dispatch(fetchCard());
    }, [])

    return (
        <>
            <CustomContainer>
                <Title>Коллекция Youtan Poluo</Title>
                {loading ? (
                        <div>Загрузка</div> 
                    ) : (
                        <>
                            {error ? (
                                <div>{error}</div>
                            ) : (
                                <ListCard cards={cards}/> 
                            )}
                        </>
                    )  
                }
            </CustomContainer>
            <Btn/> {/*Сюда передадим пропс функцию обработчик при нажатии на кнопку*/}
        </>
    )
}
