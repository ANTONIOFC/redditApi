const basicController = {};

basicController.get = (req, res) => {
    res.json({
        message: 'Bemvindo a minha API !'
    });
};

export default basicController;