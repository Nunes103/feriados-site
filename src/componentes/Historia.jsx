export default function Historia() {
  return (
    <section id="historia">
      <h2>História do Hip Hop</h2>
      <p>
        O Hip Hop nasceu como um movimento cultural e social, não apenas musical.
         Ele surgiu como uma forma de expressão das comunidades negras,
          latinas e marginalizadas nos Estados Unidos.
      </p>

      <div className="grid grid-3" style={{ marginTop: "1.5rem" }}>
        <div className="card">
          <h3>Origem – Bronx, Nova York década de 1970</h3>
          <p>Festas de rua, DJs, MCs, breakdance e graffiti começaram tudo.</p>
        </div>

        <div className="card">
          <h3>Expansão</h3>
          <p>Nos anos 80 e 90, o movimento dominou rádios e ruas do mundo.</p>
        </div>

        <div className="card">
          <h3>Hip Hop no Brasil</h3>
          <p>O rap nacional se tornou voz das favelas e das periferias.</p>
        </div>
      </div>
    </section>
  );
}