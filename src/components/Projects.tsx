import React from 'react'
import Headings from './Headings'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Amazon Clone",
        desc: "A HTML and CSS base project to clone the Amazon Home Page",
        img: "/amazon clone.jpeg",
        tags: ["HTML", "CSS"],
    },
    {
        id: 1,
        title: "Calculator",
        desc: "A Typescript and Node.js base project to run on NPX command",
        img: "/calculator.jpeg",
        tags: ["Typescript", "Node.js"],
    },
    {
        id: 2,
        title: "Currency Converter",
        desc: "A Typescript Node.js base project to run on NPX command",
        img: "/currencyconverter.jpeg",
        tags: ["Typescript", "Node.js"],
    },
    {
        id: 3,
        title: "Number Guess Game",
        desc: "A Typescript and Node.js base project to run on NPX command",
        img: "/numberguess game.jpeg",
        tags: ["Typescript", "Node.js"],
    },
    {
        id: 3,
        title: "Hackathon Resume Builder",
        desc: "A Typescript, HTML, CSS, Dom and Node.js base project to run on Vercel it's Editabale & Downloadable",
        img: "/resume.jpeg",
        tags: ["Typescript", "Node.js", "HTML", "CSS"],
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Headings title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
