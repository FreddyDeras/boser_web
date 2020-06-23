const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    ruta : { type : String, required : true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Link', linkSchema);