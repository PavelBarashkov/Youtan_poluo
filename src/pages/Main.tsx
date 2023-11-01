import React from 'react'
import { MainSlide } from '../components/MainSlide/MainSlide'
import { MainCollection } from '../components/MainСollection/MainCollection'
import { Container } from 'react-bootstrap'

export const Main = () => {
  return (
    <>
        <MainSlide/>
        <MainCollection/>
    </>
  )
}
