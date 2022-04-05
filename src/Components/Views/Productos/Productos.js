import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import './Productos.css';
import { Link } from "react-router-dom";

const Productos = ({productos}) =>{
  return (
    <Page header={<h2>Productos</h2>} footer={<Nav/>}>
      {
        productos.map(({ _id,productoNombre,productoDescripcion,productoImagen, productoPrecio }) => (
          <ProductosItem key={_id} productoNombre={productoNombre} productoDescripcion={productoDescripcion} productoImagen={productoImagen} productoPrecio={productoPrecio}/>
        ))
      }
    </Page>
  );
}

 const ProductosItem = ({productoNombre, productoDescripcion, productoImagen, productoPrecio}) => {
   console.log()
   return (
     <section className="card-productos">
       <div className="image-container">
          <img src={productoImagen} className="img-producto"/>
          <div className="info-producto">
            <h3 className="title-producto"><Link to="/">{productoNombre}</Link></h3>
            <p className="product-description">{productoDescripcion}</p>
          </div>
       </div>
       <div className="info-container">
          <div className="precio-container">
            <h5 className="precio">${productoPrecio}</h5>
          </div>
          <div className="button-container">
            <button className="button-delete">-</button>
          </div>
        </div>
     </section>
   );
 }

export default Productos;
