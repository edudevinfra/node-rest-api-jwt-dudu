const express = require('express');
const router = express.Router();
const cineController = require('../app/api/controllers/cines');

router.get('/', cineController.getAll);
router.post('/', cineController.create);
router.get('/:cineId', cineController.getById);
router.put('/:cineId', cineController.updateById);
router.delete('/:cineId', cineController.deleteById);

module.exports = router;