import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import {AddButton} from "../../UX/Forms/Button";
import './Laboratorios.css';

const Laboratorios = ({laboratorios, onCancelClick})=>{
  return (
    <Page header={<h2>Laboratorios</h2>} footer={<Nav/>}>
        <AddButton onClick={onCancelClick}>
        Agregar
      </AddButton>
      {
        laboratorios.map((o) => (
          <LaboratoriosItem key={o._id} laboratorio={o} />
        ))
      }
    </Page>
  );
}

const LaboratoriosItem = ({laboratorio}) => {
  return (
    <section className="card-pres">
        <div className="info-pres">
          <h3 className="title-pres">{laboratorio.LaboratorioNombre}</h3>
          <p className="pres-description">{laboratorio.LaboratorioDescripcion}</p>
        </div>
        <div className="button-container">
          <button className="button-delete">-</button>
        </div>
     </section>
  );
}

export default Laboratorios;
