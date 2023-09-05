import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='container mx-auto pb-12 px-4 lg:px-10'>
        <div className='font-semibold py-4 md:grid md:grid-cols-4'>
          <ul className='left col-span-2 flex flex-col border-b-2 pb-4 mb-4 border-white md:border-none'>
            <li>
              <span className='cursor-pointer'>
                <i class="ri-phone-fill text-red-600 me-2"></i>
                200 00 00 00
              </span>
            </li>
            <li>
              <span className='cursor-pointer'> 
                <i class="ri-smartphone-line text-red-600 me-2"></i>
                00+ 1 01233210
              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                <i class="ri-mail-fill text-red-600 me-2"></i>
                informaciones@horizontech.com
              </span>
            </li>
          </ul>

          <ul className='flex flex-col gap-2'>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                Reglamento y protocolos
              </a>
            </li>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                Código de Ética de HorizonTech
              </a>
            </li>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                Politicas de Privacidad
              </a>
            </li>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                Transparencia
              </a>
            </li>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                Aseguramiento de la Calidad
              </a>
            </li>
          </ul>

          <ul className='flex flex-col gap-2'>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                Portal de Pago
              </a>
            </li>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                Trabaje con nosotros
              </a>
            </li>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                Contactos en Sede
              </a>
            </li>
            <li>
              <a href='#' className='cursor-pointer underline hover:no-underline'>
                HorizonTech Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer



