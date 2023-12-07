import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ project }: any) => {
  // console.log(project.techStack)

  return (
    <Link target='_blank' href={project.link}>
      <div className='ease-500 flex flex-row items-center justify-between gap-16 rounded-3xl border-4 border-neutral-500 bg-slate-300 bg-opacity-10 p-4 px-16 transition-all hover:scale-110 hover:bg-slate-200 hover:bg-opacity-20  hover:shadow-2xl '>
        <Image
          src={project.image}
          alt={project.name}
          width={600}
          // height={400}
          className='ease-500 max-h-96 max-w-lg rounded-3xl bg-slate-400 bg-opacity-10 p-4 transition-all hover:scale-110 hover:shadow-2xl'
        />

        <div className='flex w-1/2 flex-1 flex-col flex-wrap items-center  justify-around '>
          <div className='font-palanquin text-md flex flex-1 flex-col items-center justify-around gap-6 font-medium tracking-wide text-white lg:max-w-lg '>
            <h2 className='flex text-xl font-bold'>{project.name}</h2>
            <h2 className='flex text-center text-justify text-xl'>
              {project.description}
            </h2>
            <div className='flex flex-row flex-wrap gap-4'>
              {project.techStack.map((icon: any) => (
                <Image
                  src={icon.src}
                  alt={icon}
                  width={30}
                  height={30}
                  title={icon.name}
                  className='ease-500 transition-all hover:scale-125 hover:shadow-2xl'
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
