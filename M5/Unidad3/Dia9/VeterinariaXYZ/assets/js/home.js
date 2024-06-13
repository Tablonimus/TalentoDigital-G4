class Propietario {
  constructor(propietario, direccion, telefono) {
    this._propietario = propietario;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  datosPropietario() {
    return {
      propietario: this._propietario,
      direccion: this._direccion,
      telefono: this._telefono,
    };
  }
}

class Animal extends Propietario {
  constructor(propietario, direccion, telefono, tipo) {
    super(propietario, direccion, telefono);
    this._tipo = tipo;
  }
  getTipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor(
    propietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  ) {
    super(propietario, direccion, telefono, tipo);
    this._nombre = nombreMascota;
    this._enfermedad = enfermedad;
  }
  getNombre() {
    return this._nombre;
  }
  setNombre(nombreNuevo) {
    this._nombre = nombreNuevo;
  }
  getEnfermedad() {
    return this._enfermedad;
  }
  setEnfermedad(enfermedadNueva) {
    this._enfermedad = enfermedadNueva;
  }
}

const propietario = document.querySelector("#propietario");
const direccion = document.querySelector("#direccion");
const telefono = document.querySelector("#telefono");
const tipo = document.querySelector("#tipo");
const nombreMascota = document.querySelector("#nombreMascota");
const enfermedad = document.querySelector("#enfermedad");
const btnAgregar = document.querySelector("button");
const resultado = document.querySelector("#resultado");

let formulario = {};

function onChangeInput(event) {
  formulario = { ...formulario, [event.target.id]: event.target.value };
}

propietario.addEventListener("change", (event) => {
  onChangeInput(event);
});

direccion.addEventListener("change", (event) => {
  onChangeInput(event);
});

telefono.addEventListener("change", (event) => {
  onChangeInput(event);
});

tipo.addEventListener("change", (event) => {
  onChangeInput(event);
});

nombreMascota.addEventListener("change", (event) => {
  onChangeInput(event);
});

enfermedad.addEventListener("change", (event) => {
  onChangeInput(event);
});

btnAgregar.addEventListener("click", (event) => {
  event.preventDefault();
  let mascotaNueva = new Mascota(
    formulario.propietario,
    formulario.direccion,
    formulario.telefono,
    formulario.tipo,
    formulario.nombreMascota,
    formulario.enfermedad
  );
  /*Desctructuring*/
  //  let datosPropietario = mascotaNueva.datosPropietario();
  let { propietario, direccion, telefono } = mascotaNueva.datosPropietario();
  let nombreMascota = mascotaNueva.getNombre();
  let enfermedadMascota = mascotaNueva.getEnfermedad();
  let cardInfo = `
        <div> 
            <h2> ${nombreMascota}</h2>
            <p>Enfermedad: ${enfermedadMascota}</p>
            <p>El dueño es ${propietario}, que vive en ${direccion}</p>
            <p>Tel: ${telefono}</p>
        </div>
     `;

  resultado.innerHTML = cardInfo;
});
