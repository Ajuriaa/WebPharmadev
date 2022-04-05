import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";

const ModalDelete = ({
    txtNombreValue,
    errorTxtNombre,
    onChange: onChangeHandler,
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

        </section>
        <footer className="footer">
        <PrimaryButton onClick={onConfirmClick}>
          Eliminar
        </PrimaryButton>
        <SecondaryButton onClick={onCancelClick}>
          Cerrar
        </SecondaryButton>
        </footer>
    </section>
    );
    
}

export default ModalDelete;