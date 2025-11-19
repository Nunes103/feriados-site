import { useState } from "react";

export default function CadastroBatalhas() {
  const [form, setForm] = useState({
    mc: "",
    cidade: "",
    instagram: "",
    video: "",
    categoria: "1x1",
    regras: false,
  });

  function handle(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  function enviar(e) {
    e.preventDefault();

    if (!form.regras) {
      alert("Você precisa aceitar as regras.");
      return;
    }

    alert("Inscrição enviada!");
    console.log(form);
  }

  return (
    <section id="batalhas">
      <h2>Cadastro para Batalhas</h2>

      <form className="contact-form" onSubmit={enviar}>
        <div className="form-group">
          <label>Nome de MC *</label>
          <input name="mc" value={form.mc} onChange={handle} required />
        </div>

        <div className="form-group">
          <label>Cidade *</label>
          <input name="cidade" value={form.cidade} onChange={handle} required />
        </div>

        <div className="form-group">
          <label>Instagram *</label>
          <input name="instagram" value={form.instagram} onChange={handle} required />
        </div>

        <div className="form-group">
          <label>Link do vídeo *</label>
          <input name="video" type="url" value={form.video} onChange={handle} required />
        </div>

        <div className="form-group">
          <label>Categoria *</label>
          <select name="categoria" value={form.categoria} onChange={handle}>
            <option value="1x1">1x1</option>
            <option value="2x2">2x2</option>
            <option value="freestyle">Freestyle</option>
          </select>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="regras"
            checked={form.regras}
            onChange={handle}
          />
          <label>Li e aceito as regras.</label>
        </div>

        <button className="btn btn-primary">Enviar</button>
      </form>
    </section>
  );
}
