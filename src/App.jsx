import Cabecalho from "./componentes/Cabecalho";
import Inicio from "./componentes/Inicio";
import Historia from "./componentes/Historia";
import Albuns from "./componentes/Albuns";
import Feriados from "./componentes/Feriados";
import Rodape from "./componentes/Rodape";

import "./estilos/global.css";

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <Inicio />
        <Historia />
        <Aindanaosei />
        <Feriados />
      </main>

      <Rodape />
    </>
  );
}

export default App;
