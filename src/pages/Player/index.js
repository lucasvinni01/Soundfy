import Banner from 'Componentes/Banner'
import Tittle from 'Componentes/Tittle'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './player.module.css'
import NotFound from 'pages/NotFound'

export default function Player() {
    const [video, setVideo] = useState()
    const parametros = useParams()
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/lucasvinni01/soundfy-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(dados => {
            setVideo(...dados)
        }, [])
    })
    if (!video) {
        return <NotFound />
    }

  return (
    <>
    <Banner imagem="player" />
    <Tittle>
        <h1>Player</h1>
    </Tittle>
    <section className={styles.container}>
        <iframe 
            width="80%"  
            src={video.link} 
            title={video.titulo}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    </section>
    </>
  )
}
