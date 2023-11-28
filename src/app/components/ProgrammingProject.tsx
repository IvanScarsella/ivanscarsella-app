import imagen from "../../../public/imagen_inicio.jpg"
import { Button } from '@mui/material'
import { red } from '@mui/material/colors';

const YoutubeVideo = ({ src }: any) => {

    const link = src;

    return (
        <div
            className="bg-slate-400 p-4"
        >
            <iframe
                // width="560"
                width={560 - 56 * 2}
                // height="315"
                height={315 - 31 * 2}
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <Button variant="contained" color='primary' style={{ backgroundColor: red[900] }} target="_blank" href="https://www.youtube.com/channel/UC7kHGbpDf0goDHH7cQfF92A?sub_confirmation=1"
                className="mt-6 hover:scale-125 transition-all ease-500">
                Suscribirse
            </Button>
        </div>
    )
}

export default YoutubeVideo
