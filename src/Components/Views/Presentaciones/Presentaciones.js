import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

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
    <section>
      {PresentacionNombre}
      {PresentacionDescripcion}
    </section>
  );
}

export default Presentaciones;
