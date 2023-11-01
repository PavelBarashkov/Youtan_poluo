import React from 'react'
import { ColorItem } from '../../UI/ColourItem/ColourItem'
import classesColorList from './colorList.module.css'

export const ColorList = ({colors}: any) => {
  return (
    <div className={classesColorList.container}>
        {colors.map((color: any) => (
            <ColorItem color={color}/>
        ))}
    </div>
  )
}
