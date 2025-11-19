import Cabecalho from "./componentes/Cabecalho";
import Inicio from "./componentes/Inicio";
import Historia from "./componentes/Historia";
import Albuns from "./componentes/Albuns";
import Pesquisar_feriados from "./componentes/Pesquisar_feriados";
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
