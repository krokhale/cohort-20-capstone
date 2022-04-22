var express = require('express');
var router = express.Router();

const {Category, Question, Answer} = require('../lib/models')

// REST
// CREATE POST
// UPDATE PUT
// READ GET
// DELETE DELETE

router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll()
    res.json(categories)
});
// questions
// answers


router.post('/categories/:categoryId/questions', async function(req, res, next) {
    // req.body.questionText
    console.log('req.body', req.body)
    console.log('req.params', req.params)

    // questionText, categoryId
    let question = await Question.create({questionTxt: req.body.questionTxt, categoryId: req.params.categoryId})
    // res.json(categories)
    res.json(question)
});


router.get('/categories/:categoryId/questions', async function(req, res, next) {
    // req.body.questionText
    console.log('req.params', req.params)

    let questions = await Question.findAll({where: {categoryId: req.params.categoryId}})
    // res.json(categories)
    res.json(questions)
});

// Create similar API routes for questions and answers


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({api: true})
});

module.exports = router;
