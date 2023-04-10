import styles from "./Card.module.css";

const Card = ({ dentista }) => {

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <a href={`/detail/${dentista.matricula}`}>
        <div className={`card`}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
          <div className={`card-body ${styles.CardBody}`}>
            <h5 className={`card-title ${styles.title}`}>{`${dentista.nome} ${dentista.sobrenome}`}</h5>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
