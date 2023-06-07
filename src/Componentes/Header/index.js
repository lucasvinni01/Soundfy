import HeaderLink from 'Componentes/HeaderLink';
import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from './logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
        <Link to="/">
            <img src={logo} alt=""/>
        </Link>
        <nav>
            <HeaderLink url={"./"}>
                Home
            </HeaderLink>
            <HeaderLink url={"./favoritos"}>
                Meus favoritos
            </HeaderLink>
        </nav>
    </header>
  )
}
