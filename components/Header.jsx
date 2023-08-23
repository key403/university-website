"use client"

import Link from "next/link";
import { useRef } from "react";

const Header = () => {
  const header_links_top = [
    {name: "Estudiantes", className: "px-2 header-border-right cursor-pointer"},
    {name: "Exalumnos", className: "px-2 header-border-right cursor-pointer"},
    {name: "Docentes", className: "px-2 header-border-right cursor-pointer"},
    {name: "Biblioteca", className: "px-2 header-border-right cursor-pointer"},
  ]
  const header_socials_icons = ["ri-twitter-x-fill","ri-youtube-fill","ri-facebook-circle-fill","ri-instagram-fill",]

  const header_links_bottom = [
  {name: "Financiamiento",className: "bottom-border-animation"},
  {name: "Sedes",className: "bottom-border-animation"},
  {name: "Carreras",className: "bottom-border-animation"},
  {name: "Noticias",className: "bottom-border-animation"},
  {name: "Admisión",className: "py-1 px-2 bg-red-600 rounded-full text-white cursor-pointer transition-all hover:translate-y-[-2px] duration-[400ms]"},
]
  const menu = useRef(null)
  const menuList = useRef(null)
  const overlay = useRef(null)
  const toggleMenu = ()=> {
    menu.current.classList.toggle("menu-toggle")
    menuList.current.classList.toggle("translate-x-full")
    if (overlay.current.classList.contains("opacity-0")) {
      overlay.current.classList.replace("opacity-0", "opacity-50")
    } else {
      overlay.current.classList.replace("opacity-50", "opacity-0")
    }
  }

  return (
    <header className="p-4 lg:p-0">
      <div className="mobile-header lg:hidden">
        <h1 className="text-2xl italic text-red-600 font-semibold text-center">
          <Link href={"/"}>HorizonTech</Link>
        </h1>
        <i ref={menu} onClick={toggleMenu} className="ri-menu-5-line absolute top-3 right-0 px-2 py-1 text-xl cursor-pointer z-10"></i>
        <ul ref={menuList} className="bg-slate-100 fixed  right-0 w-4/5 translate-x-full transition-all duration-[600ms] z-10">
          {header_links_top.concat(header_links_bottom).map(item=> (
            <li key={item.name} className="p-2 font-semibold border border-slate-300 cursor-pointer">{item.name}</li>
          ))}
        </ul>

        <div ref={overlay} className="absolute top-0 left-0 right-0 bottom-0 bg-black transition-all opacity-0 pointer-events-none"></div>
      </div>          

      <nav className="desktop-header hidden lg:block lg:mb-3">
        {/* top */}
        <div className="bg-slate-100 py-2 text-sm">
          <div className="flex justify-end container mx-auto">
            <ul className="flex">
              {header_links_top.map(
                item => (
                  <li key={item.name} className={item.className}>
                    {item.name}
                  </li>
                )
              )}
            </ul>
            <ul className="flex gap-2 px-2 header-border-right">
              {header_socials_icons.map(item => (
                <span key={item} className="bg-slate-500 rounded-full px-1 cursor-pointer">
                  <i className={`${item} text-white`}></i>
                </span>
              ))}
            </ul>
            <ul className="px-2">
              <span className="bg-black rounded-full py-1 px-[6px] cursor-pointer">
                <i className="ri-user-fill text-white"></i>
              </span>
            </ul>
          </div>
        </div>
        {/* bottom */}
        <div className="container mx-auto mt-3 flex gap-2 justify-between items-center text-lg">
          <Link href={"/"} className="text-3xl text-red-600 italic font-semibold">HorizonTech</Link>
          <ul className="flex gap-3 items-center">
            {header_links_bottom.map(item=> (
              <li key={item.name} className={item.className}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;