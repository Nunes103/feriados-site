const artistas = [
  { nome: "Racionais MC's", estilo: "Rap de Conscientização" },
  { nome: "Sabotage", estilo: "Lenda do Rap Nacional" },
  { nome: "Kendrick Lamar", estilo: "Lyricist" },
  { nome: "J. Cole", estilo: "Storyteller" },
];

export default function Artistas() {
  return (
    <section id="artistas">
      <h2>Artistas em Destaque</h2>

      <div className="artists-list">
        {artistas.map((a) => (
          <div className="artist" key={a.nome}>
            <div className="artist-name">{a.nome}</div>
            <div className="artist-country">{a.estilo}</div>
          </div>
        ))}
      </div>
    </section>
  );
}