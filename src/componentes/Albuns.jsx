const albuns = [
  { titulo: "Sobrevivendo no Inferno", artista: "Racionais MC's", ano: "1997" },
  { titulo: "To Pimp A Butterfly", artista: "Kendrick Lamar", ano: "2015" },
  { titulo: "O Rap é Compromisso", artista: "Sabotage", ano: "2001" },
  { titulo: "The Miseducation", artista: "Lauryn Hill", ano: "1998" },
];

export default function Albuns() {
  return (
    <section id="albuns">
      <h2>Álbuns Essenciais</h2>

      <div className="albums">
        {albuns.map((album) => (
          <div className="album" key={album.titulo}>
            <div className="album-title">{album.titulo}</div>
            <div className="album-artist">{album.artista}</div>
            <div className="album-year">{album.ano}</div>
          </div>
        ))}
      </div>
    </section>
  );
}