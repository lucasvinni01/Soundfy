import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Banner from 'Componentes/Banner'
import Card from 'Componentes/Cards'
import Tittle from 'Componentes/Tittle'

export default function Home() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/lucasvinni01/soundfy-api/videos')
    .then(response => response.json())
    .then(dados => {
      setVideos(dados)
    })
  }, [])

  return (
    <>
    <Banner imagem="home"/>
    <Tittle> 
      Um lugar para guardar seus vídeos e filmes
    </Tittle>
    <section className={styles.container}>
      {videos.map((video)  => {
        return <Card {...video} key={video.id} />
      })}
    </section>
    </>
  )
}