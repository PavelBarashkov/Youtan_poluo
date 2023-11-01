import React from 'react'
import { SizeItem } from '../../UI/SizeItem/SizeItem'
import classesSizeList from './sizeList.module.css'

export const SizeList = ({sizes}: any) => {
  return (
    <div className={classesSizeList.container}>
        {sizes.map((size: any) => (
            <SizeItem size={size}/>
        ))}
    </div>
  )
}
