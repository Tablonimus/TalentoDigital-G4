"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Consultorio = void 0;
function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
//En consultorio se agregan getters y setters de la manera mas limpia posible
var Consultorio = (exports.Consultorio = /*#__PURE__*/ (function () {
  function Consultorio(nombre, pacientes) {
    _classCallCheck(this, Consultorio);
    this._nombre = nombre;
    this._pacientes = pacientes || []; //=> si no llegan pacientes en el constructor, dejo un valor por default => [] el array
  }
  return _createClass(Consultorio, [
    {
      key: "nombre",
      get: function get() {
        return this._nombre;
      },
      set: function set(nuevoNombre) {
        this._nombre = nuevoNombre;
      },
    },
    {
      key: "pacientes",
      get: function get() {
        return this._pacientes;
      },
      set: function set(nuevoPaciente) {
        this._pacientes.push(nuevoPaciente);
      },
    },
    {
      key: "buscarPaciente",
      value: function buscarPaciente(nombrePaciente) {
        var pacienteEncontrado = this._pacientes.find(function (paciente) {
          return paciente.nombre === nombrePaciente;
        });
        return (
          pacienteEncontrado || "No se encontraron registros del paciente."
        ); //retorna el objeto paciente
      },
    },
  ]);
})());
