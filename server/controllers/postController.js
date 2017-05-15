import db from './../models';

const postController = {};

postController.post = (req, res) => {
    const { 
        titulo,
        texto,
        link,
        usuarioId
     } = req.body;

    // TODO: validation

    // cria um post
    const post = new db.Post({
        titulo,
        texto,
        link,   // ou link: link
        _creator: usuarioId
    });

    // grava
    post.save().then((newPost) => {
        res.status(200).json({
            sucess: true,
            data: newPost,
        })
    }).catch((err) => {
        res.status(500).json({
            message: err,
        })
    });
};

postController.getAll = (req, res) => {
    // lista
    db.Post.find({}).populate({
        path: '_creator'
    }).then((posts) => {
        return res.status(200).json({
            sucess: true,
            data: posts
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        })
    });
};

export default postController;