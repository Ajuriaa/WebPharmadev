import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

const Productos = ({productos}) =>{
  return (
    <Page header={<h2>Productos</h2>} footer={<Nav/>}>
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
