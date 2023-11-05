import React, { useEffect, useState } from 'react'
import { Filter } from '../../../../components/Filter/Filter'
import { Sort } from '../../../../components/Sort/Sort'
import classes from './filterAndSort.module.css'
import { Accordion } from 'react-bootstrap'

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

    if(sizeWindow < 992) {
        return (
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Фильтры</Accordion.Header>
                        <Accordion.Body>
                            <aside className={classes.container}>
                                <Filter types={types}/>
                                <Sort/>
                            </aside>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }

  return (
    <aside className={classes.container}>
        <Filter types={types}/>
        <Sort/>
    </aside>
  )
}
