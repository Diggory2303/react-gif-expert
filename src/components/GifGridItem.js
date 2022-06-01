import React from 'react'

// Este componente toma mediante desetructuracion el titulo y el url de los props, y crea las tarjetas con cada imagen y titulo

export const GifGridItem = ({title,url}) => {
  return (
    <div className='card animate__fadeInRight'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
