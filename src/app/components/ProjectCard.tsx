import Image from 'next/image'
import Link from 'next/link'
import javascript from '../../../assets/icons/javascript_icon.png'

const ProjectCard = ({ project }: any) => {
  return (
    <Link target='_blank' href={project.link}>
      <div className='ease-500 flex flex-col items-center justify-between gap-8 rounded-3xl border-4 border-neutral-500 bg-gradient-to-r from-black to-red-800 p-6 px-8 transition-all hover:scale-110 hover:bg-slate-200 hover:bg-opacity-20 hover:shadow-2xl max-md:p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-16 '>
        <div className='lg:w-1/2 lg:max-w-lg'>
          <Image
            src={project.image}
            alt={project.name}
            width={600}
            height={400}
            className='ease-500 max-h-96 max-w-full rounded-3xl transition-all hover:scale-110 hover:shadow-2xl'
          />
        </div>

        <div className='flex flex-col items-center justify-around text-center lg:w-1/2 lg:flex-1 lg:flex-col lg:items-start'>
          <div className='font-palanquin text-md flex flex-1 flex-col items-center justify-around gap-6 font-medium tracking-wide text-white lg:max-w-lg lg:text-left '>
            <h2 className='flex text-xl font-bold'>{project.name}</h2>
            <h2 className='flex text-justify text-xl max-xl:text-base max-md:text-sm'>
              {project.description}
            </h2>
            <div className='flex flex-row flex-wrap gap-4'>
              {project.techStack.map((icon: any, index: number) => (
                <Image
                  key={index}
                  src={`/${icon.src}`}
                  alt={icon.name}
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
