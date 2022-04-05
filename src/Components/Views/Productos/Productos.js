import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import {Link} from "react-router-dom"


const Productos = ({productos}) =>{
  return (
    <Page header={<h2>Productos</h2>} footer={<Nav/>}>
   {
     productos.map((o)=>{
       return <ProductosItem key={o._id} productos={o}/>
     })
   }
    </Page>
  );
}

const ProductosItem = ({producto}) => {
  return(
    <section>
      <Link to={`productos`}>
      {producto.productoNombre} {producto.productoDescripcion} {producto.productoPrecio} {producto.productoImagen}
      </Link>
    </section>
  )
}

export default Productos;
