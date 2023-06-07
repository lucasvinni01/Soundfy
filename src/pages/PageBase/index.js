import Container from "Componentes/Container";
import Footer from "Componentes/Fotter";
import Header from "Componentes/Header";
import FavoritosProvider from "Context/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Header />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}

export default PaginaBase