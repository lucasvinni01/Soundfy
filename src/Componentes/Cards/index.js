import React from 'react'
import styles from './cards.module.css'
import favbutton from './favoritar.png'
import unfavbutton from './favorito.png'
import { useFavoritoContext } from 'Context/Favoritos'
import { Link } from 'react-router-dom'

export default function Card({id, titulo, capa}) {

  const {favorito, adcionarFavorito} = useFavoritoContext()
  const itemFavoritado = favorito.some((fav)=> fav.id === id)
  const icone = itemFavoritado ? unfavbutton : favbutton

  return (
    <div className={styles.container} key={id}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa}/>
        <h2>{titulo}</h2>
      </Link>
        <img 
          src={icone} 
          alt='Favoritar' 
          className={styles.favoritar}
          onClick={() => {
            adcionarFavorito({id, titulo, capa})
          }}/>
    </div>
  )
}
