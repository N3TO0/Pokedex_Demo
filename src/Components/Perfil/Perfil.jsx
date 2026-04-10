import "./Perfil.css";
import * as Pok from "../../assets/Perfil_pokemons";
import * as Evl from "../../assets/Evolucoes";

const Perfil = () => {
  return (
    <div className="Content_Perfil ">
      <article className="Conteudo_1">
        <figure className="Img_Perfil box_sombra">
          <img src={Pok.Marill} alt="Pokemon_Maril" />
        </figure>

        <div className="Tipo_pokemon box_sombra">
          <h1>Água</h1>
        </div>
      </article>

      <article className="Conteudo_2 box_sombra">
        <h1>Marill</h1>
        <article className="Fraquezas">
          <h2>Fraquezas</h2>
          <div className="section_div">
            <p>Grama</p>
            <p>Eletrico</p>
            <p>Veneno</p>
          </div>
        </article>
        <article className="Evolucao">
          <h2>Evolução</h2>
          <figure className="section_div">
            <img src={Evl.marill_1} alt="" />
            <img src={Evl.marill_2} alt="" />
            <img src={Evl.marill_3} alt="" />
          </figure>
        </article>
        <Link to="/perfil" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Squirtle} nome="Squirtle" />
      </Link>
        
      </article>
    </div>
  );
};

export default Perfil;
