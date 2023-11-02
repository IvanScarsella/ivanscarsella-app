import imagen from "../../../public/imagen_inicio.jpg"
import { Button } from '@mui/material'
import { red } from '@mui/material/colors';

const primary = red[500]; // #f44336

const YoutubeVideo = ({ src }: any) => {

    const link = src;
    // console.log(link);

    return (
        <div>

            <iframe
                width="560"
                height="315"
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <Button variant="contained" color='primary' style={{ backgroundColor: red[900] }} target="_blank" href="https://www.youtube.com/channel/UC7kHGbpDf0goDHH7cQfF92A?sub_confirmation=1"
                className="mt-6">
                Suscribirse
            </Button>
        </div>
    )
}

export default YoutubeVideo
