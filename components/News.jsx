
const News = () => {
  return (
    <div className="container mx-auto mb-28 px-4 lg:px-10">
      <h3 className="font-semibold text-3xl mb-8">Nuestras Noticias</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-slate-300">
          <div className="relative">
            <img className="w-full" src="news1.jpg" alt="news1" />
            <span className="logo-tag">
              HorizonTech
            </span>
          </div>
          <p className="p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer"> HorizonTech celebra la apertura de su Centro de Innovación Tecnológica. </p>
        </div>

        <div className="bg-slate-300">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <img className="w-full" src="news2.jpg" alt="" />
          </div>
          <p className="p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">La universidad se enorgullece de ser anfitriona de una Conferencia Internacional de Sostenibilidad.</p>
        </div>

        <div className="bg-slate-300 hidden md:block">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <img className="w-full" src="news3.jpg" alt="" />
          </div>
          <p className="p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">HorizonTech lanza un programa de becas innovador para estudiantes de artes creativas.</p>
        </div>

        <div className="bg-slate-300 hidden md:block">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <img className="w-full" src="news4.jpg" alt="" />
          </div>
          <p className="p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">El equipo de robótica de HorizonTech triunfa en la Competencia de Robótica Internacional.</p>
        </div>

        <div className="bg-slate-300 hidden md:block">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <img className="w-full" src="news5.jpg" alt="" />
          </div>
          <p className="p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">HorizonTech celebra el destacado logro de su equipo de investigación médica en el campo de la oncología.</p>
        </div>

        <div className="bg-slate-300 hidden md:block">
          <div className="relative">
            <span className="logo-tag">
              HorizonTech
            </span>
            <img className="w-full" src="news6.jpg" alt="" />
          </div>
          <p className="p-8 border-t-8 border-red-600 font-semibold text-lg hover:text-red-600 duration-[400ms] transition-all cursor-pointer">HorizonTech anuncia la creación de una Cátedra de Estudios Interculturales en colaboración con instituciones académicas de diversos países.</p>
        </div>
      </div>
      <button className="button-1 mx-auto">
        Ver más
      </button>
    </div>
  )
}

export default News