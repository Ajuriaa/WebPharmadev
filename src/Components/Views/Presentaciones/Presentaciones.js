import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import {AddButton} from "../../UX/Forms/Button";
import './Presentaciones.css';

const Presentaciones = ({presentaciones, onCancelClick})=>{
  return (
    <Page header={<h2>Presentaciones</h2>} footer={<Nav/>}>
    <AddButton onClick={onCancelClick}>
        Agregar
    </AddButton>
    {
      presentaciones.map((o) => (
        <PresentacionesItem key={o._id} presentacion={o} />
      ))
    }
    </Page>
  );
}

const PresentacionesItem = ({presentacion}) => {
  return (
    <section className="card-pres">
        <div className="info-pres">
          <h3 className="title-pres">{presentacion.PresentacionNombre}</h3>
          <p className="pres-description">{presentacion.PresentacionDescripcion}</p>
        </div>
        <div className="button-container">
          <button className="button-delete">-</button>
        </div>
     </section>
  );
}

export default Presentaciones;
