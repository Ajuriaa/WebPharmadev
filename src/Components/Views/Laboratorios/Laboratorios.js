import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

const Laboratorios = ({laboratorios})=>{
  return (
    <Page header={<h2>Laboratorios</h2>} footer={<Nav/>}>
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
    <section>
      {LaboratorioNombre}
      {LaboratorioDescripcion}
    </section>
  );
}

export default Laboratorios;
