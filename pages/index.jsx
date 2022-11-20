import Header from "../src/components/Header"
import Menu from "../src/components/Menu"
import Timeline from "../src/components/Timeline"
import { useEffect, useState } from "react"
import React from "react"
import { videoService } from "../src/services/videoService";



function HomePage() {

    const service = videoService()
    const [valorDoFiltro, setValorDoFiltro] = useState("")
    const [playlists, setPlaylists] = useState({})

    useEffect(() => {
        service.getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                // Forma imutavel
                const novasPlaylists = {};
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];
                });

                setPlaylists(novasPlaylists);
            })
    }, [])


    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists} />
            </div>
        </>
    )
}

export default HomePage