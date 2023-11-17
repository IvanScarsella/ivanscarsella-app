import { coverVideos } from "../musicConstants"
import MusicCard from "@/app/components/MusicCard"

const CoversSection = () => {

    return (
        <>
            <div className="flex flex-col text-center m-4 p-8">

                <div className="m-8" >
                    <h2 className="text-3xl font-palanquin font-semibold" >Covers</h2>
                </div>
                <ul
                    className='flex flex-1 flex-col gap-12 p-10 items-center'
                >
                    {coverVideos.map((video) => (
                        <>
                            <MusicCard video={video} />
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CoversSection