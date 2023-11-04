import React from 'react'
import classes from './sort.module.css'
import { BtnFilter } from '../../UI/BtnFilter/BtnFilter'

export const Sort = () => {
  return (
    <div className={classes.sort_container}>
    <div className={classes.sort_title}>
        Сортировать:
    </div>
    <div className={classes.sort_btns}>
        <BtnFilter>По умолчанию</BtnFilter>
        <BtnFilter>По новизне</BtnFilter>
        <BtnFilter>По возрастанию цены</BtnFilter>
        <BtnFilter>По убыванию цены</BtnFilter>
    </div>
</div>
  )
}
