"use client"
import { programmingProjects } from "../programmingConstants"
import ProgrammingProject from "@/app/components/ProgrammingProject"
import Image from "next/image"
import ProjectCard from "@/app/components/ProjectCard"

const CoversSection = () => {

    return (
        <>
            <div className="flex flex-col text-center m-4 p-8 border-stone-800 border-y-2">

                <div className="m-8" >
                    <h1 className="text-4xl font-palanquin font-semibold" >Proyectos</h1>
                </div>
                <ul
                    className='flex flex-1 flex-col gap-12 p-10 items-center'
                >
                    {programmingProjects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CoversSection