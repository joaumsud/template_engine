var express = require('express');
var router = express.Router();
var contatoController = require("../controllers/contatoController");
var homeController = require('../controllers/homeController');
var usuarioController = require("../controllers/usuarioController")


/* GET home page. */
router.get('/', homeController.index);
router.get("/contato", contatoController.index);
router.get("/usuario", usuarioController.index);

module.exports = router;