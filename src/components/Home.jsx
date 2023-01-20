import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import PERFIL from '../assets/perfil.jpg';




const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      
      <div className='max-w-[1000px] mx-auto px-9 flex flex-col justify-center h-full'>
        <img  className="perfil" src={PERFIL} alt="" />
            <p className='text-pink-600'>Ingeniero de Software</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>  
          Edson Garcia
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full Stack Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Actualmente estoy trabajando como programador full stack, utilizando Angular, Php, Java,
          Springboot, SQL server, Postgresql y Azure para trabajar sobre la metodologia Scrum Agile.
          Me apasiona el desarrollo web y la programación.
          Soy una persona que siempre esta dispuesta a aprender nuevas tecnologias.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work down 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
