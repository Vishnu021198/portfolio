
import React from "react";
import zoom from '../assets/zoom.jpg'
import user from '../assets/user_management.jpg'
import noble from '../assets/noble.jpg'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Noble Arc Ecommerce Website' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={noble} alt="" />
            </a>}
            {title=='ZoomBike Bike Rental Platform' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={zoom} alt="" />
            </a>}
            {title=='User Management Application' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={user} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Noble Arc Ecommerce Website',
        description:'Developed a dynamic e-commerce platform with Django and PostgreSQL, integrating user accounts, product management, and order tracking; resulting in a notable 25% efficiency improvement and secure payment processing via Razorpay.',
        image: {noble},
        git:'https://github.com/Vishnu021198/noble-arc.git',
        technologies:['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'Bootstrap']
    },
    {
        title:'ZoomBike Bike Rental Platform',
        description:'ZoomBike, an upcoming bike rental platform, utilizes Python, Django, and React.js to create a dynamic user experience. With three core modules User, Owner, and Admin, it promises a seamless interface for all stakeholders.',
        image: {zoom},
        git:"https://github.com/Vishnu021198/ZoomBike.git",
        technologies:[ 'React JS','Django RESTful API', 'Python', 'PostgreSQL' ]
    },
    {
        title:'User Management Application',
        description:'Constructed a secure user management system with React and Python Django. Designed and implemented secure authentication, profile management with image uploads, and an admin dashboard for user administration.',
        image: {user},
        git:"https://github.com/Vishnu021198/Usermanagement_django_react.git",
        technologies:[ 'React JS', 'Django RESTful API', 'Python', 'HTML', 'CSS', 'PostgreSQL']
    }
]

export default Projects