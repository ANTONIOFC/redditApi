import db from './../models'; //import db from './../models/index.js'

const usuarioController = {};

usuarioController.post = (req, res) => {
    const { nome, logon, email, senha } = req.body;

    // validation

    // cria o usuário
    const usuario = new db.Usuario({
        nome,
        logon,
        email,
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

usuarioController.put = (req, res) => {

    db.Usuario.findById(req.params.id)
        .select('_id nome logon senha email')
        .then((usuario) => {
            console.log(usuario);
            usuario.nome = req.body.nome || usuario.nome;
            usuario.logon = req.body.logon || usuario.logon;
            usuario.senha = req.body.senha || usuario.senha;
            usuario.email = req.body.email || usuario.email;
            console.log(usuario);
            // grava
            usuario.save().then((usuario) => {
                res.status(200).json({
                    sucess: true,
                    data: usuario,
                })
            }).catch((err) => {
                res.status(500).json({
                    message: err,
                })
            });
    })
};

usuarioController.getAll = (req, res) => {
    // lista
    db.Usuario.find({})
    .select('_id nome logon')
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

usuarioController.getById = (req, res) => {
    // lista
    //db.Usuario.findOne({'_id': req.params.id })
    db.Usuario.findById(req.params.id)
    .select('_id nome logon email')
    .then((usuario) => {
        return res.status(200).json({
            sucess: true,
            data: usuario
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        })
    });
};

usuarioController.logar = (req, res) => {

    console.log('Logon: ' + req.body.logon);
    console.log('Senha: ' + req.body.senha);
    // lista
    db.Usuario.findOne({'logon': req.body.logon, 'senha': req.body.senha })
    .select('_id nome logon email')
    .then((usuario) => {
        return res.status(200).json({
            sucess: true,
            data: usuario
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        })
    });
};

export default usuarioController;
