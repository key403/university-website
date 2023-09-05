"use client"

import news1 from "../public/news1.jpg"
import news2 from "../public/news2.jpg"
import news3 from "../public/news3.jpg"
import news4 from "../public/news4.jpg"

import banner1 from "@/public/banners/1.jpg"
import banner2 from "@/public/banners/2.jpg"
import banner3 from "@/public/banners/3.jpg"
import banner4 from "@/public/banners/4.jpg"

import cifras from "@/public/cifras.jpg"

import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import News from '@/components/News';
import Activities from '@/components/Activities';

export default function Home() {
  return (
    <main className="pb-20">      
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mb-12 relative"
      >          
        <SwiperSlide className=''>
          <div className='relative'>
            <Image src={banner1} sizes="" className='w-full h-[450px] object-cover' alt="news 1" />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'>
              <div className='h-4/6 flex flex-col justify-between items-baseline pt-8 ps-8'>
                <p className=' text-white text-4xl lg:text-5xl font-semibold w-[15ch]'>
                Admisión 2° Semestre Primavera Alumnos Nuevos
                </p>
                <a href="#" className='button-3'>
                  Matricúlate
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
            <Image src={banner2} sizes="" className=' w-full h-[450px] object-cover' alt="news 1" />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'>
              <div className='h-4/6 flex flex-col justify-between items-baseline pt-8 ps-8'>
                <p className=' text-white text-3xl sm:text-4xl lg:text-5xl font-semibold w-[15ch]'>
                Se parte de nuestra agenda de actividades.
                </p>
                <a href="#" className='button-3'>Ver más</a>
              </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
            <Image src={banner3} sizes="" className=' w-full h-[450px] object-cover' alt="news 1" />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'>
              <div className='h-4/6 flex flex-col justify-between items-baseline pt-8 ps-8'>
                <p className=' text-white text-3xl sm:text-4xl lg:text-5xl font-semibold w-[15ch]'>
                Programa de becas innovador para estudiantes de artes creativas.
                </p>
                <a href="#" className='button-3'>Ver más</a>
              </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <Image src={banner4} sizes="" className=' w-full h-[450px] object-cover' alt="news 1" />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'>
              <div className='h-4/6 flex flex-col justify-between items-baseline pt-8 ps-8'>
                <p className=' text-white text-3xl sm:text-4xl lg:text-5xl font-semibold w-[15ch]'>
                Se parte de nuestra agenda de actividades.
                </p>
                <a href="#" className='button-3'>Ver más</a>
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
          <a href="#" className='absolute bottom-2 right-2 text-white underline md:hidden'>
            Ver más <span><i class="ri-arrow-right-line"></i></span>
          </a>
        </div>
        
        <div className='hidden md:flex flex-col justify-center items-center bg-neutral-800 text-white py-8 px-5'>
          <h4 className='text-3xl font-semibold mb-3'>Vinculación con la Innovación</h4>
          <p>Promovemos el desarrollo de iniciativas de innovación, desarrollo, transferencia y difusión de conocimiento y tecnologías, integradas en la formación de los estudiantes.</p>
          <button className='button-2'>
            <a href="#">Ver más</a>
          </button>
        </div>
      </div>
      
      <div className='container mx-auto mb-28 px-4 lg:px-10'>
          <div className="bg-[#f0f0f0] flex flex-col md:flex-row">
              <div className="md:order-2 flex-grow basis-full">
                <Image src={cifras} sizes=""className="w-full" />
              </div>
              <div className="px-8 pb-10 md: md:pb-0 self-center md:order-1 flex-grow basis-full">
                <h2 className=" mt-8 md:mt-0 md:text-start mb-4 text-2xl md:text-3xl font-bold text-center">HorizonTech en Cifras</h2>
                <p className="text-[#222220]">
                Conoce los principales indicadores institucionales en cada una de nuestras 28 Sedes a lo largo del país.
                </p>
                <button className="mx-auto md:mx-0 block">
                  <a href="#" className="button-1 self-start">Ver más</a>
                </button>
              </div>
          </div>
      </div>

      <div className='container mx-auto mb-28 px-4 lg:px-10'>
        <h3 className='font-semibold text-3xl mb-8'>¿Qué buscas estudiar?</h3>
        <div className='grid grid-rows-2 gap-8 md:grid-rows-none md:grid-cols-2'>
          <div className='bg-[#f0f0f0] px-6 py-6 flex flex-col gap-4 items-center justify-center'>
            <a href="#" className= 'w-full bg-neutral-800 p-2 text-white flex gap-2 justify-center items-center'>
              <span className='font-semibold'>
                Encuentra la carrera perfecta para ti
              </span>
              <i class="ri-external-link-line text-xl"></i></a>
            <a href="#" className='w-full bg-red-600 text-white flex gap-2 justify-center items-center p-2'>
              <span className='font-semibold'>
                Sigue perfeccionándo con nosotros
              </span>
              <i class="ri-external-link-line text-xl"></i></a>
          </div>
 
          <div className='bg-[#f0f0f0] px-6 py-8'>
            <i class="ri-wallet-3-fill text-red-600 text-5xl inline-block mb-2"></i>
            <h4 className='font-bold text-2xl text-[#333333] mb-6'>Financia tu carrera</h4>
            <p className='mb-8'>Te invitamos a revisar las alternativas de financiamiento a las cuales puedes acceder dependiendo de la Institución en la que te matricules en HorizonTech.</p>
            <a href="#" className='underline font-semibold'>Ver más <i class="ri-arrow-right-line"></i></a>
          </div>
        </div>
      </div>


    </main>
  )
}
