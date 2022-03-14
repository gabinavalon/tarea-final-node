const mongoose = require('mongoose');
const LibroSchema = mongoose.Schema(
{
    titulo: {
        type:String,
        required: [true,'El titulo es obligatorio']
    },
    imagen: {
        type:String
    },
    autor: {
        type:String,
        required: [true,'La autoría es obligatoria']
    },
    precio: {
        type:Number
    },
    
}
)
// Sobreescriubimos un método del Schema para modificar el objeto eso eso
LibroSchema.methods.toJSON = function (){
    const {_id,...libro} = this.toObject();
    libro.id= _id;
    return libro;
 }
let Libro = mongoose.model('Libro',LibroSchema);
module.exports = Libro;