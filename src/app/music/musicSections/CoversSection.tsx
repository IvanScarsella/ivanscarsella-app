import { coverVideos } from "../musicConstants"
import YoutubeVideo from "@/app/components/YoutubeVideo"

const CoversSection = () => {

    return (
        <>
            <div className="flex flex-col text-center m-4">

                <div className="m-8" >
                    <h1 className="text-6xl font-palanquin font-semibold" >Covers</h1>
                </div>
                <ul
                    className='flex flex-1 flex-col gap-32'
                >
                    {coverVideos.map((video) => (
                        <>
                            <div className="flex flex-1 flex-row justify-around w-full bg-slate-300 border-neutral-500 border-4 p-4 hover:scale-110 transition-all ease-500">
                                <YoutubeVideo key={video.data} src={video.src.toString()} />
                                <div className="flex flex-col flex-start gap-20">
                                    <div className="flex flex-1 flex-col justify-around gap-6 items-center">
                                        <h2 className="flex font-bold text-3xl"> {video.data.artist}  </h2>
                                        <h2 className="flex font-bold text-2xl"> "{video.data.song}"  </h2>
                                        <h3 className="flex text-center mt-">{video.data.genre}</h3>
                                        <h3 className="flex text-center mt-">{video.data.description}</h3>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CoversSection