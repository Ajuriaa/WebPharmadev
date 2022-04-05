import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

import {AddButton, DeleteButton} from "../../UX/Forms/Button";
import './Productos.css';

const Productos = ({productos, onCancelClick, onDeleteClick}) =>{
  return (
    <Page header={<h2>Productos</h2>} footer={<Nav/>}>
      <AddButton onClick={onCancelClick} >
        Agregar
      </AddButton>
      <DeleteButton onClick={onDeleteClick} >
        Eliminar
      </DeleteButton>
      {
        productos.map((o) => (
          <ProductosItem key={o._id} 
          producto={o}
          />
        ))
      }
    </Page>
  );
}

 const ProductosItem = ({producto}) => {
   console.log({producto})
   return (
     <section className="card-productos">
       <div className="image-container">
          <img src={producto.productoImagen} className="img-producto"/>
          <div className="info-producto">
            <h3 className="title-producto">{producto.productoNombre}</h3>
            <p className="product-description">{producto.productoDescripcion}</p>
            <p className={producto.productoActivo==="True" ? "in-stock" : "agotado"}>{producto.productoActivo==="True" ? "En Stock" : "Agotado"}</p>
          </div>
       </div>
       <div className="info-container">
          <div className="precio-container">
            <h5 className="precio">${producto.productoPrecio}</h5>
          </div>
          <div className="button-container">
            <button className="button-delete">-</button>
          </div>
        </div>
     </section>
   );
 }

export default Productos;
