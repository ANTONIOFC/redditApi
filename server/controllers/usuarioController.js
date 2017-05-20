import db from './../models'; //import db from './../models/index.js'

const usuarioController = {};

usuarioController.post = (req, res) => {
    const { nome, senha } = req.body;

    // validation

    // cria o usuário
    const usuario = new db.Usuario({
        nome,
        senha
    });

    // grava
    usuario.save().then((newUsuario) => {
        res.status(200).json({
            sucess: true,
            data: newUsuario,
        })
    }).catch((err) => {
        res.status(500).json({
            message: err,
        })
    });
};

usuarioController.getAll = (req, res) => {
    // lista
    db.Usuario.find({})
    .select('_id nome')
    .then((usuarios) => {
        return res.status(200).json({
            sucess: true,
            data: usuarios
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        })
    });
};

export default usuarioController;
