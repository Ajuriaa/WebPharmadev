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
          label="Nombre del Laboratorio"
          type="text"
          name="txtnombrelaboratorio"
          placeholder="Nombre del Laboratorio"
          value={txtNombreValue}
          error={errorTxtNombre}
          onChange={onChangeHandler}
        />
          <Input
          label="Descripcion del Laboratorio"
          type="text"
          name="txtdescripcionlaboratorio"
          placeholder="Descripcion del Laboratorio"
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