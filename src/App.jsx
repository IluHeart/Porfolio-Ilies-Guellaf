/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./App.module.scss";
import "./styles/index.scss";
import Container from "./components/ContainerSelectors/Container/Container";
import Article from "./components/ContainerSelectors/Article/Article";
import Main from "./components/ContainerSelectors/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import SobreMi from "./pages/Sobre mi/SobreMi";
import Tecnologias from "./pages/Tecnologias/Tecnologias";
import Proyectos from "./pages/Proyectos/Proyectos";

function App() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleLiClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="app">
      <Container>
        <NavBar onLiClick={handleLiClick} />
        <Main content="center">
          {selectedItem !== null && (
            <SelectedContent selectedItem={selectedItem} />
          )}
        </Main>
      </Container>
    </div>
  );
}

function SelectedContent({ selectedItem }) {
  return (
    <Article content="center">
      {selectedItem === 0 && <SobreMi/>}
      {selectedItem === 1 && <Tecnologias/>}
      {selectedItem === 2 && <Proyectos/>}
      {selectedItem === 3 && <img src="tu_imagen.svg" alt="SVG" />}
      {selectedItem === 4 && <img src="tu_imagen.svg" alt="SVG" />}
    </Article>
  );
}

export default App;
