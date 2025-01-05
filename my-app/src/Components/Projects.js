import  Subtitle  from "./Subtitle.js"
import {ProjecFrame} from "./ProjectFrame.js"
import Section from './Section.js'
import ProjectCarousel from './Carousel.js'

export default function Projects(){

    const projects = [
        {id:1, title:"Projet test", description : "blablabla", images : "Images/lol.jpg"}
    ]

    return (
        <>
        <Section bgColor="gray-700">
            <Subtitle title='Projets' textColor="white"/> 
            <div className="lg:min-w-2/3 items-center">
                <ProjectCarousel/>
            </div>
            <div className="py-3 justify-center">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Voir plus</button>
            </div>
        </Section>
        </>
    )

}