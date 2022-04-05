import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

import {AddButton} from "../../UX/Forms/Button";
import './Productos.css';

const Productos = ({productos, onCancelClick}) =>{
  return (
    <Page header={<h2>Productos</h2>} footer={<Nav/>}>
      <AddButton onClick={onCancelClick} >
        Agregar
      </AddButton>
      {
        productos.map(({ _id,productoNombre,productoDescripcion,productoImagen, productoPrecio, productoActivo }) => (
          <ProductosItem key={_id} 
          productoNombre={productoNombre} 
          productoDescripcion={productoDescripcion} 
          productoImagen={productoImagen} 
          productoPrecio={productoPrecio} 
          productoActivo={productoActivo}/>
        ))
      }
    </Page>
  );
}

 const ProductosItem = ({productoNombre, productoDescripcion, productoImagen, productoPrecio, productoActivo, onClickDelete}) => {
   console.log(productoActivo)
   return (
     <section className="card-productos">
       <div className="image-container">
          <img src={productoImagen} className="img-producto"/>
          <div className="info-producto">
            <h3 className="title-producto">{productoNombre}</h3>
            <p className="product-description">{productoDescripcion}</p>
            <p className={productoActivo==="True" ? "in-stock" : "agotado"}>{productoActivo==="True" ? "En Stock" : "Agotado"}</p>
          </div>
       </div>
       <div className="info-container">
          <div className="precio-container">
            <h5 className="precio">${productoPrecio}</h5>
          </div>
          <div className="button-container">
            <button className="button-delete" onClick={onClickDelete}>-</button>
          </div>
        </div>
     </section>
   );
 }

export default Productos;
