"use client"

import news1 from "../public/news1.jpg"
import news2 from "../public/news2.jpg"
import news3 from "../public/news3.jpg"
import news4 from "../public/news4.jpg"

import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import News from '@/components/News';
import Activities from '@/components/Activities';

export default function Home() {
  return (
    <main className="pb-20">      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={true}
        className="mb-12 relative"
      >          
        <SwiperSlide className=''>
          <div className='relative'>
            <Image src={news1} sizes="" className='w-full h-[450px] object-cover' alt="news 1" />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'>
              <div className='h-4/6 flex flex-col justify-between items-baseline pt-8 ps-8'>
                <p className=' text-white text-4xl lg:text-5xl font-semibold w-[15ch]'>
                Admisión 2° Semestre Primavera Alumnos Nuevos
                </p>
                <button className='button-3'>Matricúlate</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
            <Image src={news2} sizes="" className=' w-full h-[450px] object-cover' alt="news 1" />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'>
              <div className='h-4/6 flex flex-col justify-between items-baseline pt-8 ps-8'>
                <p className=' text-white text-4xl lg:text-5xl font-semibold w-[15ch]'>
                Se parte de nuestra agenda de actividades.
                </p>
                <button className='button-3'>Ver más</button>
              </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
            <Image src={news3} sizes="" className=' w-full h-[450px] object-cover' alt="news 1" />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'>
              <div className='h-4/6 flex flex-col justify-between items-baseline pt-8 ps-8'>
                <p className=' text-white text-4xl lg:text-5xl font-semibold w-[15ch]'>
                Programa de becas innovador para estudiantes de artes creativas.
                </p>
                <button className='button-3'>Ver más</button>
              </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <Image src={news4} sizes="" className=' w-full h-[450px] object-cover' alt="news 1" />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'>
              <div className='h-4/6 flex flex-col justify-between items-baseline pt-8 ps-8'>
                <p className=' text-white text-4xl lg:text-5xl font-semibold w-[15ch]'>
                Se parte de nuestra agenda de actividades.
                </p>
                <button className='button-3'>Ver más</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <p className='bg-black bg-opacity-50 absolute w-full bottom-0 left-0 py-4 text-xs lg:text-xl text-white text-center z-10'>En HorizonTech generamos una oferta académica siempre conectada a los sectores productivos y de servicios</p>
      </Swiper>

      <News />

      <Activities />

      <div className='container mx-auto mb-28 px-4 lg:px-10 relative md:grid md:grid-cols-2'>
        <div className='relative'>
          <Image src={news1} sizes="" className='h-full w-full object-cover' alt="" />
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center md:hidden '>
            <h4 className='text-white text-2xl font-semibold block relative before:content-[""] before:block before:absolute before:w-1/5 before:h-1 before:bg-white before:-bottom-3 before:left-1/2 before:-translate-x-1/2'>Vinculación con la Innovación</h4>
          </div>
          <button className='absolute bottom-2 right-2 text-white underline md:hidden'>
            Ver más <span><i class="ri-arrow-right-line"></i></span>
          </button>
        </div>
        
        <div className='hidden md:flex flex-col justify-center items-center bg-neutral-800 text-white py-8 px-5'>
          <h4 className='text-3xl font-semibold mb-3'>Vinculación con la Innovación</h4>
          <p>Promovemos el desarrollo de iniciativas de innovación, desarrollo, transferencia y difusión de conocimiento y tecnologías, integradas en la formación de los estudiantes.</p>
          <button className='button-2'>
            Ver más
          </button>
        </div>
      </div>

      <div className='container mx-auto mb-28 px-4 lg:px-10'>
        <h3 className='font-semibold text-3xl mb-8'>¿Qué buscas estudiar?</h3>
        <div className='grid grid-rows-2 gap-8 md:grid-rows-none md:grid-cols-2'>
          <div className='bg-slate-200 px-6 py-6 flex flex-col gap-4 items-center justify-center'>
            <button className= 'w-full bg-neutral-800 p-2 text-white flex gap-2 justify-center items-center'>
              <span className='text-xl font-semibold'>
                Encuentra la carrera perfecta para ti
              </span>
              <i class="ri-external-link-line text-xl"></i></button>
            <button className='w-full bg-red-600 text-white flex gap-2 justify-center items-center p-2'>
              <span className='text-xl font-semibold'>
                Sigue perfeccionándo con nosotros
              </span>
              <i class="ri-external-link-line text-xl"></i></button>
          </div>
 
          <div className='bg-slate-200 px-6 py-8'>
            <i class="ri-wallet-3-fill text-red-600 text-5xl inline-block mb-2"></i>
            <h4 className='font-semibold text-xl mb-6'>Financia tu carrera</h4>
            <p className='mb-8'>Te invitamos a revisar las alternativas de financiamiento a las cuales puedes acceder dependiendo de la Institución en la que te matricules en HorizonTech.</p>
            <button className='underline'>Ver más <i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>

    </main>
  )
}
