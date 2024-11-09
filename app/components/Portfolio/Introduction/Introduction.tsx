import React from 'react'

const Introduction = () => {
    return (
        <div className="h-full flex justify-center items-center main">
            <div className="w-4/5 flex justify-center">
            <div className="flex flex-col justify-center items-center gap-4 w-fit">
                <p className="text-xl md:text-2xl tracking-[0.1rem] text-[var(--green)] w-full">Hello, my name is</p>
                <h1 className="text-4xl md:text-6xl font-bold">Michał Kwiatkowski</h1>
                <p className="text-lg leading-10 md:leading-10 md:text-xl text-justify max-w-[30rem] text-[var(--gray)] indent-10">I am a novice programmer and a student at the Zespół Szkół Łączności in Kraków, with a strong passion for building robust backend solutions. My main focus is on backend development, but I also enjoy exploring frontend challenges from time to time, as you can see on this site. I'm constantly expanding my skills and learning new technologies to improve my craft.</p>
            </div>
            </div>        
        </div>
    )
}

export default Introduction
