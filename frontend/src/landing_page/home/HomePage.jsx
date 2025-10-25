import React from 'react'
import Awards from './Awards.jsx'
import Education from './Education.jsx'
import Stats from './Stats.jsx'
import Pricing from './Pricing.jsx'
import Hero from './Hero.jsx'
import OpenAccount from '../OpenAccount.jsx'
export default function HomePage(){
    return (
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
    )
}