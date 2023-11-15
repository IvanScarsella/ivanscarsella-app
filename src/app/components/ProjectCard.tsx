import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ project }: any) => {
    return (
        <Link target="_blank" href={project.link}>
            <div className="flex flex-1 flex-row justify-around w-full bg-slate-300 border-neutral-500 border-4 p-4 hover:scale-110 transition-all ease-500">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    // height={400}
                    className="max-w-lg max-h-96 hover:scale-110 transition-all ease-500"
                />

                <div className="flex flex-col flex-start gap-20">
                    <div className="flex flex-1 flex-col items-center justify-around flex-wrap">
                        <h2 className="flex font-bold text-3xl">{project.name}</h2>
                        <h2 className="flex text-center max-w-xl">{project.description}</h2>
                        <div className="flex flex-row flex-wrap gap-4">
                            {project.techStack.map((icon: any) => (
                                <Image
                                    src={icon}
                                    alt={icon}
                                    width={40}
                                    height={40}
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