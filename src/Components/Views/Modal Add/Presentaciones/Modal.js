import Input from "../../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../../UX/Forms/Button";

const Modal = ({
    txtNombreValue,
    errorTxtNombre,
    onChange: onChangeHandler,
    txtDescripcionValue,
    errorTxtDescripcion,
    onConfirmClick,
    onCancelClick
}) => {
    return(
      <section className="container">
         <section className="form">
         <Input
          label="Nombre de la Presentacion"
          type="text"
          name="txtnombrepresentacion"
          placeholder="Nombre de la Presentacion"
          value={txtNombreValue}
          error={errorTxtNombre}
          onChange={onChangeHandler}
        />
          <Input
          label="Descripcion de la Presentacion"
          type="text"
          name="txtdescripcionpresentacion"
          placeholder="Descripcion de la Presentacion"
          value={txtDescripcionValue}
          error={errorTxtDescripcion}
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