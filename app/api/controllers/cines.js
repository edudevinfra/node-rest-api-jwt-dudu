const cineModel = require('../models/cines');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        cineModel.findById(req.params.cineId, function (err, cineInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Cine found!!!", data: { cines: cineInfo } });
            }
        });
    },
    getAll: function (req, res, next) {
        let cinesList = [];
        cineModel.find({}, function (err, cines) {
            if (err) {
                next(err);
            } else {
                for (let cine of cine) {
                    cinesList.push({ id: cine._id, name: cine.name, released_on: movie.released_on });
                }
                res.json({ status: "success", message: "Cines list found!!!", data: { cines: cinesList } });

            }
        });
    },
    updateById: function (req, res, next) {
        cineModel.findByIdAndUpdate(req.params.cineId, { name: req.body.name }, function (err, cineInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Cine updated successfully!!!", data: null });
            }
        });
    },
    deleteById: function (req, res, next) {
        cineModel.findByIdAndRemove(req.params.cineId, function (err, cineInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Cine deleted successfully!!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        cineModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "Cine added successfully!!!", data: null });

        });
    },
}
