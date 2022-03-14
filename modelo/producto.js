const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema(
{
    nombre: {
        type:String,
        required: [true,'El nombre es obligatorio']
    },
    imagen: {
        type:String
    },
    categoria: {
        type:String,
        required: [true,'La categoria es obligatoria']
    },
    precio: {
        type:Number
    }
}
)
//sobreescribimos un método del Schema para modificar el objeto que exporta
ProductoSchema.methods.toJSON = function() {
    const { _id,...producto} = this.toObject() ;
    producto.id=_id;
    return producto;
}

let Producto = mongoose.model('Producto',ProductoSchema);
module.exports = Producto;