import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true,
        minLength: [5, 'Nome do usuário deve ter 5 ou mais carateres'],
    },
    logon: {
        type: String,
        required: true,
        minLength: [3, 'Logon do usuário deve ter 3 ou mais carateres'],
    },
    email: {
        type: String,
        required: true,
        minLength: [3, 'Email do usuário deve ter 3 ou mais carateres'],
    },
    senha: {
        type: String,
        required: true,
        minLength: [6, 'Senha do usuário deve ter 6 ou mais carateres'],
    },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

// fazer encription para senha
const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;