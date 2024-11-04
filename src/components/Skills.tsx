import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="flip-right">
                <h2 className='text-4xl md:text-5xl'>Languages & Technologies i love to work with</h2>
                <p className='text-orange-200 pt-2'>
                I am passionate web developer Specailized in Html Css Typescript and Javascript, I am also experiencing to enhance my skills by using frameworks like React and Next.js to create dynamic and user friendly applications,I stay updated on the latest teachnologies time to time to polish my Skill and contribute my efforts 
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-orange-400 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="flip-right">HTML</h2>
                        <h2 data-aos="flip-right">CSS</h2>
                        <h2 data-aos="flip-right">Typescript</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="flip-right">Node.js</h2>
                        <h2 data-aos="flip-right">Next.js</h2>
                        <h2 data-aos="flip-right">Tailwind</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
