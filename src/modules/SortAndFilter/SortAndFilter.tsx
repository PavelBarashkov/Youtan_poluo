import React from 'react'
import { Filter } from '../../components/Filter/Filter'

export const SortAndFilter = () => {
    const types = [{name: 'Рубашка'}, {name: 'Палтье'}]
  return (

    <div>
        <Filter types={types}/>
        {/* Контейнер который будет состоять из двух компонентов 
            SORT (будут передаваться пропсы список типов) 
            и 
            FILTER в список кнопок но без API  
        */}
    </div>
  )
}
