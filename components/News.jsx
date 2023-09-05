import Image from "next/image"
import news1 from "../public/news1.jpg"
import news2 from "../public/news2.jpg"
import news3 from "../public/news3.jpg"
import news4 from "../public/news4.jpg"
import news5 from "../public/news5.jpg"
import news6 from "../public/news6.jpg"


const News = () => {
  return (
    <div className="container mx-auto mb-28 px-4 lg:px-10">
      <h3 className="font-semibold text-3xl mb-8">Nuestras Noticias</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-[#666] font-bold">
        <div className="bg-[#e6e5e6]">
          <div className="relative">
            <Image sizes="" className="w-full" src={news1} alt="news1" />
            <span className="logo-tag">
              HorizonTech
            </span>
          </div>
          <a href="#" className="inline-block p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer"> HorizonTech celebra la apertura de su Centro de Innovación Tecnológica. </a>
        </div>

        <div className=" bg-[#e6e5e6]">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <Image sizes="" className="w-full" src={news2} alt="" />
          </div>
          <a href="#" className="inline-block p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">La universidad se enorgullece de ser anfitriona de una Conferencia Internacional de Sostenibilidad.</a>
        </div>

        <div className="bg-[#e6e5e6] hidden md:block">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <Image sizes="" className="w-full" src={news3} alt="" />
          </div>
          <a href="#" className="inline-block p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">HorizonTech lanza un programa de becas innovador para estudiantes de artes creativas.</a>
        </div>

        <div className="bg-[#e6e5e6] hidden md:block">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <Image sizes="" className="w-full" src={news4} alt="" />
          </div>
          <a href="#" className="inline-block p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">El equipo de robótica de HorizonTech triunfa en la Competencia de Robótica Internacional.</a>
        </div>

        <div className="bg-[#e6e5e6] hidden md:block">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <Image sizes="" className="w-full" src={news5} alt="" />
          </div>
          <a href="#" className="inline-block p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">HorizonTech celebra el destacado logro de su equipo de investigación médica en el campo de la oncología.</a>
        </div>

        <div className="bg-[#e6e5e6] hidden md:block">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <Image sizes="" className="w-full" src={news6} alt="" />
          </div>
          <a href="#" className="inline-block p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">HorizonTech anuncia la creación de una Cátedra de Estudios Interculturales en colaboración con instituciones académicas de diversos países.</a>
        </div>
      </div>
      <button className="button-1 mx-auto">
        <a href="#">
          Ver más
        </a>
      </button>
    </div>
  )
}

export default News