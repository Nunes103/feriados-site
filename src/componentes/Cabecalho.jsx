export default function Cabecalho() {
  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          Hip<span>Not</span>Rip
        </div>

        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#historia">História</a></li>
            <li><a href="#artistas">Artistas</a></li>
            <li><a href="#albuns">Álbuns</a></li>
            <li><a href="#batalhas">Batalhas</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}