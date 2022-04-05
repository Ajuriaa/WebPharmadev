import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import {AddButton} from "../../UX/Forms/Button";

const Productos = ({productos, onCancelClick}) =>{
  return (
    <Page header={<h2>Productos</h2>} footer={<Nav/>}>
      <AddButton onClick={onCancelClick} >
        Agregar
      </AddButton>
      {
        productos.map(({ _id,productoNombre,productoDescripcion }) => (
          <ProductosItem key={_id} productoNombre={productoNombre} productoDescripcion={productoDescripcion} />
        ))
      }
    </Page>
  );
}

 const ProductosItem = ({productoNombre, productoDescripcion}) => {
   return (
     <section>
       {productoNombre}
       {productoDescripcion}
     </section>
   );
 }

export default Productos;
