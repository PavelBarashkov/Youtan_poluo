import React, { useEffect, useState } from 'react'
import { Filter } from '../../../../components/Filter/Filter'
import { Sort } from '../../../../components/Sort/Sort'
import classes from './filterAndSort.module.css'

export const FilterAndSort = () => {
    const types = [{name: 'Рубашка'}, {name: 'Палтье'}];
    const [sizeWindow, setSizeWindow] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setSizeWindow(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <aside className={classes.container}>
        <Filter types={types}/>
        <Sort/>
    </aside>
  )
}
