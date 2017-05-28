import db from './../models';

const postController = {};

postController.post = (req, res) => {
    const { 
        titulo,
        texto,
        link,
        s
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

postController.put = (req, res) => {

    db.Post.findById(req.params.id)
        .select('_id titulo texto link')
        .then((post) => {
            console.log(post);
            post.titulo = req.body.titulo || post.titulo;
            post.texto = req.body.texto || post.texto;
            post.link = req.body.link || post.link;
            console.log(post);
            // grava
            post.save().then((post) => {
                res.status(200).json({
                    sucess: true,
                    data: post,
                })
            }).catch((err) => {
                res.status(500).json({
                    message: err,
                })
            });
    })
};


postController.getAll = (req, res) => {
    // lista
    db.Post.find({}).populate({
        path: '_creator',
        select: 'nome createdAt -_id'
    }).populate({
        path: '_comentarios',
        select: 'texto createdAt _creator',
        match: { 'isDeleted': false }
    })
    .then((posts) => {
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

postController.getById = (req, res) => {
    // lista
    db.Post.findOne({'_id': req.params.id }).populate({
        path: '_creator',
        select: 'nome createdAt -_id'
    }).populate({
        path: '_comentarios',
        select: 'texto createdAt _creator',
        match: { 'isDeleted': false }
    })
    .then((post) => {
        return res.status(200).json({
            sucess: true,
            data: post
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        })
    });
};


export default postController;