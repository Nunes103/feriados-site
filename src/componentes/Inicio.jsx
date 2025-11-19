export default function Inicio() {
  return (
    <section id="inicio">
      <div className="hero">
        <div className="hero-text">
          <div className="tagline">Rap • Graffiti • DJ • Break</div>

          <h1>A Cultura Hip Hop em um Só Lugar</h1>

          <p>
            Explore a história, os elementos e os artistas que moldaram o hip hop
            como um movimento global.
          </p>

          <div className="cta-group">
            <a href="#historia" className="btn btn-primary">Explorar História</a>
            <a href="#artistas" className="btn btn-outline">Ver Artistas</a>
          </div>
        </div>

        <aside className="hero-card">
          <h3>Playlist do Dia</h3>
    
          <ul style={{ paddingLeft: "1rem", color: "#bbb" }}>
            <li>Nas – “N.Y. State of Mind” Boom Bap clássico</li>
            <li>Racionais MC's – “Negro Drama”</li>
            <li>Travis Scott – “SICKO MODE”</li>
            <li>Matuê – “Kenny G”</li>
            <li>Kendrick Lamar – “Alright”</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}