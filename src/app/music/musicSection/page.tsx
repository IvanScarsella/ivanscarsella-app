"use client"

import MusicCard from "@/app/components/MusicCard";
import { Button } from "@mui/material";
import { useState } from "react";

const MusicSection = ({ sectionName, musicVideos }: any) => {
    const [renderVideos, setRenderVideos] = useState(musicVideos.slice(0, 5));

    const showMoreButton = renderVideos.length < musicVideos.length;
    const showLessButton = renderVideos.length > 5;

    return (
        <>
            <div className="flex flex-col text-center m-4 p-8 border-stone-800 border-y-2">
                <div className="m-8">
                    <h2 className="text-4xl font-palanquin font-semibold">
                        {sectionName}
                    </h2>
                </div>
                <ul className="flex flex-1 flex-col gap-12 p-10 items-center">
                    {renderVideos.map((video: any, index: number) => (
                        <MusicCard key={index} video={video} />
                    ))}
                    <p className="italic">
                        Mostrando {renderVideos.length} de {musicVideos.length}
                    </p>
                </ul>
                <div
                    className="flex flex-1 flex-col items-center line-clamp-1"
                >

                    {showMoreButton && (
                        <Button
                            onClick={() => setRenderVideos(musicVideos)}
                            className="whitespace-nowrap overflow-hidden text-ellipsis max-w-full hover:scale-125 transition-all ease-500 w-1/12 bg-gray-900 text-slate-100 p-2"
                        >
                            Ver más...
                        </Button>
                    )}
                    {showLessButton && (
                        <Button
                            onClick={() => setRenderVideos(musicVideos.slice(0, 5))}
                            className="whitespace-nowrap overflow-hidden text-ellipsis max-w-full hover:scale-125 transition-all ease-500 w-1/12 bg-gray-900 text-slate-100 p-2"
                        >
                            Ver menos...
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default MusicSection;