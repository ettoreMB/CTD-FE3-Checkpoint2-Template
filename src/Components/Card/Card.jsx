import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ dentista }) => {
  const {darkmode} = useContext(ThemeContext)
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <Link to={`/detail/${dentista.matricula}`}>
        <div className={`card ${darkmode && styles.cardDark}`}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
          <div className={`card-body ${styles.CardBody} `}>
            <h5 className={`card-title ${styles.title}`}>{`${dentista.nome} ${dentista.sobrenome}`}</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
