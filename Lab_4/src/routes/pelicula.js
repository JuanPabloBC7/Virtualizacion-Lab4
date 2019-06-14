const express = require('express');
const router = express.Router();

const peliculaController = require('../controllers/peliculaController');

router.get('/', peliculaController.list);
router.post('/add', peliculaController.save);
router.get('/delete/:ID_Peli', peliculaController.delete);
router.get('/update/:ID_Peli', peliculaController.edit);
router.post('/update/:ID_Peli', peliculaController.update);

module.exports = router;