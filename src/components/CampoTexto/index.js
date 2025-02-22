import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        required={props.obrigatorio}
        value={props.valor}
        onChange={aoDigitado}
      ></input>
    </div>
  );
};

export default CampoTexto;
