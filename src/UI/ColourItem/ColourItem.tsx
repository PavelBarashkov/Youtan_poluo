import React from 'react'
import classesColorItem from './colorItem.module.css'

interface test{
    color: string,
    hanlerClick:() => void
}

export const ColorItem = ({color, hanlerClick}: test) => {
    function hexToRgb(hex: string) {
        hex = hex.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }


    return (
   
        <div onClick={() => hanlerClick()} className={classesColorItem.color_item} style={{background: hexToRgb(color)}}></div>
        
    )
}
