import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import * as Pok from "../../assets/Card_pokemons";
// import * as Evo from './assets/Evolucoes';
// import * as Pok1 from './assets/Perfil_pokemons';
import './Page_Home.css'


const Page_Home = () => {
  return (
    <div className="content_page_home">
      <Link to="/perfil" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Marill} nome="Maril" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Charmander} nome="Charmander" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Bulbasaur} nome="Bulbasaur" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Squirtle} nome="Squirtle" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Pidgey} nome="Pidgey" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Pikachu} nome="Pikachu" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Caterpie} nome="Caterpie" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Abra} nome="Abra" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Psyduck} nome="Psyduck" />
      </Link>
      <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card foto={Pok.Mew} nome="Mew" />
      </Link>
      
    </div>
  );
};

export default Page_Home;
