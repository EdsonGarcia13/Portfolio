import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola que tal, te platico un poco sobre mi</p>
            </div>
            <div>
              <p>Soy un apasionado de la tecnologia, ya que siempre me saca de la zona de confort por los retos 
                que se aparecen a diario, que van desde la actualización a nuevos lenguajes de desarrollo, frameworks, etc."ya sabes a lo que me refiero", hasta 
                el solucionar el bug que se presenta en una aplicación web.
                Soy por lo que vez, bastante proactivo, con una gran capacidad de adaptación y de trabajo en equipo.
                En la vida no laboral, soy padre de familia y en mi tiempo libre me gusta estudiar, ver alguna pelicula con mi esposa,
                ir a la congregación de mi religión y disfrutar de la buena comida.

                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
