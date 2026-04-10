import "./Form.css";

const Form = () => {
  const enviar = (e) => {
    e.preventDefault();
    e.target.reset();
    alert("Formulário enviaro, boa sorte!");
  };

  return (
    <form className="Content_Forms" onSubmit={enviar}>
      <h1>Formulário Pokémon</h1>

      <article>
        <label htmlFor="">Nome Completo</label>
        <input type="text" placeholder="Cauã Almeida Pinto Barbosa" />
      </article>

      <article>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="meu_email@Gmail.com" />
      </article>

      <article>
        <label htmlFor="">Cpf</label>
        <input type="text" placeholder=" 000.000.000-00" />
      </article>

      <div className="artucle_subinput">
        <article>
          <label htmlFor="">Data de nascimento</label>
          <input type="Date" />
        </article>

        <article>
          <label htmlFor="">Telefone</label>
          <input type="tel" placeholder="(79) 9 0000-0000" />
        </article>
      </div>

      <article>
        <label htmlFor="">Explique Porque Esse Pokémon Deve Ser Seu:</label>
        <input type="text" placeholder="Eu amo eleeee!" />
      </article>

      <button className="Button_form" type="submit">
        Enviar Formulário
      </button>
    </form>
  );
};

export default Form;
