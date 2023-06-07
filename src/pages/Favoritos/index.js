import Banner from 'Componentes/Banner'
import styles from './favoritos.module.css'
import Tittle from 'Componentes/Tittle'
import Card from 'Componentes/Cards'
import {  useFavoritoContext  } from 'Context/Favoritos'

export default function Favoritos () {

    const {  favorito  } = useFavoritoContext()

    return (
        <>
        <Banner imagem="favoritos"/>
        <Tittle>
            Tudo que você ama está aqui!
        </Tittle>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />
            })}
        </section>
        </>
    )
}