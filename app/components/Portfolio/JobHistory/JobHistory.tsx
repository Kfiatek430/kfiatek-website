import React from 'react'
import styles from './JobHistory.module.css'

const JobHistory = () => {
    return (
        <div className={styles.container}>
            <div className={`flex flex-col items-center w-1/2 ${styles.subcontainer}`}>
                <h2 className='text-3xl md:text-5xl mb-5 text-center'>Education</h2>
                <div className={styles.contentFuture}>
                    <div className='text-base md:text-xl text-[var(--green)]'><i className='bx bxs-calendar mr-2'></i>Maybe in future ?</div>
                </div>

                <div className={styles.content}>
                    <div className='text-base md:text-xl text-[var(--green)]'><i className='bx bxs-calendar mr-2'></i>2022 - present</div>
                    <div className='text-base md:text-xl text-[var(--green)] mb-5'><i className='bx bxs-location-plus mr-2'></i>Kraków</div>
                    <h3 className='text-xl md:text-2xl font-bold my-2'>Zespół Szkół Łączności</h3>
                    <span className='text-base md:text-xl block mb-5 italic'>Programmer Program</span>
                    <p className='text-base md:text-xl text-justify'>
                        Currently pursuing a technical degree in programming, focusing on both theoretical foundations and practical skills in software development. The curriculum covers key areas such as object-oriented programming, algorithms, databases, and the development of desktop, web, and mobile applications.
                    </p>
                </div>
            </div>

            <div className={`flex flex-col items-center w-1/2 ${styles.subcontainer}`}>
                <h2 className={`${styles.h2} text-3xl md:text-5xl mb-5 text-center`}>Experience</h2>
                <div className={styles.contentFuture}>
                    <div className='text-base md:text-xl text-[var(--green)]'><i className='bx bxs-calendar mr-2'></i>Maybe in future ?</div>
                </div>

                <div className={styles.content}>
                    <div className='text-base md:text-xl text-[var(--green)]'><i className='bx bxs-calendar mr-2'></i>2022 - present</div>
                    <div className='text-base md:text-xl text-[var(--green)] mb-5'><i className='bx bxs-location-plus mr-2'></i>Polcom Sp. z. o.o</div>
                    <h3 className='text-xl md:text-2xl font-bold my-2'>Intership</h3>
                    <span className='text-base md:text-xl block mb-5 italic'>Service Desk & R&D Departments</span>
                    <p className='text-base md:text-xl text-justify'>
                        During my internship, I developed a web application for managing the company’s vehicle fleet. Using HTML, CSS, JavaScript and PHP, I created a system that allowed for organization of the fleet, enhancing efficiency in the management process.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JobHistory
