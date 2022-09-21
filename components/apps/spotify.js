import React from 'react'

export default function Spotify() {
    return (
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6UeSakyzhiEt4NB3UAd6NQ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    )
}

export const displaySpotify = () => {
    <Spotify> </Spotify>
}
