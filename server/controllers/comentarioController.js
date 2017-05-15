import db from './../models';

const comentarioController = {};

comentarioController.post = (req, res) => {
    const {
        texto,
        usuarioId,
        postId
    } = req.body;

    // validation

    // cria o comentário
    const comentario = new db.Comentario({
        texto,
        _creator: usuarioId,
        _post: postId,
    });

    // grava
    comentario.save().then((newComentario) => {
        db.Post.findByIdAndUpdate(
            postId,
            { $push: { '_comentarios': newComentario._id }}
        ).then((existingPost) => {
            res.status(200).json({
                sucess: true,
                data: newComentario,
                existingPost
            });
        }).catch((err) => {
            res.status(500).json({
                message: err.toString(),
            })
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.toString(),
        })
    });

}

export default comentarioController;