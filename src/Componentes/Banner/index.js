import React from 'react'
import styles from './banner.module.css'

export default function Banner({imagem}) {
  return (
    <div className={styles.banner} style={{backgroundImage: `url('/imagens/banner-${imagem}.png')`}}>
    </div>
  )
}
