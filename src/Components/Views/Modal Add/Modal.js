import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";

const Modal = ({
    txtNombreValue,
    errorTxtNombre,
    onChange: onChangeHandler,
    txtDescripcionValue,
    errorTxtDescripcion,
    txtPrecioValue,
    errorTxtPrecio,
    txtImagenValue,
    errorTxtImagen,
    onConfirmClick,
    onCancelClick
}) => {
    return(
      <section className="container">
         <section className="form">
         <Input
          label="Nombre del Producto"
          type="text"
          name="txtnombreproducto"
          placeholder="Nombre del Producto"
          value={txtNombreValue}
          error={errorTxtNombre}
          onChange={onChangeHandler}
        />
          <Input
          label="Descripcion del Producto"
          type="text"
          name="txtdescripcionproducto"
          placeholder="Descripcion del Producto"
          value={txtDescripcionValue}
          error={errorTxtDescripcion}
          onChange={onChangeHandler}
        />
          <Input
          label="Precio Producto"
          type="text"
          name="txtprecioproducto"
          placeholder="Precio Producto"
          value={txtPrecioValue}
          error={errorTxtPrecio}
          onChange={onChangeHandler}
        />
           <Input
          label="Imagen del Producto - Link"
          type="text"
          name="txtimagenproducto"
          placeholder="Imagen del Producto"
          value={txtImagenValue}
          error={errorTxtImagen}
          onChange={onChangeHandler}
        />
        </section>
        <footer className="footer">
        <PrimaryButton onClick={onConfirmClick}>
          Crear
        </PrimaryButton>
        <SecondaryButton onClick={onCancelClick}>
          Cerrar
        </SecondaryButton>
        </footer>
    </section>
    );
    
}

export default Modal;