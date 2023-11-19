const connection = require("../config/connectionbd");

const products = new connection.Schema({
  codigo: {
    unique: [true, "El codigo ya existe"],
    type: String,
    require: true,
  },
  descripcion: {
    require: [true, "la descripcion es necesaria"],
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
  valor: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
});

const Productos = connection.model("productos", products);

module.exports = Productos;
