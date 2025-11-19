import Cabecalho from "./componentes/Cabecalho";
import Inicio from "./componentes/Inicio";
import Historia from "./componentes/Historia";
import Artistas from "./componentes/Artistas";
import Albuns from "./componentes/Albuns";
import CadastroBatalhas from "./componentes/CadastroBatalhas";
import Rodape from "./componentes/Rodape";

import "./estilos/global.css";

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <Inicio />
        <Historia />
        <Artistas />
        <Albuns />
        <CadastroBatalhas />
      </main>

      <Rodape />
    </>
  );
}

export default App;