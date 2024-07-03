import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

    <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 I am Vishnu Nair, holding a degree in BSc Computer Science, and I have completed my Master's in Computer Application, currently awaiting my results. I am currently working remotely as a <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/vishnunair1998/' target='_blank'>Python/Django developer intern</a> at a company in Pune called <a className='text-orange-300 hover:text-orange-500 duration-300' href='https://www.linkedin.com/company/konnectogrow/' target='_blank'>Konnectogrow. </a>
          I have also completed a year-long training program in full-stack development, specializing in Python Django for the backend and React for the frontend. This experience has equipped me with valuable skills and led to the successful completion of projects, including an <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://github.com/Vishnu021198/noble-arc" target='_blank'>E-commerce website</a> and a <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://github.com/Vishnu021198/ZoomBike" target='_blank'>Bike Rental platform</a>.
          On a different note, I'm also into photography📸. It's not just a hobby; I see it as a way to capture moments, tell stories.</p>

          <ButtonLink
            url='https://drive.google.com/file/d/1QUlmHSCF751llUY7a8xcoCuNiOpVGy66/view?usp=drive_link'
            text='View Resume →'
            padding={`p-3`}
          />

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;
