"use client"

import MusicCard from "@/app/components/MusicCard"
import { Button } from "@mui/material"
// import Button from "../../components/Button"
import { useState } from "react"

const MusicSection = ({ sectionName, musicVideos }: any) => {

    const [renderVideos, setRenderVideos] = useState(musicVideos.slice(0, 5))

    return (
        <>
            <div className="flex flex-col text-center m-4 p-8">

                <div className="m-8" >
                    <h2 className="text-3xl font-palanquin font-semibold" >{sectionName}</h2>
                </div>
                <ul
                    className='flex flex-1 flex-col gap-12 p-10 items-center'
                >
                    {renderVideos.map((video: any) => (
                        <>
                            <MusicCard video={video} />
                        </>
                    ))}
                </ul>
                        <Button
                        onClick={() => setRenderVideos(musicVideos)}
                        hidden={renderVideos.length > 5}
                        className="hover:scale-125 transition-all ease-500"
                        >
                            Ver más...
                        </Button>
                        <Button
                        onClick={() => setRenderVideos(musicVideos.slice(0, 5))}
                        hidden={renderVideos.length < 6}
                        className="hover:scale-125 transition-all ease-500"
                        >
                            Ver menos...
                        </Button>
            </div>
        </>
    )
}

export default MusicSection