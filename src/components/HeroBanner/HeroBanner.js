/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Ripple } from 'primereact/ripple';

import heroImg from './assets/heroImg.png'

const HeroBanner = () => {
  return (
    <>
      <div className=' bg-no-repeat  md:bg-cover w-full bg-right-top md:bg-center flex align-items-center z-0' style={{background: `url(${heroImg})`, height: '500px'}}>
        <div className="px-4  mx-4 lg:px-4 lg:mx-6 pb-4 lg:pb-4">
            <span className="block text-3xl font-bold text-6xl line-height-2" style={{color: '#1F1F1F'}}>Apoya a tus artesanos locales</span>
            <span className="block text-4xl font-medium text-color text-2xl font-light line-height-2" style={{color: '#1F1F1F'}}>Descubre nuestras marcas</span>
            <a className="flex justify-content-center p-ripple mt-4 w-13rem h-3rem text-center block mb-4 text-xl text-white font-medium  cursor-pointer border-round" style={{background: '#FF8126'}}>
               <span className='flex align-items-center justify-content-center '> Browse bands</span>
                <Ripple />
            </a>
          </div>
      </div>
    </>
  )
}

export default HeroBanner