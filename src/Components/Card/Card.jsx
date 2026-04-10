

import "./Card.css";

const Card = (props) => {
  return (
    <div className="conteiner_card">

      <figure className="content_img_card">
        <img src={props.foto} alt="" />
      </figure>
      <h1>{props.nome}</h1>

    </div>
  );
};

export default Card;
