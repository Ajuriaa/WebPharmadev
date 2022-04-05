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
        laboratorios.map(({ _id,LaboratorioNombre,LaboratorioDescripcion }) => (
          <LaboratoriosItem key={_id} LaboratorioNombre={LaboratorioNombre} LaboratorioDescripcion={LaboratorioDescripcion} />
        ))
      }
    </Page>
  );
}

const LaboratoriosItem = ({LaboratorioNombre, LaboratorioDescripcion}) => {
  return (
    <section className="card-pres">
        <div className="info-pres">
          <h3 className="title-pres">{LaboratorioNombre}</h3>
          <p className="pres-description">{LaboratorioDescripcion}</p>
        </div>
        <div className="button-container">
          <button className="button-delete">-</button>
        </div>
     </section>
  );
}

export default Laboratorios;
