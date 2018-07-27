const Locale = require('../models/locale');
let indexController;

indexController = {
    fetch: function fetch(req, res) {
        let language = req.path.replace('/', '');
        Locale.findOne({ 'language': language }, function (err, data) {
            if (err) return res.error(err);

            return res.render('index', data);
        });
    }
};

module.exports = indexController;