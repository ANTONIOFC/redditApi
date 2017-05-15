import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
    titulo: { type: String, required: true },
    link: String,
    texto: String,
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref: 'Usuario'},
    _comentarios: [{ type: Schema.ObjectId, ref: 'Comentario' }],
});

const Post = mongoose.model('Post', postSchema);

export default Post;