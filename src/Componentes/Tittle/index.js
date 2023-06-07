import React from 'react'
import styles from './tittle.module.css'

export default function Tittle({children}) {
  return (
    <div className={styles.texto}>
        {children}
    </div>
    )
}
