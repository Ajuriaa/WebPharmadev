import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import './Presentaciones.css';

const Presentaciones = ({presentaciones})=>{
  return (
    <Page header={<h2>Presentaciones</h2>} footer={<Nav/>}>
    {
      presentaciones.map(({ _id,PresentacionNombre,PresentacionDescripcion }) => (
        <PresentacionesItem key={_id} PresentacionNombre={PresentacionNombre} PresentacionDescripcion={PresentacionDescripcion} />
      ))
    }
    </Page>
  );
}

const PresentacionesItem = ({PresentacionNombre, PresentacionDescripcion}) => {
  return (
    <section className="card-pres">
        <div className="info-pres">
          <h3 className="title-pres">{PresentacionNombre}</h3>
          <p className="pres-description">{PresentacionDescripcion}</p>
        </div>
        <div className="button-container">
          <button className="button-delete">-</button>
        </div>
     </section>
  );
}

export default Presentaciones;
