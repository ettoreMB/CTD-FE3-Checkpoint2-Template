
import ScheduleFormModal from "../ScheduleFormModal/ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

const DetailCard = ({dentista}) => {
  const {darkmode} = useContext(ThemeContext)
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Detail about Dentist {dentista?.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div
          className={`card-body row ${darkmode && styles.cardDark}`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentista?.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentista?.sobrenome}
              </li>
              <li className="list-group-item">
                Usuário: {dentista?.usuario.username}
              </li>
            </ul>
            <div className="text-center">
        
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn ${darkmode ? "btn-dark":"btn-light"} ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
