import React from 'react'
import Image from 'next/image'
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <div className="w-full h-full flex justify-center items-center pt-5">
            <div className="w-4/5 flex flex-col items-center justify-center">
                <h2 className='text-3xl md:text-5xl mb-10 text-center'>My Projects</h2>
                <div className='flex justify-center items-center gap-10'>
                    <div className='w-1/2'>
                        <Image
                            src="/project1.png"
                            alt="Docx to md preview"
                            width={799}
                            height={312}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                    <div className='w-1/2 relative flex flex-col gap-4'>
                        <h3 className='text-xl md:text-2xl font-bold my-2'>Docx to Markdown converter</h3>
                        <div className={styles.opis}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aliquam.</p>
                        </div>
                        <div className='text-[var(--green)]'>
                            <p>Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
