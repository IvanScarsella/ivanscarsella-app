import { coverVideos } from "../musicConstants"
import YoutubeVideo from "@/app/components/YoutubeVideo"

const CoversSection = () => {
    return (
        <>
            <div>
                <h1>Covers</h1>
            </div>
            <ul
                className='flex flex-1 flex-col gap-32'
            >
                {coverVideos.map((video) => (
                    <YoutubeVideo>{video}</YoutubeVideo>
                ))}
            </ul>
        </>
    )
}

export default CoversSection