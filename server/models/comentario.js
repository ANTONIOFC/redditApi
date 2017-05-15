import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const comentarioSchema = new Schema({
    texto: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref: 'Usuario'},
    _post: { type: Schema.ObjectId, ref: 'Post' }
});

const autoPopulateCreator = function(next) {
    this.populate({
        path: '_creator',
        select: 'nome created -_id'
    });
    next();
};

comentarioSchema.pre('find', autoPopulateCreator);

const Comentario = mongoose.model('Comentario', comentarioSchema);

export default Comentario;