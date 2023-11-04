import React from 'react'
import { Filter } from '../../components/Filter/Filter'
import { Sort } from '../../components/Sort/Sort'

export const SortAndFilter = () => {
    const types = [{name: 'Рубашка'}, {name: 'Палтье'}]
  return (

    <div>
        <Filter types={types}/>
        <Sort/>
        {/* Контейнер который будет состоять из двух компонентов 
            SORT (будут передаваться пропсы список типов) 
            и 
            FILTER в список кнопок но без API  
        */}
    </div>
  )
}
