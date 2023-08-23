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
                20+ 5 43294309 
              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                <i class="ri-mail-fill text-red-600 me-2"></i>
                informaciones@horizontech.com
              </span>
            </li>
          </ul>

          <ul className='flex flex-col gap-2 underline'>
            <li>
              <span className='cursor-pointer'>
                Reglamento y protocolos
              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                Código de Ética de HorizonTech
              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                Politicas de Privacidad
              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                Transparencia
              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                Aseguramiento de la Calidad
              </span>
            </li>
          </ul>

          <ul className='flex flex-col gap-2 underline'>
            <li>
              <span className='cursor-pointer'>
                Portal de Pago
              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                Trabaje con nosotros

              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                Contactos en Sede
              </span>
            </li>
            <li>
              <span className='cursor-pointer'>
                HorizonTech Mail
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer



