import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ project }: any) => {
    console.log(project.techStack);
    
    return (
        <Link target="_blank" href={project.link}>
            <div className="flex flex-row justify-between items-center gap-16 bg-slate-300 border-neutral-500 border-4 p-4 px-16 hover:scale-110 transition-all ease-500 rounded-3xl">

                <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    // height={400}
                    className="bg-slate-400 p-4 rounded-3xl max-w-lg max-h-96 hover:scale-110 transition-all ease-500"
                />

                <div className="flex flex-1 flex-col items-center justify-around flex-wrap  w-1/2">
                    <div className="flex flex-1 flex-col justify-around gap-6 items-center font-palanquin text-md font-medium lg:max-w-lg tracking-wide text-slate-600">
                        <h2 className="flex font-bold text-xl">{project.name}</h2>
                        <h2 className="flex text-center text-xl">{project.description}</h2>
                        <div className="flex flex-row flex-wrap gap-4">
                            {project.techStack.map((icon: any) => (
                                <Image
                                    src={icon.src}
                                    alt={icon}
                                    width={30}
                                    height={30}
                                    title={icon.name}
                                    className="hover:scale-125 transition-all ease-500"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard