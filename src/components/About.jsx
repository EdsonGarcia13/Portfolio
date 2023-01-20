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
              <p>Me gusta el desarrollo de software, en mis inicios me inclinaba por el front end, ya que tiene ese algo que te atrapa por el estilo de trabajo,
                despues comenze a desarrollar apis en c# con .Net Core, "buenisimo la verdad" sin embargo la vida me fue llevando a trabajar con Java para el back end y
                y asi fue como conoci Springboot, y pues me agrada el desarrollar, ya que siempre me saca de la zona de confort por los retos 
                que se aparecen a diario, que van desde la actualización de versiones hasta el aprender nuevos frameworks, para migrar app.
                Soy bastante proactivo, autodidacta y con una gran capacidad de adaptación al de trabajo en equipo, por ejemplo con metodolgias agiles.
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
