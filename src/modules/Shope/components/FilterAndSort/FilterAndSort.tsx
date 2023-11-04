import React from 'react'
import { Filter } from '../../../../components/Filter/Filter'
import { Sort } from '../../../../components/Sort/Sort'
import classes from './filterAndSort.module.css'

export const FilterAndSort = () => {
    const types = [{name: 'Рубашка'}, {name: 'Палтье'}]

  return (
    <aside className={classes.container}>
        <Filter types={types}/>
        <Sort/>
    </aside>
  )
}
