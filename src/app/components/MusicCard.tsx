"use client"

import Link from "next/link"
import Button from "../components/Button";
import YoutubeVideo from "./ProgrammingProject";

const MusicCard = ({ video }: any) => {
    return (
        <div className="flex flex-row justify-between items-center w-10/12 bg-slate-300 border-neutral-500 border-4 p-4 hover:scale-110 transition-all ease-500">
            <div className=" bg-cyan-950 ml-36 hover:scale-110 transition-all ease-500">
                <YoutubeVideo key={video.data} src={video.src.toString()} />
            </div>

            <div className="flex flex-1 flex-col items-center justify-around flex-wrap">
                <div className="flex flex-1 flex-col justify-around gap-6 items-center">
                    <h2 className="flex font-bold text-3xl"> Artista: &nbsp;
                        <span className="text-4xl"> {video.data.artist}</span>
                    </h2>
                    <h2 className="flex font-bold text-2xl"> Canción: &nbsp;
                        <span className="text-3xl">                 "{video.data.song}"</span>
                    </h2>
                    <h3 className="flex text-center text-xl">{video.data.genre}</h3>
                    {/* <Link href={video.data.link} target="_blank"> */}
                        <Button text="Ver en YouTube" href={video.data.link} target="_blank" />
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default MusicCard