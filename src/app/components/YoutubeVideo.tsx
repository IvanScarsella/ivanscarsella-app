import Button from "../components/Button"

const YoutubeVideo = ({ src }: any) => {

    const link = src;

    return (
        <div
            className="bg-slate-400 p-4 hover:scale-110 transition-all ease-500"
        >
            <iframe
                // width="560"
                width={560 - 56 * 3}
                // height="315"
                height={315 - 31 * 3}
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <Button text="Subscribirse" href="https://www.youtube.com/channel/UC7kHGbpDf0goDHH7cQfF92A?sub_confirmation=1" target="_blank"
            />
        </div>
    )
}

export default YoutubeVideo
