import { useCallback,  useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import { api } from "../../lib/api";


const ScheduleForm = () => {
  const [denstistas, setDentistas] = useState([])
  const [pacientes, setPacientes]= useState([])
  const [matriculaDentista, setMatriculaDentista] = useState('')
  const [matriculaPaciente, setMatriculaPaciente] = useState('')
  const [horario, setHorario] = useState('')

  const loadDentistas = useCallback(async ()=> {
    const { data } = await api('/dentista', {
      headers: {
        Authorization: {
          Authorization: localStorage.getItem('@dhOdonto_token')
        }
      }
    })
    setDentistas(data)
  },[])

  const loadPacientes = useCallback(async () => {
    const { data } = await api('/paciente', {
      headers: {
        Authorization: {
          Authorization: localStorage.getItem('@dhOdonto_token')
        }
      }
    })
    setPacientes(data.body)
  },[])
  
  function handleMatriculaDentista(e) {
    setMatriculaDentista(e.target.value)
  }
  function handleMatriculaPaciente(e) {
    setMatriculaPaciente(e.target.value)
  }
  function handleHorario(e) {
    setHorario(e.target.value)
  }
 
  useEffect(() => {
    loadPacientes()
    loadDentistas()
  }, []);
  console.log(pacientes)
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await api.post('/consulta',  {
        dentista: {
            matricula: matriculaDentista
        },
        paciente: {
            matricula: matriculaPaciente
        },
        dataHoraAgendamento: horario
      },
      {headers: {
        Authorization: `Bearer ${localStorage.getItem('@dhOdonto_token')}`
      }}
     
        
      )
    alert("consulta marcada com sucesso")
    } catch (error) {
      alert(error)
    }
    
   
  };

  return (
    <>
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select className="form-select" name="dentist" id="dentist" onChange={handleMatriculaDentista} value={matriculaDentista}>
              <option  value={''}>
                  Selecione
                </option>
                {denstistas.map((dentista) => (
                  <option key={dentista.matricula} value={dentista.matricula}>{dentista.nome}</option>
                ))}
               
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select className="form-select" name="patient" id="patient" onChange={handleMatriculaPaciente} value={matriculaPaciente}>
               
                <option key={'Matricula do paciente'} value={'Matricula do paciente'}>
                  Selecione
                </option>
                {pacientes.map(paciente => (
                   <option key={paciente.matricula} value={paciente.matricula}>
                   {`${paciente.nome} ${paciente.sobrenome}` }
                 </option>
                ))}
               
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                value={horario}
                onChange={handleHorario}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
