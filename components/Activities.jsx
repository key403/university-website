import Image from "next/image";
import a1 from "@/public/activities/a1.jpg";
import a2 from "@/public/activities/a2.jpg";
import a3 from "@/public/activities/a3.jpg";

const Activities = () => {
  return (
    <div className="container mx-auto mb-28 px-4 lg:px-10">
      <h3 className="text-3xl font-semibold mb-8">Agenda de Actividades</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-white">
        
        <div className=" bg-neutral-800 px-3 pt-4 pb-16">
          <h4 className="font-semibold block min-h-[48px]">
            Conferencia de Innovación Tecnológica
          </h4>
          <div className="mb-6 relative">
            <span className="logo-tag">HorizonTech</span>
            <span className="absolute bottom-0 right-0 bg-black bg-opacity-70 p-1">
              25-9-2023
            </span>
            <Image
              sizes=""
              className=" aspect-[3/2] w-full object-cover"
              src={a1}
              alt=""
            />
          </div>
          <ul className="pt-6 border-t border-white flex flex-col gap-3 text-sm">
            <li className="flex gap-1">
              <i className="ri-calendar-event-fill text-red-600"></i>Fecha: 25
              de Septiembre 2023
            </li>
            <li className="flex gap-1">
              <i class="ri-time-fill text-red-600"></i>Hora: 10:00 AM - 12:00 PM
            </li>
            <li className="flex gap-1">
              <span>
                <i class="ri-article-fill text-red-600"></i>
              </span>
              <p>
                Descripción: Únete a expertos de renombre mundial en el campo de
                la tecnología para explorar las últimas tendencias e
                innovaciones. Aprende sobre inteligencia artificial,
                ciberseguridad y más en esta conferencia inspiradora.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-neutral-800 px-3 py-4 pb-16">
          <h4 className="font-semibold block min-h-[48px]">
            Festival Cultural Internacional "Mundo en Colores"
          </h4>
          <div className="mb-6 relative">
            <span className="logo-tag">HorizonTech</span>
            <span className="absolute bottom-0 right-0 bg-black bg-opacity-70 p-1">
              12/15-10-2023
            </span>
            <Image
              sizes=""
              className=" aspect-[3/2] w-full object-cover"
              src={a2}
              alt=""
            />
          </div>
          <ul className="pt-6 border-t border-white flex flex-col gap-3 text-sm">
            <li className="flex gap-1">
              <i className="ri-calendar-event-fill text-red-600"></i>Fecha: 12
              al 15 de Octubre de 2023
            </li>
            <li className="flex gap-1">
              <i className="ri-time-fill text-red-600"></i>
              Hora: Varía según el evento
            </li>
            <li className="flex gap-1">
              <span>
                <i class="ri-article-fill text-red-600"></i>
              </span>
              <p>
                Descripción: Sumérgete en la diversidad cultural en nuestro
                festival anual. Disfruta de presentaciones de danza, música y
                gastronomía de diferentes países. Un evento imperdible para
                celebrar la riqueza cultural en nuestra comunidad universitaria.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-neutral-800 px-3 py-4 pb-16">
          <h4 className="font-semibold block min-h-[48px]">
            Semana de Voluntariado en la Comunidad
          </h4>
          <div className="mb-6 relative">
            <span className="logo-tag">HorizonTech</span>
            <span className="absolute bottom-0 right-0 bg-black bg-opacity-70 p-2">
              7/13-11-2023
            </span>
            <Image
              sizes=""
              className="aspect-[3/2] w-full object-cover"
              src={a3}
              alt=""
            />
          </div>
          <ul className="pt-6 border-t border-white flex flex-col gap-3 text-sm">
            <li className="flex gap-1">
              <i className="ri-calendar-event-fill text-red-600"></i>Fecha: 7 al
              13 de Noviembre de 2023
            </li>
            <li className="flex gap-1">
              <i class="ri-time-fill text-red-600"></i>Hora: Todo el día
            </li>
            <li className="flex gap-1">
              <span>
                <i class="ri-article-fill text-red-600"></i>
              </span>
              <p>
                Descripción: Únete a nosotros para marcar la diferencia en la
                comunidad. Durante esta semana, los estudiantes, profesores y
                personal participarán en diversas actividades de voluntariado,
                desde limpieza ambiental hasta apoyo en escuelas locales.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <button className="button-1 mx-auto">
        <a href="#">Ver más</a>
      </button>
    </div>
  );
};

export default Activities;
