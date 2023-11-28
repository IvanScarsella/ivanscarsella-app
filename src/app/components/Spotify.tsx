const Spotify = () => {
    return (
        <div>
            <iframe
                // style="border-radius:12px"
                className="hover:scale-110 transition-all ease-500"
                src="https://open.spotify.com/embed/playlist/1mzf2NhbQTX9o7j9TvieS4?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                // allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default Spotify