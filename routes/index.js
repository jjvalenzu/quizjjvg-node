var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Definición derutas de /quizes
router.get('/quizes',  quizController.index);     // formulario sign un
router.get('/quizes/:quizId(\\d+)',  quizController.show);     // formulario sign un
router.get('/quizes/:quizId(\\d+)/answer',  quizController.answer);     // formulario sign un
router.get('/author/author', quizController.author);

module.exports = router;
